<template>
  <div class="chooser-component">
    <ul class="chooser-list">
      <li
      v-for="(item,index) in banks"
      :title="item.label"
      :class="[item.name,{select:index === nowIndex}]"
      @click="chooseSelection(index)"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    chooseSelection (index) {
      this.nowIndex = index
      this.$emit('on-change', this.banks[index])
    }
  },
  data () {
    return {
      nowIndex: 0,
      banks: [
        {
          id: 201,
          label: '招商银行',
          name: 'zhaoshang'
        },
        {
          id: 301,
          label: '中国建设银行',
          name: 'jianshe'
        },
        {
          id: 601,
          label: '浦发银行',
          name: 'pufa'
        },
        {
          id: 1101,
          label: '交通银行',
          name: 'jiaotong'
        },
        {
          id: 101,
          label: '中国工商银行',
          name: 'gongshang'
        },
        {
          id: 401,
          label: '中国农业银行',
          name: 'nongye'
        },
        {
          id: 1201,
          label: '中国银行',
          name: 'zhongguo'
        },
        {
          id: 501,
          label: '中信银行',
          name: 'zhongxin'
        }
      ]
    }
  }
}
</script>

<style scoped>
.chooser-component {
  display: inline-block;
  position: relative;
}
.chooser-list li {
  display: inline-block;
  width: 117px;
  height: 32px;
  background: url(../assets/banks/banks.png);
  background-repeat: no-repeat;
  margin: 5px;
  border: 1px solid #e3e3e3;
  cursor: pointer;
}
.chooser-list li.select {
  border: 1px solid #4fc08d;
}
li.zhaoshang {
  background-position: -2160px 0;
}
li.jianshe {
    background-position: -720px 0;
}
li.pufa {
    background-position: -1800px 0;
}
li.jiaotong {
    background-position: -3120px 0;
}
li.minsheng {
    background-position: -2760px 0;
}
li.pingan {
    background-position: -2400px 0;
}
li.beijing {
    background-position: -960px 0;
}
li.xingye {
    background-position: 0 0;
}
li.shanghai {
    background-position: -1560px 0;
}
li.guangfa {
    background-position: -840px 0;
}
li.gongshang {
    background-position: -2640px 0;
}
li.nongye {
    background-position: -1680px 0;
}
li.guangda {
    background-position: -2280px 0;
}
li.zhongguo {
    background-position: -2520px 0;
}
li.zhongxin {
    background-position: -480px 0;
}
li.chuxu {
    background-position: -120px 0;
}
li.bnongshang {
    background-position: -1440px 0;
}
li.huaxia {
    background-position: -2040px 0;
}
li.snongshang {
    background-position: -2880px 0;
}

li.baifubao {
    background-position: -1320px 0;
}
</style>
