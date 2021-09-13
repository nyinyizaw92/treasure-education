<template>
  <div class="text-center p-6 overflow-hidden">
    <h1 class="text-2xl mb-2 w-full">Learn more about quizz</h1>

    <div class="flex flex-row justify-between items-center pl-24 pr-24">
      <intersection-observer
        sentinal-name="sentinal-name"
        @on-intersection-element="onIntersectionElement"
        class="absolute-important"
      ></intersection-observer>
      <div
        class="w-1/2 p-8"
        :class="{
          'transform translate-x-0 transition opacity-100 duration-300': isIntersectingElement,
          'transform -translate-x-60 transition opacity-0': !isIntersectingElement,
        }"
      >
        <img src="/images/backschool.png" alt="knowledge" />
        <p class="m-2">School Quiz</p>
        <button class="learn-more-btn bg-gray-500 hover:bg-black">Learn More</button>
      </div>

      <div
        class="w-1/2 p-8"
        :class="{
          'transform translate-x-0 transition opacity-100 duration-300': isIntersectingElement,
          'transform translate-x-60 transition opacity-0': !isIntersectingElement,
        }"
      >
        <img class="w-80" src="/images/knowledge.jpg" alt="school" />
        <p class="m-2">Knowledge Quiz</p>
        <button class="learn-more-btn bg-gray-500 hover:bg-black">Learn More</button>
      </div>
    </div>
  </div>
</template>
<script>
import IntersectionObserver from "../IntersectionObserver.vue";
export default {
  components: {
    IntersectionObserver,
  },

  data() {
    return {
      isIntersectingElement: false,
    };
  },
  methods: {
    onIntersectionElement(value) {
      this.isIntersectingElement = value;
    },
  },
};
</script>