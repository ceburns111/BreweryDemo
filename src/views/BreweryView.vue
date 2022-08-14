<script>
// import { breweryService } from "../services/breweryService";
// import { ref } from "vue";

export default {
  name: "BreweryView",
  data() {
    return { items: [] };
  },
  // setup() {
  //   const breweries = ref([]);
  //   breweryService.breweries.subscribe((x) => (breweries.value = x));
  //   // onMounted(async () => {
  //   //   await breweryService.getBreweries();
  //   //   breweries.value = breweryService.breweriesValue;
  //   // });
  //   console.log("brew breweries");
  //   console.log(breweries.value);
  //   return { breweries };
  // },
};
</script>

<template>
  <h1>Brewery</h1>
</template>
