<script>
import { breweryService } from "../services/breweryService";
///import { RouterLink } from "vue-router";

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
  methods: {
    navTo(breweryId) {
      console.log("navigating to brewery page...")
      console.log(`brewery id: ${breweryId}`)
      this.$router.push({ name: "brewery", params: { id: breweryId } });
    },
  },
};
</script>

<template>
  <h1>Breweries</h1>
  <div>
    <PvDataTable :value="breweryList" responsiveLayout="scroll">
      <PvColumn
        v-for="col in columns"
        :field="col.field"
        :header="col.header"
        :key="col.field"
      ></PvColumn>
      <PvColumn>
        <template #body="slotProps">
          <PvButton
            type="button"
            @click="navTo(slotProps.data.id)"
            icon="pi pi-book"
          ></PvButton>
        </template>
      </PvColumn>
    </PvDataTable>
  </div>
</template>
