<script>
import { breweryService } from "../services/breweryService";
// import { ref } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "BreweryView",
  data() {
    return {
      brewery: null,
    };
  },
  async created() {
    const route = useRoute();
    const breweryId = route.params.id;
    console.log(`brewery id: ${breweryId}`);

    const breweryResult = await breweryService.getBreweryById(breweryId);
    this.brewery = breweryResult;
  },
};
</script>

<template>
    <PvCard>
      <template #title>{{ brewery.name }}</template>
      <template #subtitle>{{
        brewery.state + " " + brewery.postal_code
      }}</template>
      <template #content>
        <a v-bind:href="brewery.website_url">Website</a>
      </template>
      <template #footer></template>
    </PvCard>
</template>
