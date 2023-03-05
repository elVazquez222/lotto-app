<template>
  <div class="powerBallDrawings">
    <ElementsSlider
      :elements="drawings"
      :layoutComponent="PowerBallDrawingElement"
      indexIndicatorLabel="shortenedDate"
    />
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { PowerBallDrawHistoryResponse } from '../../../services/powerBallService';

import ElementsSlider from '@/components/ElementsSlider.vue';
import PowerBallDrawingElement from './PowerBallDrawingElement.vue';

export default {
  name: "PowerBallDrawings",
  props: {
    drawings: {
      type: Array as PropType<PowerBallDrawHistoryResponse[]>
    }
  },
  components: {ElementsSlider},
  setup() {

    return { PowerBallDrawingElement };
  },
};
</script>

<style scoped>
  .powerBallDrawings {

  }
</style>
