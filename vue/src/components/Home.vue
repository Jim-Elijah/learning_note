<template>
  <div>
    <router-link to="/center">center</router-link>
    <a href="#/other">other</a>
    <router-link to="/other/child1">child1</router-link>
    <router-link to="/dynamic">dynamic route</router-link>
    <router-link to="/todolist" tag='h3'>todolist</router-link>
    <h1>Home</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
