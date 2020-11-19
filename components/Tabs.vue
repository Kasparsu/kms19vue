<template>
  <div class="tabs">
    <ul>
      <li
          v-for="(item,index) in items"
          :key="index"
          :class="{'is-active': active === index}">
          <a @click="select(index)">{{ item }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  props: ['items'],
  data(){
    return {
      active: 0
    }
  },
  methods: {
    select(index){
      this.active = index;
      this.$emit('select', index);
    }
  }
}
</script>

<style scoped>

</style>