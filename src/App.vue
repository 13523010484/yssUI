<template>
  <div id="app">
    <yss-button>默认按钮</yss-button>
    <yss-button type="primary">主要按钮</yss-button>
    <yss-button type="success">成功按钮</yss-button>
    <yss-icon name="bank" />
    <yss-icon name="location" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {};
  }
};
</script>
