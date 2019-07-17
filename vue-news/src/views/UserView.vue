<template>
    <div>
        <p>ID: {{userInfo.id}}</p>
        <p>KARMA: {{userInfo.karma}}</p>
        <p>CREATED: {{userInfo.created}}</p>
    </div>
</template>

<script>

export default {
    computed: {
      userInfo() {
          return this.$store.state.user;
      }  
    },
    created() {
        const userName = this.$route.params.id;
        this.$store.dispatch('FETCH_USER', userName);

    },
    
}
</script>

<style>

</style>
