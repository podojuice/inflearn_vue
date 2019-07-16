<template>
  <div>
    <h1>ask</h1>
    <div v-for="item in fetchedAsk">{{item.title}}</div>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'


export default {
  created() {
    this.$store.dispatch('FETCH_ASK')
  },
  computed: {
    // 여러가지 방법.
    ...mapGetters([
      'fetchedAsk'
    ]),

    // ...mapGetters({
    //   fetchedAsk: 'fetchedAsk'
    //   }),

    // 1. 밑에처럼하고 ask에 다 담음.
    // ...mapState({
    //   ask: state => state.ask
    // })

    // 2.
    // ask() {
    //   return this.$store.state.ask;
    // }
  }
};
</script>

<style>
</style>
