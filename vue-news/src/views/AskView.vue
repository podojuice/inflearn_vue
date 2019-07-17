<template>
  <div>
    <h1>ask</h1>
    <p v-for="item in fetchedAsk">
      <router-link v-bind:to="`/item/${item.id}`">{{item.title}}</router-link>

      <small>{{item.domain}}  {{item.time_ago}}</small>
    </p>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'


export default {
  created() {
    // 이 페이지가 로드될때, store에 있는 fetch_ask라는 action 실행하는 코드.
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
