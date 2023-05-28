<template>
    <van-card
            v-for="user in props.userList"
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
            <van-tag plain type="primary" v-for="(_, tag) in JSON.parse(user.tags)"
                     style="margin-right: 8px;margin-top: 8px">
                {{ tag }}
            </van-tag>
        </template>
        <template #footer>
            <van-button size="mini">联系我</van-button>
        </template>
    </van-card>
</template>

<script setup>
const props = defineProps({
        userList: {
            type: Array,
            default: [],
        }
    }
)
</script>

<style scoped>

</style>