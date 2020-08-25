<template>
  <!-- NOTE: here we use the native HTML onClick event to call a function, which will emit a VUE event-->
  <!-- <li class="list-group-item media" v-on:click="onVideoSelect"> -->
  <li class="list-group-item media" @click="onVideoSelect">
    <!-- NOTE: binding a property into the img child, because src is a dynamic value -->
    <!-- <img v-bind:src="video.snippet.thumbnails.default.url" /> -->
    <!-- NOTE: Use computed value-->
    <img class="mr-3" v-bind:src="thumbnailUrl" />
    <div class="media-body">{{ video.snippet.title }}</div>
  </li>
</template>

<script>
export default {
  name: "VideoListItem",
  props: {
    video: Object,
  },
  computed: {
    thumbnailUrl() {
      return this.video.snippet.thumbnails.default.url;
    },
  },
  methods: {
    onVideoSelect() {
      this.$emit('videoSelect', this.video);
    },
  },
};
</script>

<style scoped>
li {
  display: flex;
  cursor: pointer;
}

li:hover {
  background-color: #eee;
}
</style>