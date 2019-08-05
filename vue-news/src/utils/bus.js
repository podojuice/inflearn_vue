import Vue from 'vue';



// bus.js
// export const bus = new Vue(); 일케 하면
// App.vue에서
// import {bus } from './bus.js'; 일케 받을 수 있음



export default new Vue();
// 일게 하면, 아무렇게나, 아래 처럼 받을 수 있음.
// import bus from './bus.js'