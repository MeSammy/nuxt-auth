<template>
  <div>
    <TopNavWithSearch />
    <nuxt />
  </div>
</template>

<script>
import TopNav from "./partials/TopNav.vue";
import TopNavWithSearch from "./partials/TopNavWithSearch.vue";

export default {
  components: {
    TopNavWithSearch,
  },
};
</script>
