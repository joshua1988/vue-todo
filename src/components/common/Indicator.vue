<template>
  <div class="indicator"/>
</template>

<script>
  export default {
    name: 'Indicator',
  };
</script>

<style lang="scss" scoped>
  .indicator {
    background-image: url('../../assets/indicator.gif');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 90px;
    height: 90px;
  }
</style>