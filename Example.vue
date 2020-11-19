<template>
  <div>
    <tabs :items="menuTitles" @select="selectExample"></tabs>
    <div class="section">
      <component :is="selectedExample"></component>
    </div>
  </div>
</template>
<script>
import Tabs from "./components/Tabs";
import ModalExample from "./components/ModalExample";
import ButtonExample from "./components/ButtonExample";
export default {
  name: "Example",
  components: {ButtonExample, ModalExample, Tabs},
  data() {
    return {
      menuTitles: ['Modal', 'Button'],
      selectedExample: 'ModalExample'
    }
  },
  methods: {
    selectExample(index){
      this.selectedExample = this.menuTitles[index] + 'Example';
    }
  }
}
</script>

<style scoped>

</style>