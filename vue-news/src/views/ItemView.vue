<template>
    <div>
        <p>user: {{ itemInfo.user }}</p>
        <p>time_ago: {{ itemInfo.time_ago }}</p>
        <p>title: {{ itemInfo.title }}</p>
        <p>content: {{ itemInfo.content }}</p>
    </div>
</template>

<script>
export default {
    computed: {
        itemInfo() {
            return this.$store.state.item;
        }
    },
    created() {
        const askId = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEM', askId);
    }

}
</script>

<style>

</style>
