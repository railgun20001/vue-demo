<template>
  <div class="detail-warp">
    <div class="detail-left">
      <div class="product-board">
        <img :src="productImg" />
        <ul>
          <router-link v-for="item in products" :key="key" :to="{ path: item.path }" tag="li" active-class="select">
            {{ item.name }}
          </router-link>
        </ul>
      </div>
    </div>
    <div class="detail-right">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      key: '',
      products: [
        {
          name: '数据统计',
          path: 'count'
        },
        {
          name: '数据预测',
          path: 'forecast'
        },
        {
          name: '流量分析',
          path: 'analysis'
        },
        {
          name: '广告发布',
          path: 'publish'
        }
      ],
      imgMap: {
        '/detail/count': require('../assets/images/1.png'),
        '/detail/forecast': require('../assets/images/2.png'),
        '/detail/analysis': require('../assets/images/3.png'),
        '/detail/publish': require('../assets/images/4.png')
      }
    }
  },
  computed: {
    productImg () {
      return this.imgMap[this.$route.path]
    }
  }
}
</script>

<style>
.detail-warp {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  padding-top: 20px;
}
.detail-left {
    float: left;
    width: 200px;
    text-align: center;
}
.detail-right {
  float: left;
  width: 980px;
  margin-left: 20px;
}
.product-board {
  background: #fff;
  padding: 20px 0;
}
.product-board ul {
  margin-top: 20px;
}
.product-board li {
  text-align: left;
  padding: 10px 15px;
  cursor: pointer;
}
.product-board li.select,
.product-board li:hover {
  background: #4fc08d;
  color: #fff;
}
</style>
