import Vue from 'vue';
import  Component  from 'vue-class-component';

@Component  // 一定要用Component修饰
export default class myMixins extends Vue {
    value: string = "Hello"

    created() {
        this.init()
    }

    init() {
        this.value = this.value + " boy"
    }
}