<template>
  <div>
    <p>dynamic</p>
    <li v-for="item in lists" :key="item" @click="handleClick(item)">{{item}}</li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: ['111', '222', '333']
    }
  },
  methods: {
    handleClick(item) {
      // 编程式导航--路径跳转
      // this.$router.push(`/detail/${item}`)
      // 编程式导航--名字跳转 写法较复杂
      this.$router.push({name: 'corner', params: {id: item} })

    }
  }
}
</script>