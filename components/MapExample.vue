<template>
<div id="map"></div>
</template>

<script>
import { Loader } from "@googlemaps/js-api-loader";
export default {
name: "MapExample",
  mounted() {
    const loader = new Loader({
      apiKey: "AIzaSyCPyCP_3Ti6mrCGlctc3CKr5ezm0pGSQMQ",
      version: "weekly",
    });
    loader.load().then(() => {
      let map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 20, lng: 0 },
        zoom: 3,
      });
    });
  }
}
</script>

<style>
#map, #app, .section, #app>div {
  height: 100%;
}
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>