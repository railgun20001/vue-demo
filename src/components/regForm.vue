<template>
  <div calss="register-form">
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
        <span class="g-form-label">确认密码：</span>
        <div class='g-form-input'>
          <input type="password" v-model="confirmPasswordModel" placeholder="请再输一次密码" />
        </div>
        <span class="g-form-error">{{ confirmPasswordErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onRegister">注册</a>
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
      confirmPasswordModel: '',
      errorText: '',
      userFlag: '',
      passwordFlag: '',
      confirmPasswordFlag: ''
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
      if (!/^[0-9]{6}$/g.test(this.passwordModel)) {
        status = false
        errorText = '密码应为6位数字'
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
    },
    confirmPasswordErrors () {
      let status, errorText
      if (this.confirmPasswordModel !== this.passwordModel) {
        status = false
        errorText = '两次输入密码不一致'
      } else {
        status = true
        errorText = ''
      }
      if (!this.confirmPasswordFlag) {
        errorText = ''
        this.confirmPasswordFlag = true
      }
      return {
        status,
        errorText
      }
    }
  },
  methods: {
    onRegister () {
      if (this.userErrors.status && this.passwordErrors.status && this.confirmPasswordErrors.status) {
        this.errorText = ''
        this.$emit('has-reg')
      } else {
        this.errorText = '部分选项未通过验证'
      }
    }
  }
}
</script>

<style scoped>

</style>
