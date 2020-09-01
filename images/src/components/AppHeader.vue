<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="active item">Image Storage</router-link>

    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <!-- NOTE: router-link will prevent full page reload -->
        <router-link to="/" class="item">Galleries</router-link>
        <router-link to="/upload" class="item">Upload</router-link>
        <a class="item" @click="logout">Logout</a>
      </div>
      <!-- NOTE: to use v-else, it has to be placed right after a tag with v-if directive -->
      <a href="#" class="ui item" @click="login" v-else>Login</a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppHeader",
  // NOTE: Wire up actions, in the list the action names has to be specified
  methods: mapActions(["login", "logout"]),
  // NOTE: Other syntax
  // methods: {
  //   ...mapActions(['login']),
  //   //  further non-action methods to be added here
  // }
  computed: mapGetters(["isLoggedIn"]),
};
</script>

<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>