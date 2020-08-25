<template>
  <!-- NOTE: props can be accessed just as the data properties, just the name -->
  <ul class="list-group col-md-4">
    <!-- NOTE: Angular style for loop, each element in array will be a component rendered -->
    <VideoListItem
      v-for="video in videos"
      v-bind:video="video"
      v-bind:key="video.etag"
      @videoSelect="onVideoSelect"
    ></VideoListItem>
    <!-- NOTE: Shorthand version -->
    <!-- <VideoListItem v-for="video in videos" :video="video" :key="video.etag"></VideoListItem> -->
  </ul>
</template>

<script>
import VideoListItem from "./VideoListItem";

export default {
  name: "VideoList",
  // NOTE: Property declaration WITHOUT typechecking; same name as it was defined in the parent component
  // props: ['videos']
  // NOTE: Property validation WITH typechecking; key is property name, value is type
  props: {
    videos: Array,
  },
  components: {
    VideoListItem,
  },
  methods: {
    onVideoSelect(video) {
      this.$emit('videoSelect', video);
    },
  },
};
</script>

<style lang="stylus"></style>