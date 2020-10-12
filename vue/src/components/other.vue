<template>
  <div>
    <p>other</p>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  beforeRouteEnter (to, from, next) {
    console.log(to)
    next()
  },
  beforeRouteLeave (to, from, next) {
    if(confirm('确认离开？') === true){
      next()
    }else{
      next()
    }
  }
}
</script>