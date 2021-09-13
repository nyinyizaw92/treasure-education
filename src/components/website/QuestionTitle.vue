<template>
  <div class="flex flex-row justify-between items-center">
    <h1 class="m-4 text-xl font-bold text-gray-500">{{title}}</h1>
    <div class="flex flex-column mr-4">
      <div class="flex flex-column">
        <p>Select the number of questions</p>
        <select
          @change="selectNo($event)"
          name
          id
          class="mx-4 w-20 bg-transparent border border-gray-300 rounded-2 text-gray-500 cursor-pointer outline-none"
        >
          <option value>Select</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </div>
      <div class="flex flex-column">
        <p class="mr-2">Difficulity Level</p>
        <div class="text-gray-500 flex items-center">
          <label for="easy" class="mr-2">easy</label>
          <input
            type="radio"
            value="easy"
            name="difficult_level"
            id="easy"
            @change="levelSelect($event)"
          />
        </div>
        <div class="text-gray-500 mx-4 flex items-center">
          <label for="medium" class="mr-2">medium</label>
          <input
            type="radio"
            value="medium"
            name="difficult_level"
            id="medium"
            @change="levelSelect($event)"
          />
        </div>
        <div class="text-gray-500 flex items-center">
          <label for="hard" class="mr-2">hard</label>
          <input
            type="radio"
            value="hard"
            name="difficult_level"
            id="hard"
            @change="levelSelect($event)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedValue: "",
      difficulLevel: "",
    };
  },
  props: {
    title: String,
  },
  methods: {
    selectNo(event) {
      this.$emit("questionNumber", event.target.value);
      this.selectedValue = event.target.value;
      window.history.pushState(
        null,
        null,
        "?number=" + this.selectedValue + "&level=" + this.difficulLevel
      );
    },
    levelSelect(event) {
      this.difficulLevel = event.target.value;
      window.history.pushState(
        null,
        null,
        "?number=" + this.selectedValue + "&level=" + this.difficulLevel
      );
    },
  },
};
</script>