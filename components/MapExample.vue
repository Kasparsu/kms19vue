<template>
  <div>
    <button class="button is-primary" @click="addMarker">Add Marker</button>
    <div id="map" ref="map"></div>

  </div>

</template>

<script>
import { Loader } from "@googlemaps/js-api-loader";
import axios from 'axios';
export default {
name: "MapExample",
  mounted() {
    const loader = new Loader({
      apiKey: "AIzaSyCPyCP_3Ti6mrCGlctc3CKr5ezm0pGSQMQ",
      version: "weekly",
    });
    loader.load().then(() => {
      this.map = new google.maps.Map(this.$refs['map'], {
        center: { lat: 20, lng: 0 },
        zoom: 3,
      });
      //this.map.data.loadGeoJson('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json')
      axios.get('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json').then(resp => {
        axios.get('https://api.covid19api.com/summary').then(covidResp => {
            let newfeatures = Object.assign({}, resp.data);
            newfeatures.features = resp.data.features.map(feature => {
              let country = covidResp.data.Countries.find(country => country.Country === feature.properties.name);
              feature.properties.cases = country ? country.TotalConfirmed : 0;
              return feature;
            });
            console.log(newfeatures);
            this.map.data.addGeoJson(newfeatures);
            this.map.data.setStyle((feature)=> {
              let color;
              if(feature.getProperty('cases') >= 1){
                color = 'green';
              }
              if(feature.getProperty('cases') >= 10000){
                color = 'yellow'
              }
              if(feature.getProperty('cases') >= 100000){
                color = 'red'
              }
              return {
                fillColor: color
              }
            })
        })

      })
    });

  },
  data(){
    return {
      map: null
    }
  },
  methods: {
    addMarker(){
      let marker = new google.maps.Marker({
        position: {lat:59.4269493,lng:24.7434494},
        map: this.map
      });
    }
  }
}
</script>

<style>
#map {
  height: 1000px;
}
</style>