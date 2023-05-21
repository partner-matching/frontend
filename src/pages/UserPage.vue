<template>
  <template v-if="user">
    <van-cell title="昵称" is-link :value="user.userName || '未设置'" @click="toEdit('userName', '昵称', user.userName)"/>
    <van-cell title="账号" :value="user.userAccount"/>
    <van-cell title="头像" is-link to="/user/edit">
      <img style="height: 48px" :src="user.avatarUrl">
    </van-cell>
    <van-cell title="性别" is-link :value="user.gender === 0 ? '男':'女'" @click="toEdit('gender', '性别', user.gender, 'picker')"/>
    <van-cell title="电话" is-link :value="user.phone  || '未设置'"
              @click="toEdit('phone', '电话', user.phone)"/>
    <van-cell title="邮箱" is-link :value="user.email  || '未设置'"
              @click="toEdit('email', '邮箱', user.email)"/>
    <van-cell title="注册时间" :value="user.createTime"/>
  </template>
</template>

<script setup>
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios.js";
import {showToast} from "vant";
import {getCurrentUser} from "../services/user.ts";

const user = ref()

const router = useRouter()
const toEdit = (editKey, editName, currentValue, component = 'text') => {
  router.push({
    path: "/user/edit",
    query: {
      editKey,
      editName,
      currentValue,
      component,
    }
  })
}

onMounted(async () => {
  user.value = await getCurrentUser()
})
</script>

<style scoped>

</style>