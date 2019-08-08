// high order component

import ListView from './ListView.vue'
// import bus from '../utils/bus.js'

export default function createListView(name) {
    return {
        // 재사용할 인스턴스 옵션들
        name: name,
        // created() {
        //     bus.$emit('start:spinner');
        //     this.$store.dispatch('FETCH_LIST', this.$route.name)
        //         .then(res => {
        //             bus.$emit('end:spinner');
        //         })
        //         .catch(err => console.log(err))
        // },
        render(createElement) {
            return createElement(ListView);
        }
    }
}