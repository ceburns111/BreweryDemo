<script>
import { breweryService } from "../services/breweryService";
export default {
  name: "BreweriesView",
  data() {
    return {
      breweryList: [],
      columns: [
        { field: "name", header: "Name" },
        { field: "street", header: "Address" },
        { field: "city", header: "City" },
        { field: "state", header: "State"},
        { field: "postal_code", header: "Zip Code" },
        { field: "website_url", header: "Website" },
        { field: "id", header: "Id" },
      ],
    };
  },
  async mounted() {
    this.breweryList = await breweryService.getBreweries();
  },
};
</script>

<template>
  <h1>Breweries</h1>
  <div>
  <PvDataTable :value="breweryList" responsiveLayout="scroll">
    <PvColumn v-for="col in columns" :field="col.field" :header="col.header" :key="col.field"></PvColumn>
    </PvDataTable>
  </div>
</template>
