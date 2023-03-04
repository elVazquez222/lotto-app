<template>
  <div class="powerBall">
    <h1>Play PowerBall</h1>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { fetchPowerBallDrawHistory } from '../services/powerBallService';

export default {
  name: "PowerBall",
  components: {},
  setup() {

    onMounted(async() => {
      console.log(await fetchPowerBallDrawHistory())
    })

    return {
     };
  },
};
</script>

<style scoped>
  .powerBall {

  }
</style>

