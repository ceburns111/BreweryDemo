<script>
import { breweryService } from "../services/breweryService";
import { ref, onMounted } from "vue";

export default {
  name: "BreweriesView",
  setup() {
    const breweries = ref([]);
    onMounted(async () => {
      await breweryService.getBreweries();
      breweries.value = breweryService.breweriesValue;
    });
    return { breweries };
  },
};
</script>

<template>
  <h1>Breweries</h1>
  <PvDataTable :value="breweries">
    <PvColumn field="name" header="Name"></PvColumn>
    <PvColumn field="street" header="Address"></PvColumn>
    <PvColumn field="city" header="City"></PvColumn>
    <PvColumn field="state" header="State"></PvColumn>
    <PvColumn field="postal_code" header="Zip"></PvColumn>
    <PvColumn field="website_url" header="Website"></PvColumn>
  </PvDataTable>
</template>
