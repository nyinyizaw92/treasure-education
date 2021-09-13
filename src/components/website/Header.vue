<template>
  <div>
    <intersection-observer
      sentinal-name="sentinal-name"
      @on-intersection-element="onIntersectionElement"
    ></intersection-observer>
    <div class="banner_section">
      <h1 class="text-white text-4xl">Welcome To Treasure</h1>
      <img
        class="image_absolute transform rotate-45 left-10 top-12"
        src="/images/flask.png"
        alt="flask"
        :class="{
          'transition duration-500 opacity-50': isIntersectingElement,
          'transition delay-500 duration-500 opacity-0': !isIntersectingElement,
        }"
      />
      <img
        class="image_absolute left-80 top-40 w-14"
        src="/images/icons8-pencil-100.png"
        alt="pencil"
        :class="{
          'transition duration-1000 opacity-50': isIntersectingElement,
          'transition delay-500 duration-1000 opacity-0': !isIntersectingElement,
        }"
      />
      <img
        class="image_absolute w-8 left-80 top-6 transform rotate-90"
        src="/images/icons8-percentage-32.png"
        alt="percentage"
        :class="{
          'transition duration-2000 opacity-50': isIntersectingElement,
          'transition delay-500 duration-2000 opacity-0': !isIntersectingElement,
        }"
      />
      <img
        class="image_absolute right-20 top-40"
        src="/images/icons8-report-card-100.png"
        alt="report"
        :class="{
          'transition duration-500 opacity-50': isIntersectingElement,
          'transition delay-500 duration-500 opacity-0': !isIntersectingElement,
        }"
      />
      <img
        src="/images/icons8-question-mark-50.png"
        alt="question_mark"
        class="image_absolute right-1/3 top-40 w-10 transform rotate-180"
        :class="{
          'transition duration-2500 opacity-50': isIntersectingElement,
          'transition delay-500 duration-2500 opacity-0': !isIntersectingElement,
        }"
      />
      <img
        class="image_absolute right-60 top-10 transform -rotate-45"
        src="/images/keys.png"
        alt="key"
        :class="{
          'transition duration-500 opacity-50': isIntersectingElement,
          'transition delay-500 duration-500 opacity-0': !isIntersectingElement,
        }"
      />
      <img
        class="image_absolute left-100 top-10"
        src="/images/lightbulb.png"
        alt="lightbulb"
        :class="{
          'transition duration-1000 opacity-50': isIntersectingElement,
          'transition delay-500 duration-1000 opacity-0': !isIntersectingElement,
        }"
      />
    </div>

    <section-one></section-one>
    <about-us></about-us>

    <learn-more-about></learn-more-about>

    <footer-section></footer-section>
  </div>
</template>
<script>
import SectionOne from "./SectionOne.vue";
import AboutUs from "./AboutUs.vue";
import LearnMoreAbout from "./LearnMoreAbout.vue";
import FooterSection from "./Footer.vue";
import IntersectionObserver from "../IntersectionObserver.vue";
export default {
  components: {
    SectionOne,
    AboutUs,
    LearnMoreAbout,
    FooterSection,
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