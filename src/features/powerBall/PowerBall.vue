<template>
  <div class="powerBall">
    <header>
      <h1>PowerBall Drawings: </h1>
      <div v-if="drawingsWithFormattedDates.length !== 0" class="currentDateSpan">
        <div>{{drawingsWithFormattedDates[0].shortenedDate}} - {{drawingsWithFormattedDates[drawingsWithFormattedDates.length-1].shortenedDate}}</div>
        <div class="currentDateSpanNavigator">
          <span :class="['touchable', currentPageIndex === 0 && 'inactive']" @click="setCurrentPageIndex(-1)">load newer</span>
          <span class="touchable" @click="setCurrentPageIndex(1)">load older</span>
        </div>
      </div>
    </header>

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
    const DRAWINGS_PER_PAGE = 10;
    const currentPageIndex = ref(0);

    const drawings = ref<PowerBallDrawHistoryResponse | null>(null);
    const drawingsWithFormattedDates = ref<FinishedDrawPayloadWithFormattedDateFields[]>([]);
    const hasDrawings = ref(false);

    onMounted(() => {
      fetchDrawings();
    })

    const fetchDrawings = async() => {
      drawings.value = await fetchPowerBallDrawHistory(DRAWINGS_PER_PAGE, currentPageIndex.value * DRAWINGS_PER_PAGE);
      addShortDateInfoToDrawings();
      hasDrawings.value = drawingsWithFormattedDates.value.length !== 0;
    }

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

    const setCurrentPageIndex = (direction: -1|1) => {
      currentPageIndex.value = currentPageIndex.value += direction;
      fetchDrawings();
      console.log(currentPageIndex.value);

    }

    return {
      currentPageIndex,
      hasDrawings,
      drawingsWithFormattedDates,
      setCurrentPageIndex
     };
  },
};
</script>

<style scoped>
  h1 {
    text-align: center;
    padding: var(--global-spacing-l);
  }

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: var(--global-spacing-m);
    font-size: 1rem;
    width: 100%;
  }

  .currentDateSpanNavigator {
    display: flex;
    gap: var(--global-spacing-xl);
    margin: var(--global-spacing-m) 0;
  }
  .currentDateSpanNavigator span {
    font-size: 12px;
    color: blue;
    text-decoration: underline;
  }
  .currentDateSpanNavigator .inactive {
    cursor: not-allowed;
    color: grey;
    text-decoration: none;
  }

  .powerBall {
    background: rgba(255, 255, 255, .85)
  }

@media only screen and (max-width: 600px) {

  h1 {
    text-align: center;
    padding: var(--global-spacing-s);
  }

}
</style>

