<template>
  <div>
    <h2>ToDoList</h2>
    <input type="text" v-model="text" @keyup.enter="handleItemAdd" />
    <todoitem
      :item="item"
      :index="index"
      v-for="(item, index) in lists"
      :key="item.id"
      @delete="handleItemDelete"
    ></todoitem>
  </div>
</template>

<script>
import todoitem from "./todoitem";
export default {
  data() {
    return {
      text: "",
      lists: [
        {
          content: "code",
          done: false,
        },
        {
          content: "work out",
          done: false,
        },
      ],
    };
  },
  methods: {
    handleItemAdd: function () {
      this.lists.push({ content: this.text, done: false });
      this.text = "";
    },
    handleItemDelete: function (index) {
      console.log("delete");
      // this.lists.splice(index, 1);
    },
  },
  components: {
    todoitem,
  },
};
</script>
<style scoped>
input {
  margin-bottom: 5px;
}
</style>