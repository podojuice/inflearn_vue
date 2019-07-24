<template>
  <div>
    <h1>ask</h1>
    <list-item></list-item>
  </div>
</template>

<script>
// import {mapState, mapGetters} from 'vuex'
import ListItem from '../components/ListItem.vue'

export default {
  components: {
    ListItem,
  }
  // created() {
  //   // 이 페이지가 로드될때, store에 있는 fetch_ask라는 action 실행하는 코드.
  //   this.$store.dispatch('FETCH_ASK')
  // },
  // computed: {
  //   // 여러가지 방법.
  //   ...mapGetters([
  //     'fetchedAsk'
  //   ]),

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
  // }
};
</script>

<style scoped>

.news-list {
  margin:0;
  padding:0;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}



.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883
}

.news-title{
  margin:0;
}

.link-text{
  color: #828282;
}

</style>
