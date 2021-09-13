<template>
  <div class="flex flex-col w-4/5 ml-20% h-full fixed overflow-y-scroll pb-20 px-8">
    <h1
      class="text-center text-xl font-bold text-gray-500 my-2"
    >Learing English and Test Your Knowledge</h1>
    <!-- multiple question -->
    <contact
      class="flex-row"
      image="paper.png"
      image1="multi.png"
      header-text="Multiple Choice Question"
      body-text="Multiple choice (MC), objective response, or MCQ (for Multiple Choice Question) is a form of an objective assessment in which respondents are asked to select only correct answers from the choices offered as a list."
    ></contact>
    <!-- about reading -->
    <contact-part
      image="reading.png"
      body-text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, alias molestiae. A natus consequatur saepe ducimus voluptates corrupti similique hic ullam reprehenderit itaque possimus et, vero eligendi aspernatur fugit aut?"
    ></contact-part>

    <!-- single question -->
    <contact
      class="flex-row-reverse"
      image="paper.png"
      image1="multi.png"
      header-text="Single Question"
      body-text="Multiple choice (MC), objective response, or MCQ (for Multiple Choice Question) is a form of an objective assessment in which respondents are asked to select only correct answers from the choices offered as a list."
    ></contact>

    <!-- text question -->
    <contact
      class="flex-row"
      image="paper.png"
      image1="multi.png"
      header-text="Text Question"
      body-text="Multiple choice (MC), objective response, or MCQ (for Multiple Choice Question) is a form of an objective assessment in which respondents are asked to select only correct answers from the choices offered as a list."
    ></contact>

    <!-- about listening -->
    <contact-part
      image="listening.png"
      body-text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, alias molestiae. A natus consequatur saepe ducimus voluptates corrupti similique hic ullam reprehenderit itaque possimus et, vero eligendi aspernatur fugit aut?"
    ></contact-part>
    <!-- fill in blank question -->
    <contact
      class="flex-row-reverse"
      image="paper.png"
      image1="multi.png"
      header-text="Fill in the blank"
      body-text="Multiple choice (MC), objective response, or MCQ (for Multiple Choice Question) is a form of an objective assessment in which respondents are asked to select only correct answers from the choices offered as a list."
    ></contact>

    <!-- about grammar -->
    <contact-part
      image="grammar.png"
      body-text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, alias molestiae. A natus consequatur saepe ducimus voluptates corrupti similique hic ullam reprehenderit itaque possimus et, vero eligendi aspernatur fugit aut?"
    ></contact-part>
  </div>
</template>

<script>
import Contact from "./Contact.vue";
import ContactPart from "./ContactPart.vue";
export default {
  components: {
    Contact,
    ContactPart,
  },
};
</script>