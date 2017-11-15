<template>
    <div style="display: inline-block;">
        <li class="mitem" v-show="!auth"><a class="mitema"><span><Button type="dashed" v-on:click="showModel">登陆</Button></span></a></li>
        <li class="mitem has-feedback" v-show="auth">
            <a class="mitema" id="top-thisuse" href="javascript:void(0);" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="../../assets/images/avatar/avatar-5.png" alt="" class="header_userimg"/>
            </a>
            <div class="dropdown-menu dropright dropdown-menu-lg" aria-labelledby="top-thisuse">
                <div id="notifications" class="listview">
                    <div class="lv-header"> 个人信息 </div>
                    <div class="lv-body" style="min-height: initial;">
                        <div class="myInfo">
                            <div class="myphoto">
                                <div class="userhead" data-type="update_avatar">
                                    <a href="#" style="display:block;">
                                        <img src="../../assets/images/avatar/avatar-5.png" alt="" width="96px;" height="96px;" />
                                        <span class="change-userhead">更改</span>
                                    </a>
                                </div>
                            </div>
                            <div class="myshow">
                                <div class="myname">{{ name }}</div>
                                <!--<div class="Email">{{ email }}</div>-->
                                <div class="signature">{{ email }}</div>

                                <router-link class="btn btn-success" :to="'/user/' + id">我的账户</router-link>
                                <router-link class="btn btn-default" :to="'/user/' + id + '/setting'">设置</router-link>
                            </div>
                        </div>
                    </div>
                    <a v-on:click="logout" class="lv-footer m-t-10 loginOut" id="JLogout">退出</a>
                </div>
            </div>
        </li>
        <Modal v-model="showLoginmodel" title="自定义宽度" width="318">
            <template v-if="mode == 'login'">
                <h1 slot="header" style="font-size: 2.5rem;color: #333; line-height: 0rem;">
                    登陆
                </h1>
                <Form ref="formInline" :model="formInline" :rules="ruleInline">
                    <FormItem prop="name">
                        <Input type="text" autocomplete="off" v-model="formInline.name" placeholder="用户名">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem prop="password">
                        <Input type="password" autocomplete="off" v-model="formInline.password" placeholder="密码">
                        <Icon type="ios-locked-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" :loading="loading" long @click="handleSubmit('formInline')">登录</Button>
                    </FormItem>
                </Form>
                没有账号？ <a href="javascript:;" @click="goReturn">注册</a>
                <router-link :to="{ name: 'index' }" style="float:right">忘记密码</router-link>
                <div slot="footer">
                </div>
            </template>
            <template v-if="mode == 'register'">
                <h1 slot="header" style="font-size: 2.5rem;color: #333; line-height: 0rem;">
                    注册
                </h1>
                <Form ref="formReInline" :model="formReInline" :rules="ruleReInline">
                    <FormItem prop="name">
                        <Input type="text" autocomplete="off" v-model="formReInline.name" placeholder="用户名">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem prop="email">
                        <Input type="text" autocomplete="off" v-model="formReInline.email" placeholder="邮箱">
                        <Icon type="ios-email-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem prop="password">
                        <Input type="password" autocomplete="off" v-model="formReInline.password" placeholder="密码">
                        <Icon type="ios-locked-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" :loading="loading" long @click="handleReSubmit('formReInline')">注册</Button>
                    </FormItem>
                </Form>
                已有账号？ <a href="javascript:;" @click="goReturn">登陆</a>
                <router-link :to="{ name: 'index' }" style="float:right">忘记密码</router-link>
                <div slot="footer">
                </div>
            </template>
        </Modal>
    </div>
</template>

<script>

    import {mapGetters, mapMutations, mapActions, mapState} from 'vuex';

    export default {
        data() {
            return {
                mode: 'login',
                showLoginmodel: false,
                loading: false,
                formInline: {
                    name: '',
                    password: ''
                },
                formReInline: {
                    name: '',
                    email: '',
                    password: ''
                },
                ruleInline: {
                    name: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ]
                },
                ruleReInline: {
                    name: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    email: [
                        { required: true, message: '请填写邮箱地址', trigger: 'blur' },
                        { type: 'email', message: '邮箱格式有误', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            showModel() {
                this.showLoginmodel = true
            },
            goReturn() {
                if (this.mode == 'login') {
                    this.mode = 'register';
                } else {
                    this.mode = 'login';
                }

            },
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        let self = this
                        this.loading = true
                        let param = new URLSearchParams();
                        param.append("name", this.formInline.name);
                        param.append("password", this.formInline.password);
                        this.$http.post('login', param).then(response => {
                            if (response.data.code == 2000) {

                                this.showLoginmodel = false

                                localStorage.id = response.data.data.id
                                localStorage.name = response.data.data.name
                                localStorage.email = response.data.data.email
                                localStorage.api_token = response.data.data.api_token

                                self.$store.commit('authLogin');
                            }

                            this.loading = false
                        }, response => {
                            // error callback
                        })
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            },
            handleReSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        let self = this
                        this.loading = true
                        let param = new URLSearchParams();
                        param.append("name", this.formReInline.name);
                        param.append("email", this.formReInline.email);
                        param.append("password", this.formReInline.password);
                        this.$http.post('register', param).then(response => {
                            if (response.data.code == 2000) {

                                this.showLoginmodel = false

                                localStorage.id = response.data.data.id
                                localStorage.name = response.data.data.name
                                localStorage.email = response.data.data.email
                                localStorage.api_token = response.data.data.api_token

                                self.$store.commit('authLogin');
                            }

                            this.loading = false
                        }, response => {
                            // error callback
                        })
                    } else {
                        this.$Message.error('请仔细填写');
                    }
                })
            },
            logout() {
                localStorage.removeItem('name');
                localStorage.removeItem('api_token');
                this.$store.commit('authLogout');
            },
            changeMenuState() {
                // login sucess
            }
        },
        computed: {
            ...mapGetters([
                'getAuthState'
            ]),
            auth: function () {
                return this.$store.state.auth;
            },
            id: function () {
                return localStorage.id
            },
            name: function () {
                return localStorage.name
            },
            email: function () {
                return localStorage.email
            }
        },
        watch: {
            getAuthState: function () {
                this.changeMenuState();
            }
        }
    }
</script>