<template>
    <div>
        <div class="layout_drawer visible-xs">
            <div class="head visible-xs">
                <span>教学直播平台</span>
            </div>
            <ul class="drawer-menu" name="drawer-menu">
                <li><a href="index.html"><i class="material-icons">home</i>首页</a></li>
                <li class="active"><a href="javascript:;" class="vcdrawer_button"><i class="material-icons">ondemand_video</i>直播分类<em class="material-icons">chevron_right</em></a></li>
                <li><a href="delayedLive.html"><i class="material-icons">videocam</i>录播</a></li>
                <li><a href="note.html"><i class="material-icons">border_color</i>笔记</a></li>
            </ul>
        </div>
        <div class="layout_obfuscator"></div>

        <div class="video_classify_drawer">
            <div class="head visible-xs">
                <i class="material-icons back_drawer">arrow_back</i><span>直播分类</span>
            </div>
            <ul class="drawer-menu" name="drawer-menu">
                <li class="active"><a href="#"><i class="material-icons">ondemand_video</i>全部直播</a></li>
                <li><a href="#"><i class="material-icons">school</i>课堂分类</a></li>
                <li><a href="#"><i class="material-icons">tag_faces</i>课外直播</a></li>
                <li><a href="#"><i class="material-icons">favorite</i>我的关注</a></li>
            </ul>
        </div>
        <div class="main vlistainer">

            <div class="video-main-list">
                <div class="item-grid">
                    <Carousel v-model="value1" loop>
                        <CarouselItem>
                            <div class="demo-carousel"></div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="demo-carousel"></div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="demo-carousel"></div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="demo-carousel"></div>
                        </CarouselItem>
                    </Carousel>
                    <div class="item-head">
                        <div class="item-detail">
                            <div class="ititle"><a href="#">电子信息技术系</a></div>
                            <div class="ifollow">1965关注</div>
                        </div>
                        <div class="follow-btn"><a href="javascript:void(0);" class="" action-type="follow">关注</a></div>
                    </div>
                    <div class="item" v-for="room in roomList">
                        <div class="icarder">
                            <a href="javascript:;">
                                <div class="video-preview"><img src="../assets/images/cover/6.jpg" alt=""></div>
                                <p class="title"><router-link :to="{ name: 'liveRoom', params: { roomId: room.id }}">{{ room.title }}</router-link></p>
                                <div class="details">
                                    <a href="#" class="name">{{ room.user.name }}</a>
                                    <div class="hot" title="人气值：32">
                                        <i class="material-icons">people</i><span>32</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
                <!--<div class="item-grid">-->
                <!--<div class="item-head">-->
                <!--<div class="item-detail">-->
                <!--<div class="ititle"><a href="#">设计学院</a></div>-->
                <!--<div class="ifollow">64161关注</div>-->
                <!--</div>-->
                <!--<div class="follow-btn"><a href="javascript:void(0);" class="" action-type="follow">关注</a></div>-->
                <!--</div>-->
                <!--<div class="item">-->
                <!--<div class="icarder">-->
                <!--<a href="javascript:;">-->
                <!--<div class="video-preview"><img src="../assets/images/cover/java.jpg" alt=""></div>-->
                <!--<p class="title">基于bootstrap的网页开发-响应式布局</p>-->
                <!--<div class="details">-->
                <!--<a href="#" class="name">LaraWei</a>-->
                <!--<div class="hot" title="人气值：32">-->
                <!--<i class="material-icons">people</i><span>32</span>-->
                <!--</div>-->
                <!--</div>-->
                <!--</a>-->
                <!--</div>-->
                <!--</div>-->
                <!--<div class="item">-->
                <!--<div class="icarder">-->
                <!--<a href="javascript:;">-->
                <!--<div class="video-preview"><img src="../assets/images/cover/java.jpg" alt=""></div>-->
                <!--<p class="title">基于bootstrap的网页开发-响应式布局</p>-->
                <!--<div class="details">-->
                <!--<a href="#" class="name">LaraWei</a>-->
                <!--<div class="hot" title="人气值：32">-->
                <!--<i class="material-icons">people</i><span>32</span>-->
                <!--</div>-->
                <!--</div>-->
                <!--</a>-->
                <!--</div>-->
                <!--</div>-->
                <!--<div class="item">-->
                <!--<div class="icarder">-->
                <!--<a href="javascript:;">-->
                <!--<div class="video-preview"><img src="../assets/images/cover/java.jpg" alt=""></div>-->
                <!--<p class="title">基于bootstrap的网页开发-响应式布局</p>-->
                <!--<div class="details">-->
                <!--<a href="#" class="name">LaraWei</a>-->
                <!--<div class="hot" title="人气值：32">-->
                <!--<i class="material-icons">people</i><span>32</span>-->
                <!--</div>-->
                <!--</div>-->
                <!--</a>-->
                <!--</div>-->
                <!--</div>-->
                <!--<div class="item">-->
                <!--<div class="icarder">-->
                <!--<a href="javascript:;">-->
                <!--<div class="video-preview"><img src="../assets/images/cover/java.jpg" alt=""></div>-->
                <!--<p class="title">基于bootstrap的网页开发-响应式布局</p>-->
                <!--<div class="details">-->
                <!--<a href="#" class="name">LaraWei</a>-->
                <!--<div class="hot" title="人气值：32">-->
                <!--<i class="material-icons">people</i><span>32</span>-->
                <!--</div>-->
                <!--</div>-->
                <!--</a>-->
                <!--</div>-->
                <!--</div>-->
                <!--<div class="item">-->
                <!--<div class="icarder">-->
                <!--<a href="javascript:;">-->
                <!--<div class="video-preview"><img src="../assets/images/cover/java.jpg" alt=""></div>-->
                <!--<p class="title">基于bootstrap的网页开发-响应式布局</p>-->
                <!--<div class="details">-->
                <!--<a href="#" class="name">LaraWei</a>-->
                <!--<div class="hot" title="人气值：32">-->
                <!--<i class="material-icons">people</i><span>32</span>-->
                <!--</div>-->
                <!--</div>-->
                <!--</a>-->
                <!--</div>-->
                <!--</div>-->
                <!--<div class="item">-->
                <!--<div class="icarder">-->
                <!--<a href="javascript:;">-->
                <!--<div class="video-preview"><img src="../assets/images/cover/java.jpg" alt=""></div>-->
                <!--<p class="title">基于bootstrap的网页开发-响应式布局</p>-->
                <!--<div class="details">-->
                <!--<a href="#" class="name">LaraWei</a>-->
                <!--<div class="hot" title="人气值：32">-->
                <!--<i class="material-icons">people</i><span>32</span>-->
                <!--</div>-->
                <!--</div>-->
                <!--</a>-->
                <!--</div>-->
                <!--</div>-->
                <!--</div>-->

                <div style="text-align: center; margin: 20px 0;"><Page :total="paginate.total" :current="paginate.current_page" :page-size="paginate.per_page" size="small" @on-change="updateList"></Page></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                value1: 0,
                roomList: [],
                paginate: {}
            }
        },
        mounted() {
            this.$http.post('/api/liveroom/all').then(res => {
                this.roomList = res.data.data.data
                this.paginate = res.data.data
            })
        },
        methods: {
            updateList(page) {
                this.$http.post('/api/liveroom/all?page=' + page).then(res => {
                    this.roomList = res.data.data.data
                    this.paginate = res.data.data
                })
            }
        }
    }
</script>

<style>
    .demo-carousel {
        width: 1358px;
        height: 348px;
        margin: 0 auto;
        background-image: url("http://wx1.sinaimg.cn/large/006AlDhgly1flarw20gnsj30se0bmq6g.jpg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
</style>