require('./bootstrap');

/**
 * import vue
 */
import Vue from 'vue'

/**
 * import components
 */
import HomeComponent from './components/HomeComponent.vue'

const app = new Vue({
    el: "#app",
    components: {
        HomeComponent
    }
});