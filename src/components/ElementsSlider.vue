<template>
  <div class="elementSlider">
    <div class="container">
      <div class="elementSliderAndTriggers">

        <div
          v-if="elements[currentIndex].id !== elements.length-1"
          class="forwardTrigger"
          @click="handleForwardClick"
        >
          <span class="touchable">{{'>>>'}}</span>
        </div>
        <div
          v-if="elements[currentIndex].id !== 0 "
          class="backwardsTrigger"
          @click="handleBackCLick"
        >
          <span class="touchable">{{'<<<'}}</span>
        </div>
      </div>

      <component
        :is="layoutComponent"
        :drawing="elements[currentIndex]"
      ></component>

      <div class="indexIndicator">
        <div
          v-for="(element, index) in elements"
          :key="element.id"
          class="indexIndicatorPoint touchable"
          :class="[currentIndex === index && 'active']"
          @click="setCurrentIndex(index)"
        >
          <div class="indexIndicatorLabel">
            {{element[`${indexIndicatorLabel}`]}}
          </div>
        </div>
      </div>
  </div>

  </div>
</template>

<script lang="ts">
import helpers from '../services/helpers';
import { ref } from 'vue';

export default {
    name: "ElementSlider",
    props: [
      "elements",
      "layoutComponent",
      "indexIndicatorLabel"
    ],
    components: { },
    setup(props) {
        const currentIndex = ref(0);

        const handleForwardClick = () => {
            currentIndex.value < props.elements.length -1 && currentIndex.value++;
        };
        const handleBackCLick = () => {
            currentIndex.value > 0 && currentIndex.value--;
        };
        const setCurrentIndex = (index: number) => {
          currentIndex.value = index;
        }


        return {
          helpers,
          currentIndex,
          handleForwardClick,
          handleBackCLick,
          setCurrentIndex,
        };
    },
}
</script>

<style scoped>
.elementSlider {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
}

.container {
  margin: 0 auto;
}

.elementSliderAndTriggers {
  position: relative;
}
.elementSlider .elementSliderAndTriggers {
  margin: 0 auto;
}

.elementSlider .headline {
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.elementSlider h2 {
  font-size: 26px;
  margin-bottom: 1rem;
  text-align: center;
}
.elementSlider h2 {
  font-size: 39px;
  margin-bottom: 1rem;
}

.text {
  min-height: 170px;
}

.elementSlider .text {
  line-height: 1.69;
  max-width: 1067px;
  margin: 0 auto;
}

.forwardTrigger, .backwardsTrigger {
  position: absolute;
}
.forwardTrigger {
  right: -74px;
}
.backwardsTrigger {
  left: -74px;
}

.elementSlider img {
  max-width: 100%;
}

.indexIndicator {
  display: flex;
  justify-content: center;
  gap: 12px;

  max-width: 80vw;
  margin: 25px auto;
  position: relative;
}
.indexIndicatorLabel {
  position: absolute;
  top: 2rem;
  transform: rotate(60deg);
  font-size: 10px;
  transition: all 200ms;
}

.indexIndicatorPoint {
  background: #d8d8d8;
  border-radius: 50%;
  height: 1rem;
  width: 1rem;
}

.indexIndicatorPoint:not(:nth-of-type(1)) {
  transition: all 300ms;
}
.indexIndicatorPoint.active {
  background: blue;
}
.indexIndicatorPoint.active > .indexIndicatorLabel{
  color: blue;
  font-weight: bold;
}
</style>