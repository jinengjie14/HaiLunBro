<template>
    <div class="main">
        <div class="live-main">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="row live-tab">
                            <!-- Nav tabs -->
                            <div class="col-md-10">
                                <div class="tab-content video-main">
                                    <Live></Live>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <ul class="nav nav-tabs" role="tablist">
                                    <li role="presentation" class="active">
                                        <a href="#lvtab1" data-toggle="tab">Java课程</a>
                                    </li>
                                    <li role="presentation">
                                        <a href="#lvtab2" data-toggle="tab">Android课程</a>
                                    </li>
                                    <li role="presentation">
                                        <a href="#lvtab3" data-toggle="tab">Php课程</a>
                                    </li>
                                    <li role="presentation">
                                        <a href="#lvtab4" data-toggle="tab">Html+Css课程</a>
                                    </li>
                                    <li role="presentation">
                                        <a href="#lvtab5" data-toggle="tab">PhotoShop课程</a>
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
                <div class="col-md-7 delayedLive">
                    <h3 class="sectitle" style="margin-left: 16px;">录播</h3>
                    <div class="video-list">
                        <div class="item-box"></div>
                        <div class="item-box"></div>
                        <div class="item-box"></div>
                        <div class="item-box"></div>
                        <div class="item-box"></div>
                        <div class="item-box"></div>
                    </div>
                </div><!--delayedLive end-->
                <div class="col-md-5 note">
                    <h3 class="sectitle">笔记</h3>
                    <div class="media"><!--循环-->
                        <div class="media-left">
                            <a href="#">
                                <img class="media-object" src="../assets/images/avatar/avatar-1.png" alt="...">
                            </a>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading"><a href="#">移动端网页布局中需要注意事项以及解决方法总结</a></h4>
                            <p>移动端网页布局中需要注意事项以及解决方法总结，这份对我们在布局移动端网页的时候非常有用！winphone系统a、input标签被点击时产生的半透明灰色背景怎么去掉</p>
                            <span class="user"><a href="#">赵少锋</a></span>
                            <div class="details"><i class="material-icons">thumb_up</i><span>20</span></div>
                        </div>
                    </div>
                    <div class="media">
                        <div class="media-left">
                            <a href="#">
                                <img class="media-object" src="../assets/images/avatar/avatar-2.png" alt="...">
                            </a>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading"><a href="#">移动端网页布局中需要注意事项以及解决方法总结</a></h4>
                            <p>移动端网页布局中需要注意事项以及解决方法总结，这份对我们在布局移动端网页的时候非常有用！winphone系统a、input标签被点击时产生的半透明灰色背景怎么去掉</p>
                            <span class="user"><a href="#">赵少锋</a></span>
                            <div class="details"><i class="material-icons">thumb_up</i><span>20</span></div>
                        </div>
                    </div>
                    <div class="media">
                        <div class="media-left">
                            <a href="#">
                                <img class="media-object" src="../assets/images/avatar/avatar-3.png" alt="...">
                            </a>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading"><a href="#">移动端网页布局中需要注意事项以及解决方法总结</a></h4>
                            <p>移动端网页布局中需要注意事项以及解决方法总结，这份对我们在布局移动端网页的时候非常有用！winphone系统a、input标签被点击时产生的半透明灰色背景怎么去掉</p>
                            <span class="user"><a href="#">赵少锋</a></span>
                            <div class="details"><i class="material-icons">thumb_up</i><span>20</span></div>
                        </div>
                    </div>
                    <div class="media">
                        <div class="media-left">
                            <a href="#">
                                <img class="media-object" src="../assets/images/avatar/avatar-4.png" alt="...">
                            </a>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading"><a href="#">移动端网页布局中需要注意事项以及解决方法总结</a></h4>
                            <p>移动端网页布局中需要注意事项以及解决方法总结，这份对我们在布局移动端网页的时候非常有用！winphone系统a、input标签被点击时产生的半透明灰色背景怎么去掉</p>
                            <span class="user"><a href="#">赵少锋</a></span>
                            <div class="details"><i class="material-icons">thumb_up</i><span>20</span></div>
                        </div>
                    </div>
                </div><!--note end-->
            </div>
        </div>
    </div><!--main end-->
</template>

<script>

    export default {
        name: 'Index',
        mounted() {
        }
    }
</script>

<style>
</style>