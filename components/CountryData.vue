<template>
  <div class="card">
    <header class="card-header has-background-primary">
      <p class="card-header-title">
        {{data.Country}}
      </p>
      <img class="image mr-3" :src="'https://www.countryflags.io/'+ data.CountryCode +'/flat/64.png'">
    </header>
    <div class="card-content">
      <ul>
        <li><b>Active Cases:</b> {{data.TotalConfirmed - data.TotalDeaths - data.TotalRecovered}}</li>
        <li><b>New Confirmed:</b> {{data.NewConfirmed}}</li>
        <li><b>Total Confirmed:</b> {{data.TotalConfirmed}}</li>
        <li><b>New Deaths:</b> {{data.NewDeaths}}</li>
        <li><b>Total Deaths:</b> {{data.TotalDeaths}}</li>
        <li><b>New Recovered:</b> {{data.NewRecovered}}</li>
        <li><b>Total Recovered:</b> {{data.TotalRecovered}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
name: "CountryData",
  props: ['data']
}
</script>

<style scoped>

</style>