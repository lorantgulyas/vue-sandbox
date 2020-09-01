<template>
  <div class="dropper">
    <!-- NOTE: without $ sign, vue is looking for and object called event, results in error -->
    <!-- NOTE: with $ sign, take the event object which comes from the triggering of onChange -->
    <input type="file" @change="uploadImages($event.target.files)" multiple accept="image/*" />
    <span>Drag files here!</span>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "UploadForm",
  methods: mapActions(["uploadImages"]),
};
</script>

<style scoped>
.dropper {
  height: 30vh;
  border: 2px dashed black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dropper:hover {
  background-color: #eee;
}

input {
  width: calc(100%-2em);
  height: 30vh;
  position: absolute;
  opacity: 0;
  margin-left: 1em;
  margin-right: 1em;
}
</style>