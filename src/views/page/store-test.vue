<template>
    <div class="store">
        <el-button @click="sync">更新store数据</el-button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({
    data () {
        return {
        }
    },
    components: {
    }
})
export default class Login extends Vue {
    created() {}
    sync() {
        let userInfo = {
            name: "lie_123",
            password: "123456"
        }
        this.$store.dispatch('asyncUpdateUserInfo', userInfo)
        console.log(this.$store.getters.getUserName)
    }
}
</script>
<style scoped>
  
</style>

