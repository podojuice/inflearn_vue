<template>
  <div id="app">
    <!-- url이 만약 news다 하면 newsview를 보여주겠지 -->
    <tool-bar></tool-bar>
    <router-view></router-view>
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

</style>
