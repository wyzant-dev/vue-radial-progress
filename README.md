# vue-radial-progress [![npm package](https://img.shields.io/npm/v/vue-radial-progress.svg)](https://www.npmjs.com/package/vue-radial-progress)

> A radial progress bar component for Vue.js.

[Live Demo](https://wyzant-dev.github.io/vue-radial-progress/)

# Requirements

- [Vue.js](https://github.com/vuejs/vue) `^1.0.0` (Compatible with Vue 1.0 or 2.0)
- Module bundler: [webpack](https://github.com/webpack/webpack)

# Installation

``` bash
$ npm install vue-radial-progress
```

# Usage
``` html
<template>
  <radial-progress-bar :diameter="200"
                       :completed-steps="completedSteps"
                       :total-steps="totalSteps">
   <p>Total steps: {{ totalSteps }}</p>
   <p>Completed steps: {{ completedSteps }}</p>
  </radial-progress-bar>
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

`innerStrokeColor`

Color of the background of the progress bar. Default: `#323232`

`strokeWidth`

The width of the progress bar. Default: `10`

`animateSpeed`

The amount of time in milliseconds to animate one step. Default: `1000`

# Lint

  > npm run lint

# Dev

  > npm run dev

# License

[The MIT License](http://opensource.org/licenses/MIT)
