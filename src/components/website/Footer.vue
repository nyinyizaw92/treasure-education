<template>
  <div class="footer-section flex flex-row justify-around items-center pb-8 pt-8 text-white">
    <div>
      <div class="footer-flex">
        <img class="footer-image" src="/images/icons8-info-50.png" alt="about_us" />
        <span>
          <router-link to="/">About Us</router-link>
        </span>
      </div>
      <div class="footer-flex">
        <img class="footer-image" src="/images/icons8-ask-question-50.png" alt="quiz" />
        <span>
          <router-link to="/">Quiz</router-link>
        </span>
      </div>
    </div>
    <div>
      <div class="footer-flex">
        <img class="footer-image" src="/images/icons8-lock-50.png" alt="register" />
        <span>
          <router-link to="/">Login</router-link>
        </span>
      </div>
      <div class="footer-flex">
        <img class="footer-image" src="/images/icons8-registration-50.png" alt="login" />
        <span>
          <router-link to="/register">Register</router-link>
        </span>
      </div>
    </div>
    <div class="w-60">
      <form>
        <h3>Comment Us</h3>
        <div>
          <textarea
            class="w-full resize-none h-20 text-black rounded border-0 outline-none p-2 text-sm"
            name="comment"
            placeholder="tell us what you want......."
          ></textarea>
        </div>
        <button
          class="w-full bg-white text-black font-sm rounded p-0.5 bg-gray-300 hover:bg-gray-500 hover:text-white"
        >Submit</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {};
</script>