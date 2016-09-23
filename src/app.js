import RadialProgressBar from './RadialProgressBar.vue';

Vue.config.debug = true;

new Vue({
  el: '#app',
  components: {
    RadialProgressBar
  },
  data() {
    return {
      totalSteps: 5,
      completedSteps: 0,
    };
  },
  methods: {
    nextStep() {
      this.completedSteps += 1;
    },
    prevStep() {
      this.completedSteps -= 1;
    }
  }
});
