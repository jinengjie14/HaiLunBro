<template>
    <div class="main">
        <div class="profile-header">
            <div class="profile-info">
                <div class="container">
                    <div class="profile-info-offset">
                        <h2>赵少锋</h2>
                        <div>
                            <p>bem.zhao@gmail.com</p>
                            <p>这位同学很懒，啥都没写</p>
                            <a href="#"><em>2</em><span>粉丝</span></a>
                            <a href="#"><em>5</em><span>关注</span></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="profile-banner"><!-- <img src="../static/images/banner/banner1.jpg" alt=""> --></div>
        </div>

        <div class="container" style="margin-top: -125px;">
            <div class="pinwrapper">
                <div class="leftmenu">
                    <div class="user-img"><img src="../../assets/images/avatar/avatar-5.png" alt=""></div>
                    <ul class="list-group">
                        <li class="list-group-item active">
                            <a href="#"><i class="material-icons">ondemand_video</i>我的直播间</a>
                        </li>
                        <li class="list-group-item">
                            <a href="#"><i class="material-icons">settings</i>设置直播间</a>
                        </li>
                        <li class="list-group-item">
                            <a href="#"><i class="material-icons">videocam</i>录像管理</a>
                        </li>
                        <li class="list-group-item">
                            <a href="#"><i class="material-icons">border_color</i>我的笔记</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="cards shadow_z1 leftmenu-offset">
                <form class="form-horizontal setroom">
                    <div class="form-group">
                        <label class="col-sm-2 control-label">房间ID</label>
                        <div class="col-sm-10">
                            <p class="form-control-static">5166516</p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="roomtitle" class="col-sm-2 control-label">房间标题</label>
                        <div class="col-sm-10">
                            <p class="form-control-static pull-left">5166516</p>
                            <a class="btn btn-default">修改</a>
                        </div>
                        <div class="col-sm-10" style="display: none;" data-edit-input>
                            <div class="row">
                                <div class="col-md-10"><input type="text" class="form-control" id="roomtitle" placeholder="Password"></div>
                                <div class="col-md-2"><a href="#" class="btn btn-success">修改</a></div>
                            </div>
                        </div>
                    </div>
                </form>
                <div style="height: 1000px;"></div>
            </div>
        </div>
    </div><!--main end-->
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
        }
    }
</script>