<template>
  <div class="signin">
    <form action="" class="form signin__form">
      <h2>登入 CHAT CLUB</h2>
      <div class="group">
        <label for="email" name="email" class="email">Email</label>
        <input type="email" id="email" placeholder="Please enter your email" />
      </div>
      <div class="group">
        <label
          for="user_password"
          autocomplete="off"
          name="user_password"
          class="user_password"
          >密碼</label
        >
        <input
          type="password"
          id="user_password"
          autocomplete="off"
          placeholder="Please enter your password"
        />
      </div>

      <div class="btn-group">
        <button class="btn" type="submit">signin</button>
        <button class="btn">Cancel</button>
        <router-link class="btn-link" :to="{ name: 'sign-up' }"
          >Do not have an account? Sign up here.</router-link
        >
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "Signin",
};
</script>

<style lang="scss" scoped>
@import "@/scss/abstracts/_signin.scss";
</style>
