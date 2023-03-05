<template>
  <div class="elementSlider">
    <div class="container">

      <div class="elementSliderAndTriggers">
        <div
          v-if="elements[currentIndex].id !== 0 "
          class="backwardsTrigger"
          @click="handleBackCLick"
        >
          <span class="touchable">
            <img src="../assets/icon_arrow_dropdown.png" class="backIcon"/>
          </span>
        </div>
        <div
          v-if="elements[currentIndex].id !== elements.length-1"
          class="forwardTrigger"
          @click="handleForwardClick"
        >
          <span class="touchable">
            <img src="../assets/icon_arrow_dropdown.png" class="forwardIcon"/>
          </span>
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

<script >
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
        const setCurrentIndex = (index) => {
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
  padding-bottom: 2rem;
}

.container {
  margin: 0 auto;
  padding: 2rem;
  /* for them forwadr-/backward-arrows */
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
  top: 50%;
}
.forwardTrigger {
  right: -74px;
}
.backwardsTrigger {
  left: -74px;
}

.forwardIcon, .backIcon {
  height: 20px;
  width: 20px;
}
.backIcon {
  transform: rotate(90deg)
}
.forwardIcon {
  transform: rotate(-90deg)
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
  white-space: nowrap;
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


@media only screen and (max-width: 600px) {

  .container {
    padding-top: 0;
  }

  .elementSliderAndTriggers {
    display: flex;
    gap: var(--global-spacing-l);

  }
  .forwardTrigger, .backwardsTrigger {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: var(--global-spacing-s);
    border: 1px solid grey;
    width: 100%;
    position: unset;
    margin-bottom: var(--global-spacing-m)
  }
  .forwardTrigger {
    right: 0;
  }
  .backwardsTrigger {
    left: 0;
  }
}
</style>