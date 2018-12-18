<template>
  <div id="app">
    <h1>Vue.js Radial Progress Bar</h1>
    <p class="spc-b">Customizable radial progress bar component with gradients and animations!</p>
    <div class="spc-b">
      <a class="github-button"
        href="https://github.com/wyzant-dev/vue-radial-progress"
        data-style="mega"
        data-count-href="/wyzant-dev/vue-radial-progress/stargazers"
        data-count-api="/repos/wyzant-dev/vue-radial-progress#stargazers_count"
        data-count-aria-label="# stargazers on GitHub"
        aria-label="Star wyzant-dev/vue-radial-progress on GitHub">View on Github</a>
    </div>
    <div id="component">
      <div class="radial-progress-display">
        <radial-progress-bar :diameter="diameter"
                            :total-steps="totalSteps"
                            :completed-steps="completedSteps"
                            :animate-speed="animateSpeed"
                            :stroke-width="strokeWidth"
                            :start-color="startColor"
                            :stop-color="stopColor"
                            :inner-stroke-color="innerStrokeColor"
                            :timing-func="timingFunc">
          <p>Total steps: {{ totalSteps }}</p>
          <p>Completed steps: {{ completedSteps }}</p>
        </radial-progress-bar>
        <div class="controls">
          <button :disabled="completedSteps <= 0"
                  @click.prevent="prevStep">Prev</button>
          <button :disabled="completedSteps >= totalSteps"
                  @click.prevent="nextStep">Next</button>
        </div>
      </div>
      <table class="radial-progress-controls text-right">
        <tr>
          <td>
            <label for="total-steps">Total steps</label>
          </td>
          <td>
            <input id="total-steps" type="number" placeholder="Total steps" :value="totalSteps" @input="totalStepsChanged">
          </td>
        </tr>
        <tr>
          <td>
            <label for="animate-speed">Animate speed</label>
          </td>
          <td>
            <input id="animate-speed" type="number" placeholder="Animate speed" :value="animateSpeed" @input="animateSpeedChanged">
          </td>
        </tr>
        <tr>
          <td>
            <label for="diameter">Diameter</label>
          </td>
          <td>
            <input id="diameter" type="number" placeholder="Diameter" :value="diameter" @input="diameterChanged">
          </td>
        </tr>
        <tr>
          <td>
            <label for="stroke-width">Stoke width</label>
          </td>
          <td>
            <input id="stroke-width" type="number" placeholder="Stroke width" :value="strokeWidth" @input="strokeWidthChanged">
          </td>
        </tr>
        <tr>
          <td>
            <label for="timing-function">Timing function</label>
          </td>
          <td>
            <input id="timing-function" type="text" placeholder="Timing function" :value="timingFunc" @input="timingFuncChanged">
          </td>
        </tr>
        <tr>
          <td>
            <label for="start-color">Start color</label>
          </td>
          <td>
            <input id="start-color" type="color" placeholder="Start color" :value="startColor" @input="startColorChanged">
          </td>
        </tr>
        <tr>
          <td>
            <label for="stop-color">Stop color</label>
          </td>
          <td>
            <input id="stop-color" type="color" placeholder="Stop color" :value="stopColor" @input="stopColorChanged">
          </td>
        </tr>
        <tr>
          <td>
            <label for="inner-stroke-color">Inner stroke color</label>
          </td>
          <td>
            <input id="inner-stroke-color" type="color" placeholder="Inner stroke color" :value="innerStrokeColor" @input="innerStrokeColorChanged">
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import RadialProgressBar from './RadialProgressBar.vue'

export default {
  name: 'app',
  components: {
    RadialProgressBar
  },
  data () {
    return {
      completedSteps: 1,
      totalSteps: 6,
      animateSpeed: 1000,
      diameter: 300,
      strokeWidth: 10,
      startColor: '#bbff42',
      stopColor: '#429321',
      innerStrokeColor: '#323232',
      timingFunc: 'linear'
    }
  },
  mounted() {
    let githubButtons = document.createElement('script')
    githubButtons.setAttribute('src', 'https://buttons.github.io/buttons.js')
    document.head.appendChild(githubButtons)
  },
  methods: {
    timingFuncChanged(e) {
      this.timingFunc = e.target.value
    },

    innerStrokeColorChanged (e) {
      this.innerStrokeColor = e.target.value
    },

    stopColorChanged (e) {
      this.stopColor = e.target.value
    },

    startColorChanged (e) {
      this.startColor = e.target.value
    },

    strokeWidthChanged (e) {
      e.preventDefault()
      const val = e.target.value

      if (!val || isNaN(val)) {
        return false
      }

      this.strokeWidth = parseInt(val)
    },

    diameterChanged (e) {
      e.preventDefault()
      const val = e.target.value

      if (!val || isNaN(val)) {
        return false
      }

      this.diameter = parseInt(val)
    },

    animateSpeedChanged (e) {
      e.preventDefault()
      const val = e.target.value

      if (!val || isNaN(val)) {
        return false
      }

      this.animateSpeed = parseInt(val)
    },

    totalStepsChanged (e) {
      e.preventDefault()
      const val = e.target.value

      if (!val || isNaN(val)) {
        return false
      }

      this.totalSteps = parseInt(val)
    },
    nextStep () {
      this.completedSteps += 1
    },
    prevStep () {
      this.completedSteps -= 1
    }
  }
}
</script>

<style>
html, body {
  background: #4e4f4f;
  text-align: center;
  color: #FFF;
  font-family: 'Open Sans', Helvetica, Verdana, sans-serif;
  font-size: 16px;
}
#component {
  display: flex;
  align-items: center;
}
.radial-progress-display {
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.controls {
  margin-top: 10px;
  text-align: center;
}
.controls button {
  border-radius: 5px;
  color: #fff;
  padding: 13px 20px;
  background: #ff9f37;
  border: 0;
  outline: 0;
  line-height: 1.3em;
  text-transform: uppercase;
  cursor: pointer;
  box-sizing: border-box;
  margin-left: 5px;
  margin-right: 5px;
}
.controls button:hover {
  background: #ff9f37;
}
p {
  margin: 5px 0;
}
.visible-collapse {
  visibility: collapse;
}
input {
  margin: 0;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
input, button {
  font: inherit;
  margin-bottom: 10px;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
label {
  margin-right: 15px;
}
.spc-b {
  margin-bottom: 30px;
}
</style>
