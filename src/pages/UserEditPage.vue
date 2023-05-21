<template>
  <van-form @submit="onSubmit">
    <van-field
        v-if="editUser.component === 'text'"
        v-model="editUser.currentValue"
        :name="editUser.editKey"
        :label="editUser.editName"
        :placeholder="`请输入${editUser.editName}`"
    />
    <van-field
        v-if="editUser.component === 'picker'"
        v-model="editUser.currentValue"
        is-link
        readonly
        :label="editUser.editName"
        :placeholder="`请输入${editUser.editName}`"
        @click="showPicker = true"
    />
    <van-popup v-model:show="showPicker" round position="bottom">
      <van-picker
          v-model="editUser.currentValue"
          :columns="[
      { text: '男', value: 0 },
      { text: '女', value: 1 },
    ]"
          @cancel="showPicker = false"
          @confirm="onConfirm"
      />
    </van-popup>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="onSubmit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script setup>

import {useRoute, useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios.js";
import {getCurrentUser} from "../services/user.ts";
import {deleteCurrentUserState} from "../states/user.ts";

const route = useRoute();
const router = useRouter()
const editUser = ref({
  editKey: route.query.editKey,
  currentValue: route.query.currentValue,
  editName: route.query.editName,
  component: route.query.component
})
const showPicker = ref(false);

const onConfirm = () => {
  showPicker.value = false;
};

const onSubmit = async (values) => {
  const currentUser = await getCurrentUser()
  myAxios.post("/user/update", {
    data: {
      'id': currentUser.id,
      [editUser.value.editKey]: editUser.value.currentValue,
    }
  }).then(() => {
    deleteCurrentUserState()
    router.back()
  })
}
</script>

<style scoped>

</style>