<template>
  <div class="demo">
    <h1>{{ msg }}</h1>
    <input type="text" v-on:input="changeTitle">
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  methods: {
    changeTitle: function(event) {
      this.msg = event.target.value
    },
  },
  props: {
    msg: String,
  },
}
</script>

<style scoped>
.demo {
  background-color: cyan;
}
</style>
