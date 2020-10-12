<template>
  <div>
    <p>detail</p>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  mounted() { //获取参数
    console.log(`获得参数 ${this.$route.params.id}`)
  }
};
</script>