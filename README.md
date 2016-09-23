# vue-radial-progress [![npm package](https://img.shields.io/npm/v/vue-radial-progress.svg)](https://www.npmjs.com/package/vue-radial-progress)

> A radial progress bar component for Vue.js.

# Requirements

- [Vue.js](https://github.com/vuejs/vue) `^1.0.0`
- Module bundler: [webpack](https://github.com/webpack/webpack)

# Installation

``` bash
$ npm install vue-progress-bar
```
# Demo
[Demo](https://www.wyzant.com)

# Usage
``` html
<template>
  <radial-progress-bar :completed-steps="completedSteps"
                       :total-steps="totalSteps"></radial-progress-bar>
</template>

<script>
import RadialProgressBar from 'vue-radial-progress';

export default {
  data() {
    return {
      completedSteps: 0,
      totalSteps: 10
    }
  },

  components: {
    RadialProgressBar
  }
}
</script>
```

# Props

`diameter`

Diameter of the progress bar circle in pixels. Default: `200`

`totalSteps`

Total number of steps.

`completedSteps`

Number of steps in the progress that have been completed.

`startColor`

Start color of the progress bar gradient. Default: `#bbff42`

`stopColor`

Stop color of the progress bar gradient. Default: `#429321`

# Lint

  > npm run lint

# Dev

  > npm run dev
  
# License

[The MIT License](http://opensource.org/licenses/MIT)
