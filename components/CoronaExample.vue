<template>
  <section class="section">
    <div class="columns">
      <div class="column">
        <input type="text" class="input mb-5" placeholder="Search country..." v-model="search">
      </div>
      <div class="column">
        <select class="input select" v-model="sort">
          <option v-for="(option,index) in sortOptions" :key="index" :value="option">{{option.label}}</option>
        </select>
      </div>
    </div>
    <div class="columns is-multiline">
      <div class="column is-2" v-for="(country, index) in sortedCountries" :key="index">
          <country-data :data="country"></country-data>
      </div>
    </div>
  </section>
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
      countries: [],
      search: '',
      sort: {field: 'Country', order: 'asc', label: 'Name desc'},
      sortOptions: [
        {field: 'Country', order: 'desc', label: 'Name desc'},
        {field: 'Country', order: 'asc', label: 'Name asc'},
        {field: 'NewConfirmed', order: 'desc', label: 'New Confirmed desc'},
        {field: 'NewConfirmed', order: 'asc', label: 'New Confirmed asc'},
        {field: 'TotalConfirmed', order: 'desc', label: 'Total Confirmed desc'},
        {field: 'TotalConfirmed', order: 'asc', label: 'Total Confirmed asc'},
      ]

    }
  },
  computed: {
    filteredCountries(){
      return this.countries.filter(country => {
        let partial = country.Country.substr(0,this.search.length).toLowerCase();
        return partial === this.search.toLowerCase();
      });
    },
    sortedCountries(){
      return this.filteredCountries.sort((countryA, countryB) => {
        if(countryA[this.sort.field] > countryB[this.sort.field] ){
          return this.sort.order === 'asc' ? 1 : -1;
        }
        if(countryA[this.sort.field] < countryB[this.sort.field] ){
          return this.sort.order === 'asc' ? -1 : 1;
        }
        return 0;
      });
    }
  }
}
</script>

<style scoped>

</style>