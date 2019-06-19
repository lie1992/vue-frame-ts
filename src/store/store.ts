const state = {
    all: [],
    name: 'user_name',
    password: 'password_0123'
}

// getters
const getters = {
    getUserName: (st: object) => {
        return st["name"]
    }
}

const actions = {
    asyncUpdateUserInfo(context: any, info: object) {
        context.commit("updateUserInfo", info)
    }
}

const mutations = {
    updateUserInfo(state: object, info: object) {
        state["name"] = info["name"]
        state["password"] = info["password"]
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
