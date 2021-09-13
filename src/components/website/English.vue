<template>
  <div class="flex flex-column border-t-2 border-gray-100">
    <english-side-bar></english-side-bar>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import EnglishSideBar from "./EnglishSideBar.vue";
export default {
  components: { EnglishSideBar },
};
</script>