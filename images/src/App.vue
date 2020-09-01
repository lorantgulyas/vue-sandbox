<template>
  <div>
    <AppHeader></AppHeader>
    <!-- NOTE: VueRouter will insert components here -->
    <div class="ui container">
      <router-view></router-view>
    </div>
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
