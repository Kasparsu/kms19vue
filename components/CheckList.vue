<template>
  <div>
    <h3>{{ title }}</h3>
    <ul>
      <li v-for="(item,key) in items" :key="item.key">
        <input type="checkbox" v-model="item.done">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CheckList",
  props: ['items', 'title']
}
</script>

<style scoped>

</style>