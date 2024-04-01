<template>
  <div class="product_page">
    <div class="empty_page">
      <div class="empty_remember">小猿正在开发中...</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'developmentPage',
  data() {
    return {
      jumpUrl: ''
    };
  },
  methods: {}
};
</script>

<style scoped>
.product_page {
  width: 100%;
  height: 100vh;
}
.product_page .empty_page {
  width: 1rem;
  height: 2rem;
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  margin: auto;
}
.product_page .empty_page > img {
  width: 100%;
  height: auto;
}
.product_page .empty_page .empty_remember {
  font-size: 0.12rem;
  color: #8695a1;
}
</style>
