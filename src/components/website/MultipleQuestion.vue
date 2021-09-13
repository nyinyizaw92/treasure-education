<template>
  <div class="w-4/5 ml-20% h-full fixed overflow-y-scroll pb-20">
    <question-title title="Multiple Question Type" @questionNumber="questionNumber"></question-title>
    <hr class="p1-4 m1-4" />
    <example-card video-link="/videos/video.mp4" v-show="selectedValue==''"></example-card>
    <multiple-question-list v-show="selectedValue!=''"></multiple-question-list>
  </div>
</template>
<script>
import ExampleCard from "./ExampleCard.vue";
import MultipleQuestionList from "./MultipleQuestionList.vue";
import QuestionTitle from "./QuestionTitle.vue";
export default {
  components: { ExampleCard, MultipleQuestionList, QuestionTitle },
  data() {
    return {
      selectedValue: "",
    };
  },
  methods: {
    questionNumber(data) {
      this.selectedValue = data;
    },
  },
};
</script>