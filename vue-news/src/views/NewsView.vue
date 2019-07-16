<template>
    <div>
        <h1>news</h1>
        <div v-for="user in this.$store.state.news">
            {{user.title}}
        </div>
    </div>
</template>

<script>


export default {
    created() {
        this.$store.dispatch('FETCH_NEWS')
    },
}
</script>

<style>

</style>
