<script>
import { breweryService } from "../services/breweryService";
import { ref } from "vue";
//import { useRoute } from 'vue-router';


export default {
  name: "BreweryView",
  data() {
    return { items: null };
  },
  setup() {
    //const route = useRoute();
    const breweries = ref([]);
    breweryService.breweries.subscribe((x) => (breweries.value = x));
    return { breweries };
  },
  // mounted() {
  //   const route = useRoute();
  //   this.brewery = breweries.filter(function(x) { x.id == route.params.id});
  // },

};
</script>

<template>
  <h1>NOOOOOO</h1>
  <PvDataTable :value="breweries">
    <PvColumn field="name" header="Name"></PvColumn>
    <PvColumn field="street" header="Address"></PvColumn>
    <PvColumn field="city" header="City"></PvColumn>
    <PvColumn field="state" header="State"></PvColumn>
    <PvColumn field="postal_code" header="Zip"></PvColumn>
    <PvColumn field="website_url" header="Website"></PvColumn>
  </PvDataTable>
</template>
