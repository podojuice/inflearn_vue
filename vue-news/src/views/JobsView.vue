<template>
  <div>
    <h1>Jobs</h1>
    <list-item></list-item>
    <ul class="news-list">
      <li v-for="job in this.$store.state.jobs" class="post">
        <!-- 포인트 영역  -->
        <div class="points">{{job.points || 0}}</div>

        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <a v-bind:href="job.url">{{job.title}}</a>
          </p>
          <small class="link-text">
            {{job.time_ago}}
            by
            <a :href="job.url">{{job.domain}}</a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
export default {
  components: {
    ListItem,
  }
};
</script>


