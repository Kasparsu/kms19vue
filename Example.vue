<template>
  <div>
    <input type="text" v-model="message" @keyup.enter="items.push(message)">
    <button @click="items.push(message)" >Add Item</button>
    <ul>
      <li v-for="(item,key) in items" :key="key">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Example",
  data() {
    return {
      message: '',
      items: ['Sai', 'Piim', 'Õlu']
    }
  }
}
</script>

<style scoped>
  h1 {
    color: red
  }
</style>