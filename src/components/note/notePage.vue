<template>
    <div class="main">
        <button type="button" class="btn home-add"><i class="material-icons" style="transform: rotateY(180deg);">reply</i></button>
        <div class="container">
            <div class="block-header">
                <ol class="breadcrumb mg0">
                    <li><a href="index.html">首页</a></li>
                    <li><a href="note.html">笔记</a></li>
                    <li class="active">{{ article.title }}</li>
                </ol>
            </div><!--block-header end-->

            <div class="card dview_card m-t-25">
                <div class="dview_card_header" style="background-image: url../../assets/images/banner/datahead-bg2.jpg);">
                    <div class="dw-hold">
                        <div class="dview_head"><img src="../../assets/images/avatar/avatar-5.png" alt=""></div>
                        <div class="dview_info">
                            <div class="title">{{ article.title }}</div>
                            <ul class="dview_classify">
                                <li>{{ article.created_at }}</li>
                                <li>分类：{{ article.type }}</li>
                                <li>浏览：{{ article.view_count }}</li>
                            </ul>
                        </div><!--dview_info end-->
                    </div><!--dw-hold end-->
                </div><!--dview_card_header end-->
            </div><!--card end-->

            <div class="card dview_card">
                <div class="dview_card_body" v-html="article.content"></div>
            </div><!--card end-->

            <div class="card dview_card">
                <div class="wall-comment-list">
                    <!-- Comment Listing -->
                    <div class="wcl-list">
                        <div class="media">
                            <a href="#" class="pull-left">
                                <img src="../../assets/images/avatar/avatar-5.png" alt="" class="lv-img-sm">
                            </a>
                            <div class="media-body">
                                <a href="#" class="a-title">David</a> <small class="c-gray m-l-10">2017.11.6 11:20</small>
                                <p class="m-t-5 m-b-0">你可以看下我分享的笔记,稍微调整了你的代码,你想要的效果就出来了,笔记名为  盒子模型随笔</p>
                            </div><!--media-body end-->
                        </div><!--media end-->
                        <div class="media">
                            <a href="#" class="pull-left">
                                <img src="../../assets/images/avatar/avatar-5.png" alt="" class="lv-img-sm">
                            </a>
                            <div class="media-body">
                                <a href="#" class="a-title">zzmkly</a><span>回复</span><a href="#" class="a-title">David</a> <small class="c-gray m-l-10">2017.10.20 08:20</small>
                                <p class="m-t-5 m-b-0">字体的原因</p>
                            </div><!--media-body end-->
                        </div><!--media end-->
                    </div><!--wcl-list end-->
                    <!-- Comment form -->
                    <!--<div class="wcl-form">-->
                        <!--<div class="wc-comment">-->
                            <!--<div class="wcc-inner wcc-toggle false_comment">评论...</div>-->
                            <!--<div class="form-group label-floating true_comment">-->
                                <!--<div class="input-group">-->
                                    <!--<label class="control-label" for="true_comment">我的评论</label>-->
                                    <!--<textarea class="form-control" rows="2" id="true_comment"></textarea>-->
                                    <!--<span class="input-group-btn">-->
                      <!--<button type="button" class="btn">-->
                        <!--<i class="material-icons">send</i>-->
                      <!--</button>-->
                    <!--</span>-->
                                <!--</div>&lt;!&ndash;input-group end&ndash;&gt;-->
                            <!--</div>&lt;!&ndash;form-group end&ndash;&gt;-->
                        <!--</div>&lt;!&ndash;wc-comment end&ndash;&gt;-->
                    <!--</div>&lt;!&ndash;wcl-form end&ndash;&gt;-->
                </div><!--wall-comment-list end-->
            </div><!--card end-->
        </div>
    </div><!--main end-->
</template>

<script>
    export default {
        data() {
            return {
                article: {}
            }
        },
        mounted() {
            this.$http.post('/api/article/info/' + this.$route.params.id).then(res => {
                this.article = res.data.data
            })
        },
    }
</script>