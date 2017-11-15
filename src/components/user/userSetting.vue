<template>
    <div class="form-horizontal setroom">
        <Form>
            <div class="form-group">
                <label class="col-md-2 control-label">用户ID</label>
                <div class="col-md-10">
                   <p class="form-control-static">
                       {{ user.id }}
                   </p>
                </div>
            </div>
            <div class="form-group">
                <label class="col-md-2 control-label">用户名</label>
                <div class="col-md-4">
                    <FormItem prop="name">
                        <Input type="text" autocomplete="off" v-model="user.name" placeholder="用户名">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                </div>
                <div class="col-md-2">
                    <Button type="dashed" @click="change('changeUserName','name')">保存</Button>
                </div>
            </div>
            <div class="form-group">
                <label class="col-md-2 control-label">邮箱地址</label>
                <div class="col-md-4">
                    <FormItem prop="name">
                        <Input type="text" autocomplete="off" v-model="user.email" placeholder="邮箱地址">
                        <Icon type="ios-email-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                </div>
                <div class="col-md-2">
                    <Button type="dashed" @click="change('changeUserEmail','email')">保存</Button>
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-2 control-label">关联直播间</label>
                <div class="col-md-10">
                    <router-link class="ivu-btn ivu-btn-success" :to="'/user/'+ user.id + '/liveinfo' ">直播间详情</router-link>
                    <Button type="error">注销直播间</Button>
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-2 control-label">注册时间</label>
                <div class="col-md-10">
                    <p class="form-control-static">{{ user.created_at }}</p>
                </div>
            </div>

            <div class="form-group">
                <label class="col-md-2 control-label">最后一次登陆时间</label>
                <div class="col-md-10">
                    <p class="form-control-static">{{ user.updated_at }}</p>
                </div>
            </div>
        </Form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {}
            }
        },
        mounted() {
            this.$http.get('/api/user').then(res => {
                this.user = res.data
            })

        },
        methods: {
            change(functionName,name) {
                let param = new URLSearchParams();
                param.append(name, eval('this.user.'+name));
                this.$http.post('/api/change/'+functionName, param).then(res => {
                    // nothing to do ~
                })
            }
        }
    }
</script>