<template>
<div class="header">
      <div class="container">
        <div class="layout_header-row">
          <div class="logo"><a href="#">教学平台</a></div>
          <ul class="nav navbar-nav">
            <li class="active"><router-link :to="{ name: 'index' }">首页</router-link></li>
            <li><router-link :to="{ name: 'index' }">直播</router-link></li>
            <li><router-link :to="{ name: 'test' }">录播</router-link></li>
            <li><router-link :to="{ name: '123123' }">笔记</router-link></li>
          </ul>
          <ul class="top-menu">
            <li class="mitem">
              <a class="mitema" href="javascript:void(0);" id="top-search"><i class="material-icons">search</i></a>
              <div id="top-search-wrap">
                <div class="tsw-inner">
                  <i id="top-search-close" class="material-icons">arrow_back</i>
                  <form><input type="text" name="keyword"></form>
                </div>
              </div>
            </li>
            <li class="mitem has-feedback hidden-xs">
              <a class="mitema" id="notifications" href="javascript:void(0);" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="material-icons">notifications</i>
              </a>
              <div class="dropdown-menu dropright dropdown-menu-lg" aria-labelledby="notifications">
                <div class="listview" id="notifications">
                  <div class="lv-header"> 消息提醒
                    <a href="javascript:void(0);"><i class="material-icons">done_all</i></a>
                  </div>
                  <div class="lv-body"> </div>
                  <a class="lv-footer" href="javascript:void(0);">所有消息</a> 
                </div>
              </div>
            </li>
            <li class="mitem" v-show="!isLogin"><a class="mitema"><span><Button type="dashed" v-on:click="showModel">登陆</Button></span></a></li>
            <li class="mitem has-feedback" v-show="isLogin">
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
                        <div class="myname">赵少锋</div>
                        <div class="Email">123456@qq.com</div>
                        <div class="signature">这是个性签名</div>

                        <router-link class="btn btn-success" to="/user/7911">我的账户</router-link>
                        <a href="#" class="btn btn-default">设置</a>
                      </div>
                    </div>
                  </div>
                  <a href="javascript:void(0);" class="lv-footer m-t-10 loginOut" id="JLogout">退出</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Modal v-model="showLoginmodel" title="自定义宽度" width="318">
        <h1 slot="header" style="font-size: 2.5rem;color: #333; line-height: 0rem;">
          登陆
        </h1>
        <Form ref="formInline" :model="formInline" :rules="ruleInline">
          <FormItem prop="user">
            <Input type="text" autocomplete="off" v-model="formInline.account" placeholder="用户名">
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
        没有账号？ <router-link :to="{ name: 'index' }">注册</router-link>
        <router-link :to="{ name: 'index' }" style="float:right">忘记密码</router-link>
        <div slot="footer">
        </div>
      </Modal>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showLoginmodel: false,
            loading: false,
            formInline: {
                account: '',
                password: ''
            },
            ruleInline: {
                account: [
                    { required: true, message: '请填写用户名', trigger: 'blur' }
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
        del() {

        },
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    let self = this
                    this.loading = true
                    let param = new URLSearchParams();
                    param.append("account", this.formInline.account);
                    param.append("password", this.formInline.password);
                    this.$http.post('http://10.1.65.33:81/login', param, {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                    }).then(response => {
                        if (response.data.code == 200) {
                            this.showLoginmodel = false
                            self.$Message.success('欢迎回来,'+response.data.data.account);
                            localStorage.login = true
                            localStorage.account = response.data.data.account
                            localStorage.id = response.data.data.id
                        }

                        if (response.data.code == 412) {
                            self.$Message.error(response.data.msg);
                        }

                        this.loading = false
                    }, response => {
                        // error callback
                    })
                } else {
                    this.$Message.error('表单验证失败!');
                }
            })
        }
    },
    computed: {
        isLogin: function () {
            if (typeof (localStorage.login) == 'undefined') {
                return false
            }
            console.log('is true')
            return true
        }
    }
}
</script>

<style lang="less">
  .btn-primary {
    background: rgb(76,175,80);
  }

  .vertical-center-modal{
    display: flex;
    align-items: center;
    justify-content: center;

    .ivu-modal{
      top: 0;
    }
  }

  .ivu-input-group-prepend {
    width: 34px !important;
  }

  .plyr {
    height:100%;
  }

  .plyr__video-wrapper {
    height:100%;
  }

  #videoElement {
    height:100%;
  }
</style>