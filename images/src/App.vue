<template>
  <div>
    <AppHeader></AppHeader>
    <!-- NOTE: VueRouter will insert components here -->
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";

export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>
