<template>
    <user-card-list :user-list="userList"></user-card-list>
    <van-empty image="search" v-if="loading && (!userList || userList.length === 0)" description="搜索结果为空"/>
</template>
<script setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios.js";
import qs from "qs"
import UserCardList from "../components/UserCardList.vue";

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