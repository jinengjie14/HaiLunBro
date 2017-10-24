<template>
  <div id="app">
    <Header/>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <Footer/>
  </div>
</template>

<script>
import './assets/js/jquery-1.11.3.min.js'
import './assets/js/bootstrap.min.js'
import './assets/js/main.js'

export default {
  name: 'app'
}
</script>

<style>
@import "./assets/css/bootstrap.min.css";
@import "./assets/css/material-icons.css";
@import "./assets/css/style.css";
@import "./assets/css/base.css";

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
</style>