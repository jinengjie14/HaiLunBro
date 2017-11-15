<template>
    <textarea v-model="content" id="editor" name="content" placeholder="让我们远离喧嚣，静下心写一篇笔记" autofocus></textarea>
</template>

<script>
    import Simditor from 'simditor'

    import "../../assets/css/editor/editor.scss";
    import "../../assets/css/editor/fonticon.scss";
    import "../../assets/css/editor/simditor.scss";

    export default {
        data() {
            return {
                content: ''
            }
        },
        mounted() {
            var editor = new Simditor({
                textarea: $('#editor')
                //optional options
            });
            editor.on("valuechanged", () => {
                this.content = editor.getValue()
                this.$emit('update:content', editor.getValue())
            })//valuechanged是simditor自带获取值得方法
        }
    }
</script>