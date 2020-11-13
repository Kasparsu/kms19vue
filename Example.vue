<template>
  <div>
    <input type="text" v-model="message" @keyup.enter="add">
    <button @click="add">Add Item</button>
    <h3>All items</h3>
    <ul>
      <li v-for="(item,key) in items" :key="item.key">
        <input type="checkbox" v-model="item.done">
        {{item.name}}
      </li>
    </ul>
    <h3>Done items</h3>
    <ul>
      <li v-for="(item,key) in doneItems" :key="item.key">
        <input type="checkbox" v-model="item.done">
        {{item.name}}
      </li>
    </ul>
    <h3>Not Done items</h3>
    <ul>
      <li v-for="(item,key) in notDoneItems" :key="item.key">
        <input type="checkbox" v-model="item.done">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Example",
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