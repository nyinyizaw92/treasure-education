<template>
  <div class="w-1/5 bg-gray-50 h-screen py-4 text-gray-500 border-r-2 border-gray-100 add_overflow">
    <h1 class="text-center text-xl font-bold border-b-2 border-gray-100 pb-4">English</h1>
    <div class="flex flex-col">
      <div
        class="custom_flex cursor-pointer hover-change-color"
        @mouseover="showlistques = true"
        @click="showlistques = !showlistques"
        :class="{'active-change-color':showlistques}"
      >
        <p>Questions</p>
        <img
          class="w-4"
          src="/images/icons8-chevron-up-50.png"
          alt="chevron-up"
          v-if="showlistques"
        />
        <img class="w-4" src="/images/icons8-chevron-down-50.png" alt="chevron-up" v-else />
      </div>
      <div v-show="showlistques">
        <ul class="custom_flex flex_block">
          <li class="flex_box_list">
            <router-link to="/english/multiple-question">Multiple Choice</router-link>
          </li>
          <li class="flex_box_list">
            <router-link to="/english/single-question">Single Question</router-link>
          </li>
          <li class="flex_box_list">Text Question</li>
          <li class="border-b-0 flex_box_list">Fill in the blank</li>
        </ul>
      </div>
    </div>

    <div class="flex flex-col">
      <div
        class="custom_flex cursor-pointer hover-change-color"
        @mouseover="showlistread = true"
        @click="showlistread = !showlistread"
        :class="{'active-change-color':showlistread}"
      >
        <p>Readings</p>
        <img
          class="w-4"
          src="/images/icons8-chevron-up-50.png"
          alt="chevron-up"
          v-if="showlistread"
        />
        <img class="w-4" src="/images/icons8-chevron-down-50.png" alt="chevron-up" v-else />
      </div>
      <div v-show="showlistread">
        <ul class="custom_flex flex_block">
          <li class="flex_box_list">Reading One</li>
          <li class="flex_box_list">Reading Two</li>
          <li class="flex_box_list">Reading Three</li>
          <li class="border-b-0 flex_box_list">Reading Four</li>
        </ul>
      </div>
    </div>

    <div class="flex flex-col">
      <div
        class="custom_flex cursor-pointer hover-change-color"
        @mouseover="showlistlisten = true"
        @click="showlistlisten = !showlistlisten"
        :class="{'active-change-color':showlistlisten}"
      >
        <p>Listening</p>
        <img
          class="w-4"
          src="/images/icons8-chevron-up-50.png"
          alt="chevron-up"
          v-if="showlistlisten"
        />
        <img class="w-4" src="/images/icons8-chevron-down-50.png" alt="chevron-up" v-else />
      </div>
      <div v-show="showlistlisten">
        <ul class="custom_flex flex_block">
          <li class="flex_box_list">Listening One</li>
          <li class="flex_box_list">Listening Two</li>
          <li class="flex_box_list">Listening Three</li>
          <li class="border-b-0 flex_box_list">Listening Four</li>
        </ul>
      </div>
    </div>

    <div class="flex flex-col">
      <div
        class="custom_flex cursor-pointer hover-change-color"
        @mouseover="showlistgrammar = true"
        @click="showlistgrammar = !showlistgrammar"
        :class="{'active-change-color':showlistgrammar}"
      >
        <p>Grammar</p>
        <img
          class="w-4"
          src="/images/icons8-chevron-up-50.png"
          alt="chevron-up"
          v-if="showlistgrammar"
        />
        <img class="w-4" src="/images/icons8-chevron-down-50.png" alt="chevron-up" v-else />
      </div>
      <div v-show="showlistgrammar">
        <ul class="custom_flex flex_block">
          <li class="flex_box_list">Grammar One</li>
          <li class="flex_box_list">Grammar Two</li>
          <li class="flex_box_list">Grammar Three</li>
          <li class="border-b-0 flex_box_list">Grammar Four</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showlistques: false,
      showlistread: false,
      showlistlisten: false,
      showlistgrammar: false,
    };
  },
};
</script>