<template>
  <i :class="`yss-icon-${name}`"></i>
</template>

<script>
export default {
  name: 'YssIcon',
  props: {
    name: String
  }
};
</script>

<style>
@import url('./index.css');
</style>
