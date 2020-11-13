<template>
  <div>
    <input type="text" v-model="message" @keyup.enter="add">
    <button @click="add">Add Item</button>
    <check-list :items="items" title="All Items"></check-list>
    <check-list :items="doneItems" title="Done Items"></check-list>
    <check-list :items="notDoneItems" title="Not Done Items"></check-list>
  </div>
</template>

<script>
import CheckList from "./CheckList";
export default {
  name: "Example",
  components: {CheckList},
  data() {
    return {
      message: '',
      items: [
        {name:'Sai', done: true, key: 0},
        {name:'Leib', done: false, key: 1},
        {name:'Õlu', done: true, key: 2},
      ]
    }
  },
  methods: {
    add(){
      if(this.message !== '') {
        this.items.push({
          name: this.message,
          done: false,
          key: this.items.length
        });
        this.message = '';
      }
    }
  },
  computed: {
    doneItems(){
      return this.items.filter(item => item.done);
    },
    notDoneItems(){
      return this.items.filter(item => !item.done);
    }
  }
}
</script>

<style scoped>
  h1 {
    color: red
  }
</style>