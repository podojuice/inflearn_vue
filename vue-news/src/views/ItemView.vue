<template>
  <div>
    <section>
      <!-- 사용자 정보 -->
      <user-profile>
        <router-link slot="username" :to="`/user/${fetchedItem.user}`">{{fetchedItem.user}}</router-link>
        <template slot="time">{{ 'Posted ' + fetchedItem.time_ago}}</template>
      </user-profile>
    </section>
    <h2>{{fetchedItem.title}}</h2>
    <section>
      <!-- 답변들  -->
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";
import { mapGetters } from "vuex";
import ListMixin from '../mixins/ListMixin'

export default {
  components: {
    UserProfile
  },
  computed: {
    ...mapGetters(["fetchedItem"])
  },
  created() {
    const askId = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", askId);

    const userName = this.$route.params.user;
    this.$store.dispatch("FETCH_USER", userName);
  },
  mixins: [ListMixin],
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}

.fa-user {
  font-size: 2.5rem;
}

.user-description {
  padding-left: 8px;
}

.time {
  font-size: 0.7rem;
}
</style>
