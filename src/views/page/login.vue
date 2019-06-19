<template>
    <div class="login">
        <v-form v-on:login="login" :post="postData" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { token } from "@/api/index"
import form from "@/components/form.vue"

@Component({
    data () {
        return {
            isLoading: false
        }
    },
    components: {
        "v-form": form
    }
})
export default class Login extends Vue {
    public postData: object = {
        param: {},
        name: "lie0123",
        sex: 1
    }
    created() {}
    async login(data: object) {
        let res = await token(data)
        // console.log(res)
    }
}
</script>
<style scoped>
    .login {
        width: 500px;
    }
</style>

