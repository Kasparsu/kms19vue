<template>
  <div>
      <button :class="{green: isOn, red: !isOn}" @click="isOn=!isOn">Click me</button>
  </div>
</template>

<script>
export default {
  name: "Example",

  data() {
    return {
      isOn: true
    }
  },
}
</script>

<style scoped>
  .red {
    background-color: red;
  }
  .green {
    background-color: green;
  }
</style>