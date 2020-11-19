<template>
<button class="button" :class="{
  'is-primary': primary,
  'is-info': info,
}"><slot></slot></button>
</template>

<script>
export default {
name: "Btn",
  props: {
    primary: Boolean,
    info: Boolean
  }
}
</script>

<style scoped>

</style>