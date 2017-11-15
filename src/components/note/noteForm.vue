<template>
    <div class="currency-form-holder">
        <div class="party-form shadow_z1" >
            <div class="form-header">
                <div class="tvh-user pull-left">
                    <img class="img-responsive" src="../../assets/images/avatar/avatar-5.png" alt="">
                </div>
                <div class="media-body p-t-5">
                    <strong class="col-md-6 col-sm-6 col-xs-6 text-center">作者：{{name}}</strong>
                    <strong class="col-md-6 col-sm-6 col-xs-6 text-center">发布时间：2016.10.14</strong>
                </div>
                <div class="party-menu">
                    <i class="material-icons currency-form-close" @click="toggleForm">close</i>
                </div><!--party-menu end-->
            </div><!--form-header end-->
            <div class="form-body">
                <form action="">
                    <div class="form-group label-floating row">
                        <div class="col-md-12 plr0">
                            <Input v-model="article.title" placeholder="输入标题"></Input>
                        </div>
                    </div><!--form-group end-->
                    <div class="form-group label-floating row">
                        <div class="col-md-12 plr0">
                            <Editor :content.sync="article.content"></Editor>
                        </div>
                    </div><!--form-group end-->

                    <div class="form-group label-floating row">
                        <div class="button-label">
                            <Select v-model="article.type" clearable style="width:200px; text-align: left; float: left;">
                                <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                            <button type="button" class="btn btn-default" @click="toggleForm">取消</button>
                            <button type="button" class="btn btn-success" @click="publicForm">提交</button>
                        </div><!--button-label end-->
                    </div>
                </form>
            </div><!--form-body end-->
        </div><!--party-form end-->
    </div><!--currency-form-holder end-->
</template>

<script>
    export default {
        data() {
            return {
                showForm: true,
                article: {
                    title: '',
                    content: '',
                    type: ''
                },
                typeList: [
                    {
                        value: 'HTML/CSS',
                        label: 'HTML/CSS'
                    },
                    {
                        value: 'JQuery',
                        label: 'JQuery'
                    },
                    {
                        value: 'PHP',
                        label: 'PHP'
                    },
                    {
                        value: 'JAVA',
                        label: 'JAVA'
                    },
                    {
                        value: 'Vue',
                        label: 'Vue'
                    },
                    {
                        value: 'Spring',
                        label: 'Spring'
                    },
                    {
                        value: '其他',
                        label: '其他'
                    }
                ]
            }
        },
        methods: {
            toggleForm() {
                this.$emit('update:showForm', false)
            },
            publicForm() {
                this.$http.post('/api/article/post', this.article).then(res => {
                    if (res.data.code == 4008)
                    {
                        setTimeout(this.refresh,2000)
                    }
                })
            },
            refresh() {
                this.$router.go(0)
            }
        },
        computed: {
            name: function () {
                return localStorage.name
            }
        }
    }
</script>