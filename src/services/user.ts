import myAxios from "../plugins/myAxios";
import {showToast} from "vant";
import {useRouter} from "vue-router";
import {getCurrentUserState, setCurrentUserState} from "../states/user";


export const getCurrentUser = async () => {
    const router = useRouter()
    const currentUser = getCurrentUserState()
    if (!currentUser) {
        const data = await myAxios.get("/user/current")
        if (data.empty) {
            showToast("请先注册");
            await router.push("/user/login")
            return
        }
        setCurrentUserState(data)
        return data
    }
    return currentUser
}