<template>
    <div class="main">
        <div class="container videotainer">
            <div class="row">
                <div class="col-md-9">
                    <div class="video-header shadow_z1">
                        <div class="teacher-img"><img src="../assets/images/avatar/avatar-5.png" alt=""></div>
                        <div class="classinfo">
                            <h1 class="title">{{ room.title }}</h1>
                            <div class="follow-total">
                                <a href="#"><i class="material-icons">favorite</i> 关注</a>
                                <span>25613</span>
                            </div>
                            <ol class="breadcrumb">
                                <li class="active">{{ room.type }}</li>
                            </ol>
                            <ul class="cauthor">
                                <li>主讲师：<a href="#">{{ user.name }}</a></li>
                                <li><i class="material-icons">remove_red_eye</i><span>40</span></li>
                            </ul>
                            <a href="#" class="share-video-btn"><i class="material-icons">share</i>分享</a>
                            <Button type="primary" class="signclass">签到</Button>
                        </div>
                    </div>
                    <div class="video-main">
                        <RoomLive :id="id"></RoomLive>
                    </div><!--video-main end-->
                </div><!--col9 end-->
                <div class="col-md-3">
                    <div class="about-class shadow_z1">
                        <div class="card-head"><i class="material-icons">bookmark</i>直播公告</div>
                        <p>{{ room.announcement }}</p>
                    </div>
                    <div class="video-comment shadow_z1">
                        <div class="card-head"><i class="material-icons">comment</i>课堂讨论</div>
                        <div class="comment-list">
                            <div class="media">
                                <div class="media-body">
                                    <h4 class="media-heading">张三</h4>
                                    <span>进入直播平台，完成了签到</span>
                                </div>
                            </div>
                            <div class="media">
                                <div class="media-body">
                                    <h4 class="media-heading">李四</h4>
                                    <span>你好啊李四举起了小手，发表了自己的疑问，这是他发表的评论巴拉巴拉巴拉巴拉巴拉</span>
                                </div>
                            </div>
                            <div class="media">
                                <div class="media-body">
                                    <h4 class="media-heading">王五</h4>
                                    <span>你好啊</span>
                                </div>
                            </div>
                        </div><!--commen-list end-->
                        <div class="send-comment">
                            <div class="textarea" contenteditable="true"></div>
                            <a href="javascript:void(0);" class="btn btn-default">
                                <i class="material-icons">send</i>
                            </a>
                        </div>
                    </div>
                </div>
                <!--<div class="col-md-12">-->
                <!--<div class="main-comment shadow_z1">-->
                <!--<ul class="nav nav-tabs" role="tablist">-->
                <!--<li role="presentation" class="active">-->
                <!--<a href="#messages" aria-controls="note" role="tab" data-toggle="tab">笔记</a>-->
                <!--</li>-->
                <!--</ul>-->
                <!--<div class="tab-content">-->
                <!--<div role="tabpanel" class="tab-pane active" id="note">-->
                <!--<Editor></Editor>-->
                <!--</div>-->
                <!--</div>-->
                <!--</div>-->
                <!--</div>-->
            </div>
        </div>
    </div><!--main end-->
</template>

<script>
    export default {
        data() {
            return {
                id: 51684,
                user: {},
                room: {}
            }
        },
        mounted() {
            this.$http.post('/api/liveroom/info/' + this.$route.params.roomId).then(res => {
                this.user = res.data.data.user
                this.room = res.data.data
            })
        },
    }
</script>