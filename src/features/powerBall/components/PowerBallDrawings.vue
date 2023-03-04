<template>
  <div class="powerBallDrawings">
    <ElementsSlider :elements="drawings" />
  </div>
</template>

<script>
import ElementsSlider from '@/components/ElementsSlider.vue';
export default {
  name: "PowerBallDrawings",
  props: ["drawings"],
  components: {ElementsSlider},
  setup(props) {
    return { };
  },
};
</script>

<style scoped>
  .powerBallDrawings {

  }
</style>
