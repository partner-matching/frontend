<template>
  <van-card
      v-for="user in userList"
      :desc="user.profile"
      :title="`${user.userName}（${user.userAccount}）`"
  >
    <template #thumb>
      <van-image
          round
          fit="cover"
          position="left"
          :src="user.avatarUrl"
      />
    </template>
    <template #tags>
      <van-tag plain type="primary" v-for="(_, tag) in JSON.parse(user.tags)" style="margin-right: 8px;margin-top: 8px">
        {{ tag }}
      </van-tag>
    </template>
    <template #footer>
      <van-button size="mini">联系我</van-button>
    </template>
  </van-card>
  <van-empty image="search" v-if="loading && (!userList || userList.length === 0)" description="搜索结果为空"/>
</template>
<script setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios.js";
import qs from "qs"

const router = useRoute()
const {tags} = router.query
const loading = ref(false)

const userList = ref([])

onMounted(() => {
  myAxios.get("/user/search/tags", {
    params: {
      tagNameList: tags
    },
    paramsSerializer: params => {
      return qs.stringify(params, {indices: false})
    }
  }).then((data) => {
    userList.value = data
  }).then(() => {
  }).then(() => {
    loading.value = true
  })
})

</script>

<style scoped>

</style>