<template>
  <div id="app">
    <!-- url이 만약 news다 하면 newsview를 보여주겠지 -->
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading="true"></spinner>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar'
import Spinner from './components/Spinner.vue'

export default {
  components: {
    ToolBar,
    Spinner,
  },
  

}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: #34495e;
}

a.router-link-exact-active {
  text-decoration: underline;
}

a:hover {
  color: #42b883;
  text-decoration: underline;
}

/* router Transition */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
