<script>
export default {
  data() {
    return {
      items: [
        {
          label: "Home",
          to: "/",
        },
        {
          label: "Breweries",
          to: "/breweries",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="positioned p-d-flex p-jc-between p-ai-center">
    <PvMenubar id="mBar" :model="items">
      <template #start></template>
      <template #item="{ item }">
        <router-link :to="item.to" class="hdCol">
          {{ item.label }}
        </router-link>
      </template>
      <template #end></template>
    </PvMenubar>
    <RouterView />
  </div>
</template>

<style scoped>
.hdCol {
  padding: 10px;
}
#mBar {
  background-color: rgb(29, 31, 32);
}
</style>
