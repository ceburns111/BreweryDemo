<script>
import { breweryService } from "../services/breweryService";
// import { ref } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "BreweryView",
  data() {
    return {
      brewery: {
        name: "",
        state: "",
        zip: "",
        url: null,
      },
    };
  },
  async created() {
    const route = useRoute();
    const breweryId = route.params.id;
    console.log(`brewery id: ${breweryId}`);

    const breweryResult = await breweryService.getBreweryById(breweryId);
    this.brewery.name = breweryResult.name;
    this.brewery.state = breweryResult.state;
    this.brewery.zip = breweryResult.postal_code;
    this.brewery.url = breweryResult.website_url;
  },
};
</script>

<template>
  <PvCard>
    <template #title>{{ brewery.name }}</template>
    <template #subtitle>{{ brewery.state + " " + brewery.zip }}</template>
    <template v-if="brewery.url != null" #content>
      <a v-bind:href="brewery.url">Website</a>
    </template>
    <template #footer></template>
  </PvCard>
</template>
