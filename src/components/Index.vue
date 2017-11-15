<template>
    <div class="main">
        <div class="live-main">
            <div class="container">
                <div class="row media-12">
                    <div class="col-md-12">
                        <div class="row live-tab">
                            <!-- Nav tabs -->
                            <div class="col-md-10 col-xs-12">
                                <div class="tab-content video-main">
                                    <Live :id="id"></Live>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <ul class="nav nav-tabs" role="tablist">
                                    <li role="presentation" v-for="room in room_list">
                                        <a href="#lvtab1" data-toggle="tab"><img src="../assets/images/cover/6.jpg" alt=""></a>
                                    </li>
                                    <!--<li role="presentation" v-for="n in die_room">-->
                                    <li role="presentation">
                                        <a href="#lvtab2" data-toggle="tab"><img src="../assets/images/cover/2.jpg" alt=""></a>
                                    </li>
                                    <li role="presentation">
                                        <a href="#lvtab2" data-toggle="tab"><img src="../assets/images/cover/3.jpg" alt=""></a>
                                    </li>
                                    <li role="presentation">
                                        <a href="#lvtab2" data-toggle="tab"><img src="../assets/images/cover/4.jpg" alt=""></a>
                                    </li>
                                    <li role="presentation">
                                        <a href="#lvtab2" data-toggle="tab"><img src="../assets/images/cover/5.jpg" alt=""></a>
                                    </li>


                                </ul>
                            </div>
                            <!-- Tab panes -->
                        </div>
                    </div><!--col-12 end-->
                </div>
            </div>
            <div class="live-main-bg" style="background: url../assets/images/icon-seamless.png)"></div>
        </div><!--live-main end-->

        <div class="container">
            <div class="row">
                <div class="col-md-7 col-sm-12 col-xs-12 delayedLive">
                    <h3 class="sectitle" style="margin-left: 16px;">录播</h3>
                    <div class="video-list">
                        <div class="item-box">
                            <img src="../assets/images/cover/java.jpg" style="width: 100%;height: 100%;">
                        </div>
                        <div class="item-box">
                            <img src="../assets/images/cover/Android.jpg" style="width: 100%;height: 100%;">
                        </div>
                        <div class="item-box">
                            <img src="../assets/images/cover/HTML5.jpg" style="width: 100%;height: 100%;">
                        </div>
                        <div class="item-box">
                            <img src="../assets/images/cover/Photoshop.jpg" style="width: 100%;height: 100%;">
                        </div>
                        <div class="item-box">
                            <img src="../assets/images/cover/PHP.jpg" style="width: 100%;height: 100%;">
                        </div>
                        <div class="item-box">
                            <img src="../assets/images/cover/java.jpg" style="width: 100%;height: 100%;">
                        </div>
                    </div>
                </div><!--delayedLive end-->
                <div class="col-md-5 col-sm-12 col-xs-12 note">
                    <h3 class="sectitle">笔记</h3>


                    <div class="media" v-for="note in note_list">
                        <div class="media-left">
                            <a href="#">
                                <img class="media-object" src="../assets/images/avatar/avatar-3.png" alt="...">
                            </a>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading"><router-link :to="{ name: 'notePage', params: { id: note.id }}">{{ note.title }}</router-link></h4>
                            <p>{{ note.content|htmlFilter }}</p>
                            <span class="user"><a href="#">{{ note.user.name }}</a></span>
                            <div class="details"><i class="material-icons">thumb_up</i><span>20</span></div>
                        </div>
                    </div>

                </div><!--note end-->
            </div>
        </div>
    </div><!--main end-->
</template>

<script>
    import Vue from 'vue'

    Vue.filter('htmlFilter', function(value) {
        return value.replace(/<[^>]+>/g,"");
    })

    export default {
        data() {
            return {
                id: 51684,
                room_count: 5,
                room_list: [],
                note_count: '',
                note_list: []
            }
        },
        mounted() {
            this.$http.post('/api/index/data').then(res => {
                this.room_count = res.data.data.room_count
                this.room_list =  res.data.data.room_list
                this.note_count = res.data.data.note_count
                this.note_list = res.data.data.note_list
                this.id = this.getObjFirst(this.room_list).id
            })
        },
        methods: {
            getObjFirst(obj){
                for(let i in obj) return obj[i];
            },
            test() {
                this.id = 51684
            }
        },
        computed: {
            die_room: function () {
                return 5-this.room_count
            }
        }
    }
</script>

<style>
</style>