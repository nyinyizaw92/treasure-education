<template>
  <div class="text-center width-full m-0 m-auto">
    <h3
      class="text-gray-500 text-lg my-2"
    >Select number of questions and choose difficulity level that you want to anser</h3>

    <video class="w-4/5 m-0 m-auto" :src="videoLink" controls>
      <source :src="videoLink" type="video/mp4" />
      <!-- <source :src="'/vidoes/'+videoLink+'.ogg'" type="video/ogg" />Your browser does not support the video tag. -->
    </video>
  </div>
</template>
<script>
export default {
  props: {
    videoLink: String,
  },
};
</script>