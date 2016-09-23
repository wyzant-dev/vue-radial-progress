<template>
  <div class="radial-progress-container" :style="containerStyle">
    <div class="radial-progress-inner" :style="innerCircleStyle">
      <slot></slot>
    </div>
    <svg class="radial-progress-bar"
         :width="diameter"
         :height="diameter"
         version="1.1"
         xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="radial-gradient"
                        :fx="gradient.fx"
                        :fy="gradient.fy"
                        :cx="gradient.cx"
                        :cy="gradient.cy"
                        :r="gradient.r">
          <stop offset="30%" :stop-color="startColor"/>
          <stop offset="100%" :stop-color="stopColor"/>
        </radialGradient>
      </defs>
      <circle :r="innerCircleRadius"
              :cx="radius"
              :cy="radius"
              fill="transparent"
              :stroke="innerStrokeColor"
              :stroke-dasharray="circumference"
              stroke-dashoffset="0"
              stroke-linecap="round"
              :style="strokeStyle"></circle>
      <circle transform="rotate(270, {{ radius }}, {{ radius }})"
              :r="innerCircleRadius"
              :cx="radius"
              :cy="radius"
              fill="transparent"
              stroke="url(#radial-gradient)"
              :stroke-dasharray="circumference"
              :stroke-dashoffset="circumference"
              stroke-linecap="round"
              :style="progressStyle"></circle>
    </svg>
  </div>
</template>

<script>

export default {
  props: {
    diameter: {
      type: Number,
      required: false,
      default: 200,
    },
    totalSteps: {
      type: Number,
      required: true,
      default: 10,
    },
    completedSteps: {
      type: Number,
      required: true,
      default: 0,
    },
    startColor: {
      type: String,
      required: false,
      default: '#bbff42',
    },
    stopColor: {
      type: String,
      required: false,
      default: '#429321',
    },
    strokeWidth: {
      type: Number,
      required: false,
      default: 10,
    },
    animateSpeed: {
      type: Number,
      required: false,
      default: 1000,
    },
    innerStrokeColor: {
      type: String,
      required: false,
      default: '#323232',
    }
  },

  data() {
    return {
      gradient: {
        fx: 0.99,
        fy: 0.5,
        cx: 0.5,
        cy: 0.5,
        r: 0.65,
      },
      gradientAnimation: null,
      currentAngle: 0,
      strokeDashoffset: 0,
    };
  },

  computed: {
    radius() {
      return this.diameter / 2;
    },

    circumference() {
      return Math.PI * this.innerCircleDiameter;
    },

    stepSize() {
      return 100 / this.totalSteps;
    },

    finishedPercentage() {
      return this.stepSize * this.completedSteps;
    },

    circleSlice() {
      return 2 * Math.PI / this.totalSteps;
    },

    innerCircleDiameter() {
      return this.diameter - (this.strokeWidth * 2);
    },

    innerCircleRadius() {
      return this.innerCircleDiameter / 2;
    },

    animationIncrements() {
      return this.animateSpeed / 20;
    },

    containerStyle() {
      return {
        height: `${this.diameter}px`,
        width: `${this.diameter}px`,
      };
    },

    progressStyle() {
      return {
        height: `${this.diameter}px`,
        width: `${this.diameter}px`,
        strokeWidth: `${this.strokeWidth}px`,
        strokeDashoffset: this.strokeDashoffset,
        transition: `stroke-dashoffset ${this.animateSpeed}ms linear`,
      };
    },

    strokeStyle() {
      return {
        height: `${this.diameter}px`,
        width: `${this.diameter}px`,
        strokeWidth: `${this.strokeWidth}px`,
      };
    },

    innerCircleStyle() {
      return {
        width: `${this.innerCircleDiameter}px`,
      };
    }
  },

  methods: {
    changeProgress(animateGradient = false) {
      let finishedPercentage = this.finishedPercentage;

      if (isNaN(finishedPercentage)) {
        finishedPercentage = 100;
      }

      if (finishedPercentage < 0) {
        finishedPercentage = 0;
      }

      if (finishedPercentage > 100) {
        finishedPercentage = 100;
      }

      const pct = ((100 - finishedPercentage) / 100) * this.circumference;

      this.animateGradient(animateGradient);

      this.strokeDashoffset = pct;
    },

    getStopPointsOfCircle(steps) {
      const points = [];

      for (let i = 0; i < steps; i++) {
        const angle = this.circleSlice * i;
        points.push(this.getPointOfCircle(angle));
      }

      return points;
    },

    getPointOfCircle(angle) {
      const radius = 0.5;

      const x = radius + (radius * Math.cos(angle));
      const y = radius + (radius * Math.sin(angle));

      return { x, y };
    },

    animateGradient(isAnimate = true) {
      if (this.completedSteps === 0 || !isAnimate) {
        this.currentAngle = this.completedSteps * this.circleSlice;

        const point = this.getPointOfCircle(this.currentAngle);

        this.gradient.fx = point.x;
        this.gradient.fy = point.y;
        return;
      }

      const totalPoints = 20;

      let slice = this.circleSlice / totalPoints;

      let angleOffset = (this.completedSteps - 1) * this.circleSlice;

      // If there is an animation currently running,
      // we want to recalculate the start and end
      // points of the animation.
      if (this.gradientAnimation) {
        clearInterval(this.gradientAnimation);
        const endAngle = angleOffset + this.circleSlice;

        const totalSize = endAngle - this.currentAngle;

        slice = totalSize / totalPoints;
        angleOffset = this.currentAngle;
      }

      let i = 0;

      this.gradientAnimation = setInterval(() => {
        if (i >= totalPoints) {
          clearInterval(this.gradientAnimation);
          return;
        }

        this.currentAngle = angleOffset + (slice * i);

        const point = this.getPointOfCircle(this.currentAngle);

        this.gradient.fx = point.x;
        this.gradient.fy = point.y;
        i++;
      }, this.animationIncrements);
    },
  },

  ready() {
    this.changeProgress();

    this.$watch('totalSteps', () => {
      this.changeProgress(true);
    });

    this.$watch('completedSteps', () => {
      this.changeProgress(true);
    });
  },
};
</script>

<style lang="less" scoped>
.radial-progress-container {
  position: relative;
}

.radial-progress-inner {
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  position: absolute;
  border-radius: 50%;
  z-index: -1;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
