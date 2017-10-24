<template>
    <div class="main">
        <div class="container videotainer">
            <div class="row">
                <div class="col-md-9">
                    <div class="video-header shadow_z1">
                        <div class="teacher-img"><img src="../assets/images/user.jpg" alt=""></div>
                        <div class="classinfo">
                            <h1 class="title">教学课程名称</h1>
                            <div class="follow-total">
                                <a href="#"><i class="material-icons">favorite</i> 关注</a>
                                <span>25613</span>
                            </div>
                            <ol class="breadcrumb">
                                <li><a href="#">主分类</a></li>
                                <li><a href="#">分类1</a></li>
                                <li class="active">教学课程名称</li>
                            </ol>
                            <ul class="cauthor">
                                <li>主讲师：<a href="#">赵少锋</a></li>
                                <li><i class="material-icons">remove_red_eye</i><span>40</span></li>
                            </ul>
                            <a href="#" class="share-video-btn"><i class="material-icons">share</i>分享</a>
                            <a href="#" class="btn btn-primary signclass">签到</a>
                        </div>
                    </div>
                    <div class="video-main">
                        MAIN
                    </div><!--video-main end-->
                </div><!--col9 end-->
                <div class="col-md-3">
                    <div class="about-class shadow_z1">
                        <div class="card-head"><i class="material-icons">bookmark</i>关于课程</div>
                        <p>教学课程名称是一门怎样怎样的课，拥有什么样什么样的老师以及教室有怎样怎样的设备，开在哪里上课，有几节课等详细的信息。</p>
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
                </div><!--col3 end-->
                <div class="col-md-12">
                    <div class="main-comment shadow_z1">
                        <ul class="nav nav-tabs" role="tablist">
                            <li role="presentation" class="active">
                                <a href="#home" aria-controls="home" role="tab" data-toggle="tab">评论</a>
                            </li>
                            <li role="presentation">
                                <a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">提问</a>
                            </li>
                            <li role="presentation">
                                <a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">笔记</a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div role="tabpanel" class="tab-pane active" id="home">
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#">
                                            <img class="media-object img-responsive" src="../assets/images/face1.png" alt="">
                                        </a>
                                    </div>
                                    <div class="media-body">
                                        <h4 class="media-heading">张三</h4>
                                        <span>张三发表了一个评论</span>
                                    </div>
                                </div><!--media end-->
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#">
                                            <img class="media-object img-responsive" src="../assets/images/face2.png" alt="">
                                        </a>
                                    </div>
                                    <div class="media-body">
                                        <h4 class="media-heading">李四</h4>
                                        <span>李四也发表了一个评论，一条很长很长的评论。李四也发表了一个评论，一条很长很长的评论。李四也发表了一个评论，一条很长很长的评论。李四也发表了一个评论，一条很长很长的评论。李四也发表了一个评论，一条很长很长的评论。李四也发表了一个评论，一条很长很长的评论。李四也发表了一个评论，一条很长很长的评论。</span>
                                        <div class="media">
                                            <div class="media-left">
                                                <a href="#">
                                                    <img class="media-object img-responsive" src="../assets/images/face1.png" alt="">
                                                </a>
                                            </div>
                                            <div class="media-body">
                                                <h4 class="media-heading">张三</h4>
                                                <span>张三发表了一个评论</span>
                                            </div>
                                        </div><!--media end-->
                                    </div>
                                </div><!--media end-->
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#">
                                            <img class="media-object img-responsive" src="../assets/images/face4.png" alt="">
                                        </a>
                                    </div>
                                    <div class="media-body">
                                        <h4 class="media-heading">王五</h4>
                                        <span>王五也发表了一个评论</span>
                                    </div>
                                </div><!--media end-->
                            </div>
                            <div role="tabpanel" class="tab-pane" id="profile">提问提问提问</div>
                            <div role="tabpanel" class="tab-pane" id="messages">笔记笔记笔记</div>
                        </div>
                    </div>
                </div><!--col12 end-->
            </div>
        </div>
    </div><!--main end-->
</template>

<script>
    export default {

    }
</script>