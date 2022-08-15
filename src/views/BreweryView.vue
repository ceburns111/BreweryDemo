<script>
import { breweryService } from "../services/breweryService";
import { mapService } from "../services/mapService";
import { useRoute } from "vue-router";
export default {
  name: "BreweryView",
  data() {
    return {
      brewery: {
        name: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        url: null,
      },
      center: { lat: 0, lng: 0 },
      markers: [
        {
          position: {
            lat: 0,
            lng: 0,
          },
        },
      ],
    };
  },
  async created() {
    const route = useRoute();
    const breweryId = route.params.id;
    console.log(`brewery id: ${breweryId}`);
    const breweryResult = await breweryService.getBreweryById(breweryId);
    this.brewery.name = breweryResult.name;
    this.brewery.street = breweryResult.street;
    console.log(`street: ${breweryResult.street}`);
    this.brewery.city = breweryResult.city;
    this.brewery.state = breweryResult.state;
    this.brewery.zip = breweryResult.postal_code;
    this.brewery.url = breweryResult.website_url;

    const address =
      breweryResult.street +
      " " +
      breweryResult.city +
      " " +
      breweryResult.state +
      " " +
      breweryResult.zip;

    const coordinates = await mapService.getCoordinates(address);
    console.log(
      `Lat: ${JSON.stringify(coordinates.results[0].geometry.location.lat)}`
    );
    console.log(
      `Lng: ${JSON.stringify(coordinates.results[0].geometry.location.lng)}`
    );

    this.center.lat = coordinates.results[0].geometry.location.lat;
    this.center.lng = coordinates.results[0].geometry.location.lng
    this.markers.position.lat = this.center.lat;
    this.markers.position.lng = this.center.lng;
  },
};
</script>

<template>
  <PvCard>
    <template #title>{{ brewery.name }}</template>
    <!-- <template #>{{ brewery.state + " " + brewery.zip }}</template> -->
    <template #content>
      <div>{{ brewery.street }}</div>
      <div>{{ brewery.city + " " + brewery.state + " " + brewery.zip }}</div>
    </template>
    <template v-if="brewery.url != null" #footer> <a v-bind:href="brewery.url">Website</a></template>
  </PvCard>
  <div>
    <GMapMap
      :center="center"
      :zoom="7"
      map-type-id="roadmap"
      style="width: 500px; height: 300px"
    >
      <GMapCluster>
        <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center = m.position"
        />
      </GMapCluster>
    </GMapMap>
  </div>
</template>
