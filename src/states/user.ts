import {UserType} from "../models/user";

let currentUser;
const setCurrentUserState = (user: UserType) => {
    currentUser = user
}

const getCurrentUserState = (): UserType => {
    return currentUser;
}

const deleteCurrentUserState = () => {
    currentUser = null;
}

export {
    setCurrentUserState,
    getCurrentUserState,
    deleteCurrentUserState
}