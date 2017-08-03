<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h2>数据统计</h2>
      <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
    </div>
    <div class="sales-board-form">
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          产品类型：
        </div>
        <div class="sales-board-line-right">
          <chooser :selections="buyTypes"></chooser>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          适用地区：
        </div>
        <div class="sales-board-line-right">
          <selection :selections="districts"></selection>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          有效时间：
        </div>
        <div class="sales-board-line-right">
          半年
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          总价：
        </div>
        <div class="sales-board-line-right">
          500 元
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left"></div>
        <div class="sales-board-line-right">
          <div class="button">
            立即购买
          </div>
        </div>
      </div>
    </div>
    <div class="sales-board-des">
      <h2>产品说明</h2>
      <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>

      <table class="sales-board-table">
        <tr class="ui-table-row">
          <td class="col-frist">
              <div class="intro-pic">
                安全安保
              </div>
          </td>
          <td>
              <div class="intro-pic">
                办公文教
              </div>
          </td>
          <td>
              <div class="intro-pic">
                彩票
              </div>
          </td>
          <td>
              <div class="intro-pic">
                车辆物流
              </div>
          </td>
          <td>
              <div class="intro-pic">
                成人用品
              </div>
          </td>
          <td>
              <div class="intro-pic">
                出版传媒
              </div>
          </td>
          <td>
              <div class="intro-pic">
                电脑硬件
              </div>
          </td>
        </tr>
        <tr class="ui-table-row">
            <td class="col-first">
                <div class="intro-pic">
                  电子电工
                </div>
            </td>
            <td>
                <div class="intro-pic">
                  房地产建筑装修
                </div>
            </td>
            <td>
                <div class="intro-pic">
                  分类平台
                </div>
            </td>
            <td>
                <div class="intro-pic">
                  服装鞋帽
                </div>
            </td>
            <td>
                <div class="intro-pic">
                  箱包饰品
                </div>
            </td>
            <td>
                <div class="intro-pic">
                  化工原料制品
                </div>
            </td>
            <td>
                <div class="intro-pic">
                  机械设备
                </div>
            </td>
        </tr>
        <tr class="ui-table-row">
            <td class="col-first">
                <div class="intro-pic">
                  家庭日用品
                </div>
            </td>
            <td>
                <div class="intro-pic">
                  家用电器
                </div>
            </td>
            <td>
                <div class="intro-pic">
                  教育培训
                </div>
            </td>
            <td>
                <div class="intro-pic">
                  节能环保
                </div>
            </td>
            <td>
                <div class="intro-pic">
                  金融服务
                </div>
            </td>
            <td>
                <div class="intro-pic">
                  礼品
                </div>
            </td>
            <td>
                <div class="intro-pic">
                  旅游住宿
                </div>
            </td>
        </tr>
        <tr class="ui-table-row">
            <td class="col-first">
                <div class="intro-pic">
                  美容化妆
                </div>
            </td>
            <td>
                <div class="intro-pic">
                  母婴护理
                </div>
            </td>
            <td>
                <div class="intro-pic">
                  农林牧渔
                </div>
            </td>
            <td>
                <div class="intro-pic">
                  软件
                </div>
            </td>
            <td>
                <div class="intro-pic">
                  商务服务
                </div>
            </td>
            <td>
                <div class="intro-pic">
                  生活服务
                </div>
            </td>
            <td>
                <div class="intro-pic">
                  食品保健品
                </div>
            </td>
        </tr>
        <tr class="ui-table-row">
            <td class="col-first">
                <div class="intro-pic">
                  手机数码
                </div>
            </td>
            <td>
                <div class="intro-pic">
                  通讯服务设备
                </div>
            </td>
            <td>
                <div class="intro-pic">
                  网络服务
                </div>
            </td>
            <td>
                <div class="intro-pic">
                  医疗服务
                </div>
            </td>
            <td>
                <div class="intro-pic">
                  游戏
                </div>
            </td>
            <td>
                <div class="intro-pic">
                  运动休闲娱乐
                </div>
            </td>
            <td>
                <div class="intro-pic">
                  招商加盟
                </div>
            </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Chooser from '../../components/base/chooser.vue'
import Selection from '../../components/base/selection.vue'
export default{
  components: {
    Chooser,
    Selection
  },
  data () {
    return {
      buyTypes: [
        {
          label: '红色版',
          value: 0
        },
        {
          label: '绿色版',
          value: 1
        },
        {
          label: '紫色版',
          value: 2
        }
      ],
      districts: [
        {
          label: '北京',
          value: 0
        },
        {
          label: '上海',
          value: 1
        },
        {
          label: '广州',
          value: 2
        },
        {
          label: '天津',
          value: 3
        },
        {
          label: '武汉',
          value: 4
        },
        {
          label: '重庆',
          value: 5
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
