<template>
  <div class="powerBallDrawings">
    <ElementsSlider :elements="drawings" :layoutComponent="PowerBallDrawingElement" />
  </div>
</template>

<script lang="ts">
import ElementsSlider from '@/components/ElementsSlider.vue';
import PowerBallDrawingElement from './PowerBallDrawingElement.vue';

export default {
  name: "PowerBallDrawings",
  props: ["drawings"],
  components: {ElementsSlider},
  setup(props) {

    return { PowerBallDrawingElement };
  },
};
</script>

<style scoped>
  .powerBallDrawings {

  }
</style>
