<template>
  <div class="powerBallDrawingElement">
    <h2>{{drawing.prettyDrawDate}} </h2>

    <h3>Base numbers:</h3>
    <div
      v-for="(drawingResults, index) of drawing.drawnNumbers"
      :key="index"
      class="baseNumbersContainer"
    >
      <span
        class="number base"
        v-for="number of drawingResults.numbers[0].values"
        :key="number"
      >{{number}}</span>
    </div>

    <h3>Extra number:</h3>
    <span
      v-for="(drawingResults, index) of drawing.drawnNumbers"
      :key="index"
    >
      <span
        class="number"
        v-for="number of drawingResults.numbers[1].values"
        :key="number"
      >{{number}}</span>
    </span>

    <h3>Powerplay number:</h3>
    <span
      v-for="(drawingResults, index) of drawing.drawnNumbers"
      :key="index"
    >
      <span
        class="number"
        v-for="number of drawingResults.numbers[2].values"
        :key="number"
      >{{number}}</span>
    </span>


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
  h2 {
    text-decoration: underline;
  }

  .powerBallDrawingElement {
    display: flex;
    flex-direction: column;
    min-height: 400px;
  }

  .baseNumbersContainer {
    display: flex;
    gap: 10px;
    justify-content: space-evenly;
  }

  .number {
    display: flex;
    justify-content: center;
    align-items: center;

    background: black;
    color: white;
    border-radius: 50%;
    width: 25px;
    height: 25px;

    margin-left: auto;
  }
</style>
