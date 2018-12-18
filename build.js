import RadialProgressBar from './src/RadialProgressBar.vue'

function install(Vue) {
  Vue.component('radial-progress-bar', RadialProgressBar)
  window.RadialProgressBar = RadialProgressBar
}

export {
  RadialProgressBar
}

// Plugin
const plugin = {
  install
};

export default plugin;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
