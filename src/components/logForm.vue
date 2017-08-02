<template>
  <div calss="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class='g-form-input'>
          <input type="text" v-model="usernameModel" placeholder="请输入用户名" />
        </div>
        <span class="g-form-error">{{ userErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class='g-form-input'>
          <input type="password" v-model="passwordModel" placeholder="请输入密码" />
        </div>
        <span class="g-form-error">{{ passwordErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onLogin">登录</a>
          <span class="g-form-error">{{ errorText }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      usernameModel: '',
      passwordModel: '',
      errorText: '',
      userFlag: '',
      passwordFlag: ''
    }
  },
  computed: {
    userErrors () {
      let status, errorText
      if (!/@/g.test(this.usernameModel)) {
        status = false
        errorText = '不包含@'
      } else {
        status = true
        errorText = ''
      }
      if (!this.userFlag) {
        errorText = ''
        this.userFlag = true
      }
      return {
        status,
        errorText
      }
    },
    passwordErrors () {
      let status, errorText
      if (!/^\w{1,6}$/g.test(this.passwordModel)) {
        status = false
        errorText = '密码应为1-6位'
      } else {
        status = true
        errorText = ''
      }
      if (!this.passwordFlag) {
        errorText = ''
        this.passwordFlag = true
      }
      return {
        status,
        errorText
      }
    }
  },
  methods: {
    onLogin () {
      if (this.userErrors.status && this.passwordErrors.status) {
        this.errorText = ''
        console.log('logging')
        this.$http.get('api/login')
        .then((res) => {
          this.$emit('has-log', res.data)
        }, (error) => {
          console.log(error)
        })
      } else {
        this.errorText = '部分选项未通过验证'
      }
    }
  }
}
</script>

<style scoped>

</style>
