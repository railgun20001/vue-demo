<template>
  <div class="counter-component">
    <div class="counter-btn" @click="minus"> - </div>
    <div class="counter-show">
      <input type="text" v-model="number" @keyup="fixNum">
    </div>
    <div class="counter-btn" @click="add"> + </div>
  </div>
</template>

<script>
export default {
  props: {
    max: {
      type: Number,
      default: 5
    },
    min: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      number: this.min
    }
  },
  watch: {
    number () {
      this.$emit('on-change', this.number)
    }
  },
  methods: {
    minus () {
      if (this.number > this.min) {
        this.number = this.number - 1
      } else {
        this.number = this.min
      }
    },
    add () {
      if (this.number < this.max) {
        this.number = this.number + 1
      } else {
        this.number = this.max
      }
    },
    fixNum () {
      let fix
      if (typeof this.number === 'string') {
        fix = Number(this.number.replace(/\D/g, ''))
      } else {
        fix = this.number
      }
      if (this.number < this.min) {
        fix = this.min
      }
      if (this.number > this.max) {
        fix = this.max
      }
      this.number = fix
    }
  }
}
</script>

<style scoped>
.counter-component {
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}
.counter-show {
  float: left;
}
.counter-show input {
  border: none;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  height: 25px;
  line-height: 25px;
  width: 32px;
  outline: none;
  text-indent: 4px;
  text-align: center;
}
.counter-btn {
  border: 1px solid #e3e3e3;
  float: left;
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  cursor: pointer;
  user-select: none;
}
.counter-btn:hover {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>
