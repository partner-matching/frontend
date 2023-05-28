<template>
    <user-card-list :user-list="userList"></user-card-list>
    <van-empty image="search" v-if="loading && (!userList || userList.length === 0)" description="数据为空"/>
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
    myAxios.get("/user/recommend", {
        params: {
            pageSize: 10,
            pageNum: 1,
        },
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