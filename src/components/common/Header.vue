<template>
  <div>
    <div v-bind:class="headerClassName">
      <div class="container">
        <div class="layout_header-row">
          <div class="drawer_button visible-xs"><i class="material-icons">menu</i></div>
          <div class="logo hidden-xs"><a href="#">课乎</a></div>
          <ul class="nav navbar-nav hidden-xs">
            <li v-bind:class="{ active: isIndexActive }"><router-link :to="{ name: 'index' }">首页</router-link></li>
            <li v-bind:class="{ active: isLiveActive }"><router-link :to="{ name: 'allLive' }">直播</router-link></li>
            <li v-bind:class="{ active: isNoteActive }"><router-link :to="{ name: 'noteList' }">笔记</router-link></li>
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
            <Login></Login>
          </ul>
        </div>
      </div>
    </div>
    <div class="layout_drawer visible-xs">
      <div class="head visible-xs">
        <span>课乎</span>
      </div>
      <ul class="drawer-menu" name="drawer-menu">
        <li v-bind:class="{ active: isIndexActive }"><router-link :to="{ name: 'index' }">首页</router-link></li>
        <li v-bind:class="{ active: isLiveActive }"><router-link :to="{ name: 'allLive' }">直播</router-link></li>
        <li v-bind:class="{ active: isNoteActive }"><router-link :to="{ name: 'noteList' }">笔记</router-link></li>
      </ul>
    </div>
    <div class="layout_obfuscator"></div>
  </div>
</template>

<script>

    export default {
        data() {
            return {

            }
        },
        mounted: function() {
            console.log(this.$route.name);
        },
        computed: {
            headerClassName: function () {
                return this.$route.name == 'index' ? 'header' : 'header green'
            },
            isIndexActive: function () {
                if (this.$route.name == 'index') {
                    return true
                }
                return false
            },
            isLiveActive: function () {
                if (this.$route.name == 'allLive' || this.$route.name == 'liveRoom') {
                    return true
                }
                return false

            },
            isNoteActive: function () {
                if (this.$route.name == 'noteList' || this.$route.name == 'notePage') {
                    return true
                }
                return false
            },
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