# vue-radial-progress [![npm package](https://img.shields.io/npm/v/vue-radial-progress.svg)](https://www.npmjs.com/package/vue-radial-progress)

> A radial progress bar component for Vue.js. Uses SVG and javascript to animate a radial progress bar with a gradient.

[Live Demo](https://wyzantinc.github.io/vue-radial-progress/)

# Requirements

- [Vue.js](https://github.com/vuejs/vue) `^2.0.0` (Compatible with Vue 1.0 or 2.0)
- A module bundler such as [webpack](https://github.com/webpack/webpack) or use the minified version on its own.

# Installation

``` bash
$ npm install --save vue-radial-progress
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
import RadialProgressBar from 'vue-radial-progress'

export default {
  data () {
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

Name | Default value | Description
---|:---:|---
`diameter` | `200` | Diameter of the progress bar circle in pixels.
`totalSteps` | `10` | Total number of steps to complete progress bar.
`completedSteps` | `0` | Number of completed steps in the progress bar.
`startColor` | `#bbff42` | The color of the leading edge of the progress bar gradient.
`stopColor` | `#429321` | The secondary color of the progress bar gradient.
`innerStrokeColor` | `#323232` | Background color of the progress bar.
`strokeWidth` | `10` | The width of the progress bar.
`innerStrokeWidth` | `10` | The width of the background/inner circle.
`strokeLinecap` | `round` | The type of stroke linecap for circle.
`animateSpeed` | `1000` | The amount of time in milliseconds to animate one step.
`fps` | `60` | The frames per second that the animation should run.
`timingFunc` | `linear` | The transition timing function to use for the CSS transition. See [transition-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function).
`isClockwise` | `true` | Controls the direction of the progress bar.

# Lint

  > npm run lint

# Dev

  > npm run dev

# License

[The MIT License](LICENSE)
