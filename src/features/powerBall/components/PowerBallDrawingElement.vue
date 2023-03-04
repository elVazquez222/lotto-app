<template>
  <div class="powerBallDrawingElement">
    <h1>{{drawing.prettyDrawDate}} </h1>
  </div>
</template>

<script lang="ts">
export default {
  name: "PowerBallDrawingElement",
  props: ["drawing"],
  components: {},
  setup() {
    return { };
  },
};
</script>

<style scoped>
  .powerBallDrawingElement {

  }
</style>
