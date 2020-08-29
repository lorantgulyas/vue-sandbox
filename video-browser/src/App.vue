<template>
  <!-- NOTE: here 'this' is NOT necessary to access data or computed values (or props)-->
  <div class="container">
    <SearchBar @termChange="onTermChange"></SearchBar>
    <div class="row">
      <VideoDetail v-bind:video="selectedVideo"></VideoDetail>
      <!-- NOTE: v-bind:<<nameInChild>> inside the child property will be called videos -->
      <!-- NOTE: ="<<nameInChild>>" name of the data in parent to be shared -->
      <!-- <VideoList v-bind:videos="videos"></VideoList> -->
      <!-- NOTE: alternative way to pass properties -->
      <VideoList :videos="videos" @videoSelect="onVideoSelect"></VideoList>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import debounce from "lodash/debounce";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";

import { API_KEY } from "./constant";

export default {
  name: "App",
  components: {
    SearchBar,
    VideoDetail,
    VideoList,
  },
  data() {
    return {
      videos: [],
      selectedVideo: null,
    };
  },
  // NOTE: created lifeCycleHook to overwrite the defined method function, wrapped with a debounce function
  // necessary for reasons described later
  created: function () {
    this.onTermChange = debounce(this.onTermChange, 2000);
  },
  methods: {
    // NOTE: first version to equip debounce looked like the following:
    // onTermChange: debounce((searchTerm) => { ... do stuff}, 2000)
    // However, this syntax overwrites the 'this' referencing the 'this.videos' later
    onTermChange(searchTerm) {
      if (searchTerm !== "") {
        axios
          .get("https://www.googleapis.com/youtube/v3/search", {
            params: {
              key: API_KEY,
              type: "video",
              part: "snippet",
              q: searchTerm,
            },
          })
          .then((response) => {
            // NOTE: this.videos refers to this.data.videos in the background
            this.videos = response.data.items;
          });
      }
    },
    onVideoSelect(video) {
      this.selectedVideo = video;
    },
  },
};
</script>