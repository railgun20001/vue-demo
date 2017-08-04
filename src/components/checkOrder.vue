<template>
  <div>
    <my-dialog :is-show="isShowCheckDialog">
      请检查你的支付状态！
      <div class="button" @click="checkStatus">
        支付成功
      </div>
      <div class="button" @click="checkStatus">
        支付失败
      </div>
    </my-dialog>
    <my-dialog :is-show="isShowSuccessDialog" @on-close="toOrderList">
      购买成功！
    </my-dialog>
    <my-dialog :is-show="isShowFailDialog" @on-close="toOrderList">
      购买失败！
    </my-dialog>
  </div>
</template>

<script>
import MyDialog from './dialog.vue'
export default {
  components: {
    MyDialog
  },
  props: {
    isShowCheckDialog: {
      type: Boolean,
      default: false
    },
    orderId: {
      type: [String, Number]
    }
  },
  data () {
    return {
      isShowSuccessDialog: false,
      isShowFailDialog: false
    }
  },
  methods: {
    checkStatus () {

    },
    toOrderList () {

    }
  }
}
</script>

<style scoped>

</style>
