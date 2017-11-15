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
        name: 'app',
        mounted() {
            if (typeof (localStorage.name) == 'undefined') {
                this.$store.commit('authLogout');
            } else {
                this.$store.commit('authLogin');
            }
        },
    }
</script>

<style>
  @import "./assets/css/bootstrap.min.css";
  @import "./assets/css/material-icons.css";
  @import "./assets/css/style.css";
  @import "./assets/css/base.css";

  .fade-leave-active{
    animation-duration: 0s;
  }
  .fade-enter-active {
    animation-duration: 0.5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0
  }
  #app{
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>