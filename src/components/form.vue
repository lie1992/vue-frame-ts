<template>
    <div class="form">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="账号">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click=login()>提交</el-button>
            </el-form-item>
        </el-form>
        {{post.name}}
        {{value}}
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop} from "vue-property-decorator";
import myMixins from "@/mixin/index";

// 对prop数据进行类型约束
export interface Post {
    param: object,
    name: string,
    sex: number
}

@Component({
    components: {},
    mixins: [myMixins]
})

export default class Login extends Vue {
    @Prop() post!: object
    form: object = {
        username: "",
        password: "",
        grant_type: "password",
        client_id: "Portal",
        client_secret: "4b0e4e4c-a86e-4759-ad08-b9ea0558aa6d",
        scope: "PortalAPI offline_access"
    };
    created() {}

    login() {
        this.$emit("login", this.form)
    }
}
</script>
<style scoped>
.form {
    width: 500px;
}
</style>

