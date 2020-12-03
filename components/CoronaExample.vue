<template>
  <div class="columns is-multiline">
    <div class="column is-one-quarter" v-for="(country, index) in countries" :key="index">
        <country-data :data="country"></country-data>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import CountryData from "./CountryData";
export default {
  name: "CoronaExample",
  components: {CountryData},
  created(){
    axios.get('https://api.covid19api.com/summary').then((resp)=>{
      console.log(resp.data);
      this.global = resp.data.Global;
      this.countries = resp.data.Countries;
    })
  },
  data(){
    return {
      global: null,
      countries: []
    }
  }
}
</script>

<style scoped>

</style>