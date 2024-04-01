<template>
  <button
    class="yss-button"
    @click="handleClick"
    :class="[
      type ? 'yss-button--' + type : '',
      size ? 'yss-button--' + size : ''
    ]"
  >
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
export default {
  name: 'YssButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    circle: Boolean
  },

  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
};
</script>

<style scoped>
.yss-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}

.yss-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}

.yss-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
}

.yss-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
}

.yss-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
</style>
