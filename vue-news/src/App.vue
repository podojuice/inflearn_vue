<template>
  <div id="app">
    <!-- url이 만약 news다 하면 newsview를 보여주겠지 -->
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    
  </div>
</template>

<script>
import ToolBar from './components/ToolBar'

export default {
  components: {
    ToolBar,
  },
  

}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

/* router Transition */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
