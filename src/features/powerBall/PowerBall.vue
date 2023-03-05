<template>
  <div class="powerBall">
    <h1>Play PowerBall</h1>
    <PowerBallDrawingsVue v-if="hasDrawings" :drawings="drawings" />
    <div v-else class="loading">loading</div>
  </div>
</template>

<script>
import helpers from '../../services/helpers';

import { onMounted, ref } from 'vue';
import { fetchPowerBallDrawHistory } from '../../services/powerBallService';
import PowerBallDrawingsVue from './components/PowerBallDrawings.vue';

export default {
  name: "PowerBall",
  components: {PowerBallDrawingsVue},
  setup() {
    const drawings = ref([]);
    const hasDrawings = ref(false);

    onMounted(async() => {
       drawings.value = await fetchPowerBallDrawHistory();
       addShortDateInfoToDrawings();
       hasDrawings.value = drawings.value.drawHistory?.draws?.length !== 0;
    })

    const addShortDateInfoToDrawings = () => {
        drawings.value = drawings.value.drawHistory.draws.map(drawing => {
          const shortenedDate = helpers.shortenThisDate(drawing.drawDate);
          const prettyDrawDate = helpers.prettifyThisDate(drawing.drawDate);
          return { ...drawing, shortenedDate, prettyDrawDate }
        })
    }

    return {
      hasDrawings,
      drawings,
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

