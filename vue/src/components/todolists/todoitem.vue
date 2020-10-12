<template>
  <div>
    <li :class="{done: done}">
      <input type="checkbox" @change="()=>{done = !done}"/>
      <p>{{ item.content }}</p>
      <a @click="handleItemClick">-</a>
    </li>
  </div>
</template>

<script>
export default {
  props: ["item", "index"],
  data() {
    return {
      done: false,
    };
  },
  methods: {
    handleItemClick: function () {
      alert("del");
      // this.$emit("delete", this.index); //触发的是delete事件，不是handleItemDelete函数
    },
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  font-size: 20px;
}

li {
  position: relative;
  left: 10px;
  width: 200px;
  height: 30px;
  display: inline-block;
  margin-bottom: 5px;
  /* background-color: rgba(212, 212, 212, 0.459); */
}
input[type='checkbox'] {
  width: 18px;
  height: 18px;
  position: relative;
  top: 3px;
  cursor: pointer
}
p {
  display: inline-block;
}
a {
  position: absolute;
  right: 0px;
  width: 30px;
  height: 25px;
  text-align: center;
  display: inline-block;
  border-radius: 20px;
  background: rgb(208, 211, 211);
  cursor: pointer
  /* border: 2px solid #f5ecec */
}
.done {
  background-color: rgb(92, 92, 92);
}
</style>