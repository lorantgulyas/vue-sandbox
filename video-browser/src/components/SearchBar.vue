<template>
  <div>
    <input @input="onInput" />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  methods: {
    onInput(e) {
      this.$emit('termChange', e.target.value); //event emitter to communicate information from child to parent, emits event called 'termChange'
    },
  },
};
</script>

<style scoped>
  input {
    width: 75%;
  }
  div {
    text-align: center;
    margin: 20px;
  }
</style>
