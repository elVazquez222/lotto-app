<template>
  <div class="powerBall">
    <h1>PowerBall Drawings: </h1>
    <PowerBallDrawings
      v-if="hasDrawings"
      :drawings="drawingsWithFormattedDates"
    />
    <div v-else class="loading">loading</div>
  </div>
</template>

<script lang="ts">
import helpers from '../../services/helpers';
import { onMounted, ref } from 'vue';
import PowerBallDrawings from './components/PowerBallDrawings.vue';
import {
  fetchPowerBallDrawHistory,
  PowerBallDrawHistoryResponse,
  FinishedDrawPayloadWithFormattedDateFields
} from '../../services/powerBallService';

export default {
  name: "PowerBall",
  components: {PowerBallDrawings},
  setup() {
    const drawings = ref<PowerBallDrawHistoryResponse | null>(null);
    const drawingsWithFormattedDates = ref<FinishedDrawPayloadWithFormattedDateFields[]>([]);
    const hasDrawings = ref(false);

    onMounted(async() => {
       drawings.value = await fetchPowerBallDrawHistory();
       addShortDateInfoToDrawings();
       hasDrawings.value = drawingsWithFormattedDates.value.length !== 0;
    })

    const addShortDateInfoToDrawings = () => {

      if(!drawings.value){
        return;
      }

      drawingsWithFormattedDates.value = drawings.value.drawHistory?.draws.map(drawing => {
        const shortenedDate = helpers.shortenThisDate(drawing.drawDate);
        const prettyDrawDate = helpers.prettifyThisDate(drawing.drawDate);
        return { ...drawing, shortenedDate, prettyDrawDate }
      })
    }

    return {
      hasDrawings,
      drawingsWithFormattedDates
     };
  },
};
</script>

<style scoped>
  h1 {
    text-align: center;
    padding: var(--global-spacing-l);
  }

  .powerBall {
    background: rgba(255, 255, 255, .85)
  }
</style>

