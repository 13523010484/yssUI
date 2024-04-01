<template>
  <div class="demo">
    <yss-button>默认按钮</yss-button>
    <yss-button type="primary">主要按钮</yss-button>
    <yss-button type="success">成功按钮</yss-button>
    <yss-icon name="bank" />
    <yss-icon name="location" />
  </div>
</template>

<script>
export default {
  name: 'demo',
  methods: {
    handleClick() {
      console.log('test...');
    }
  }
};
</script>
