<template>
  <p class="is-size-5" v-html="joke"></p>
</template>
<script>
import axios from 'axios';
export default {
  name: "ApiExample",
  created() {
    axios.get('http://api.icndb.com/jokes/143').then((response) => {
      this.joke = response.data.value.joke;
    });
  },
  data(){
    return {
      joke: ''
    }
  }
}
</script>

<style scoped>

</style>