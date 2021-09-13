<template>
  <div class="flex justify-between items-center">
    <intersection-observer
      sentinal-name="sentinal-name"
      @on-intersection-element="onIntersectionElement"
      class="absolute-important"
    ></intersection-observer>
    <div class="flex flex-row flex-1 mt-8 mr-8 p-8 rounded border-gray-200 border">
      <div class="w-40">
        <img :src="'/images/'+image" alt="paper" />
      </div>
      <div>
        <img
          class="w-80"
          :src="'/images/'+image1"
          alt="multi"
          :class="{
          'transition opacity-100 duration-700': isIntersectingElement,
          'transition opacity-0': !isIntersectingElement,
        }"
        />
      </div>
    </div>
    <div class="flex-1 text-gray-500">
      <h3 class="text-lg mb-2">{{headerText}}</h3>
      <p class="text-md leading-7">{{bodyText}}</p>
    </div>
  </div>
</template>
<script>
import IntersectionObserver from "../IntersectionObserver.vue";
export default {
  components: {
    IntersectionObserver,
  },
  props: {
    image: String,
    image1: String,
    headerText: String,
    bodyText: String,
  },
  data() {
    return {
      isIntersectingElement: false,
      //   isIntersectingElement1: false,
      //   isIntersectingElement2: false,
      //   isIntersectingElement3: false,
    };
  },
  methods: {
    onIntersectionElement(value) {
      this.isIntersectingElement = value;
    },

    // onIntersectionElement1(value) {
    //   this.isIntersectingElement1 = value;
    // },
    // onIntersectionElement2(value) {
    //   this.isIntersectingElement2 = value;
    // },

    // onIntersectionElement3(value) {
    //   this.isIntersectingElement3 = value;
    // },
  },
};
</script>