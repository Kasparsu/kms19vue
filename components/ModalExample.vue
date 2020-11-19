<template>
  <div>
    <modal v-show="isOpen" @close="isOpen=false">
      <p class="image is-4by3">
        <img src="http://placekitten.com/1280/960" alt="">
      </p>
    </modal>
    <button class="button" @click="isOpen=true">Open Modal</button>
  </div>

</template>

<script>
import Modal from "./Modal";
export default {
  name: "ModalExample",
  components: {Modal},
  data(){
    return {
      isOpen: false
    }
  }
}
</script>

<style scoped>

</style>