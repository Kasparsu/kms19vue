<template>
  <div class="card">
    <header class="card-header has-background-primary">
      <p class="card-header-title">
        {{data.Country}}
      </p>
    </header>
    <div class="card-content">
      <ul>
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