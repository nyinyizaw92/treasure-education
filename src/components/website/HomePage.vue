<template>
  <div>
    <nav-bar></nav-bar>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import NavBar from "./Navbar.vue";
export default {
  components: { NavBar },
};
</script>