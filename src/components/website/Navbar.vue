<template>
  <header class="flex flex-row justify-between items-center px-2">
    <ul>
      <li>
        <router-link to="/" exact>
          <img src="/images/treasure.gif" class="w-16 h-16" alt="logo" />
        </router-link>
      </li>
    </ul>
    <div class="hidden-burger"></div>
    <ul class="flex flex-row justify-between h-16 py-4">
      <li class="mr-6" @click="scrollMeTo('aboutus')">
        <router-link to="/">About Us</router-link>
      </li>
      <li class="mr-6" @mouseover="activequiz = true" @mouseleave="activequiz = false">
        <router-link to="/">
          <div @mouseover="activequiz = true">Quiz</div>
        </router-link>
        <ul v-show="activequiz" class="active-quiz text-md">
          <li>
            <router-link to="/english">English</router-link>
          </li>
          <li>
            <router-link to="/mathematics">Mathematics</router-link>
          </li>
        </ul>
      </li>

      <li class="mr-6">
        <router-link to="/login" exact>Login</router-link>
      </li>
      <li>
        <router-link to="/register" exact>Register</router-link>
      </li>
    </ul>
  </header>
</template>
<script>
export default {
  data() {
    return {
      activequiz: false,
    };
  },

  methods: {
    scrollMeTo(refName) {
      var element = document.getElementById(refName);
      var top = element.offsetTop;
      window.history.pushState(null, null, "/about-us");
      window.scrollTo(0, top);
    },
  },
};
</script>