<template>
  <ul v-if="global">
    <li>{{global.TotalConfirmed}}</li>
    <li>{{global.NewConfirmed}}</li>
  </ul>
</template>

<script>
import axios from 'axios';
export default {
  name: "CoronaExample",
  created(){
    axios.get('https://api.covid19api.com/summary').then((resp)=>{
      console.log(resp.data);
      this.global = resp.data.Global;
    })
  },
  data(){
    return {
      global: null
    }
  }
}
</script>

<style scoped>

</style>