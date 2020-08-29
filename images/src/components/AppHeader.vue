<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item">Image Storage</a>
    <div class="right menu" >
      <a href="#" class="ui item" @click="login">
        Login
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AppHeader",
  // NOTE: Wire up actions, in the list the action names has to be specified
  methods: mapActions(['login'])
  // NOTE: Other syntax
  // methods: {
  //   ...mapActions(['login']),
  //   //  further non-action methods to be added here
  // }
};
</script>