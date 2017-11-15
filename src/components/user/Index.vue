<template>
    <div class="main">
        <div class="profile-header">
            <div class="profile-info">
                <div class="container">
                    <div class="profile-info-offset">
                        <h2>{{ name }}</h2>
                        <div>
                            <p>{{ email }}</p>
                            <p>这位同学很懒，啥都没写</p>
                            <a href="#"><em>2</em><span>粉丝</span></a>
                            <a href="#"><em>5</em><span>关注</span></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="profile-banner"></div>
        </div>
        <div class="container" style="margin-top: -125px;">
            <div class="pinwrapper">
                <div class="leftmenu">
                    <div class="user-img"><img src="../../assets/images/avatar/avatar-5.png" alt=""></div>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <router-link :to="'/user/' + id"><i class="material-icons">account_circle</i>个人中心</router-link>
                        </li>
                        <li class="list-group-item">
                            <router-link :to="'/user/' + id + '/setting'"><i class="material-icons">settings</i>个人设置</router-link>
                        </li>
                        <li class="list-group-item">
                            <router-link :to="'/user/' + id + '/liveinfo'"><i class="material-icons">ondemand_video</i>我的直播间</router-link>
                        </li>
                        <li class="list-group-item">
                            <router-link :to="'/user/' + id + '/livesetting'"><i class="material-icons">settings</i>设置直播间</router-link>
                        </li>
                        <li class="list-group-item">
                            <router-link :to="'/user/' + id + '/note'"><i class="material-icons">border_color</i>我的笔记</router-link>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="cards shadow_z1 leftmenu-offset">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import '../../assets/js/jquery.pin'

    export default {
        data() {
            return {

            }
        },
        mounted() {
            $(".leftmenu").pin({
                containerSelector: ".container",
                padding: {top: 80}
            })
        },
        computed: {
            name: function () {
                return localStorage.name
            },
            email: function () {
                return localStorage.email
            },
            id: function () {
                return localStorage.id
            }
        }
    }
</script>