<template>
  <div class="flex flex-col items-center my-4 bg-purple-200">
    <img class="w-60" :src="'/images/'+image" :alt="image" />
    <p class="text-gray-700 text-center leading-7 text-md my-2">{{bodyText}}</p>
  </div>
</template>
<script>
export default {
  props: {
    image: String,
    bodyText: String,
  },
};
</script>