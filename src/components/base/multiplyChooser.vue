<template>
  <div class="chooser-component">
    <ul class="chooser-list">
      <li v-for="(item,index) in selections" :title="item.label" @click="toggleSelection(index)" :class="{select:checkSelect(index)}">
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  props: {
    selections: {
      type: Array,
      default: [{
        label: '客户版',
        value: 0
      }]
    }
  },
  data () {
    return {
      nowIndexs: []
    }
  },
  methods: {
    toggleSelection (index) {
      if (this.nowIndexs.indexOf(index) === -1) {
        this.nowIndexs.push(index)
      } else {
        this.nowIndexs = _.remove(this.nowIndexs, (idx) => {
          return idx !== index
        })
      }
      let nowObjArray = _.map(this.nowIndexs, (idx) => {
        return this.selections[idx]
      })
      this.$emit('on-change', nowObjArray)
    },
    checkSelect (index) {
      return this.nowIndexs.indexOf(index) !== -1
    }
  }
}
</script>

<style scoped>
.chooser-component {
  position: relative;
  display: inline-block;
}
.chooser-component li {
  display: inline-block;
  border: 1px solid #e3e3e3;
  height: 25px;
  line-height: 25px;
  padding: 0 8px;
  text-align: center;
  margin-right: 5px;
  border-radius: 3px;
  cursor: pointer;
}
.chooser-component li.select {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>
