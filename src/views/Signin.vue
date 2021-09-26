<template>
  <div class="signin">
    <form action="" class="form signin__form" @submit.stop.prevent="signin">
      <h2>登入 CHAT CLUB</h2>
      <div class="group">
        <label for="email" name="email" class="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Please enter your email"
          v-model="signinUserEmail"
        />
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
          v-model="signinUserPassword"
        />
      </div>

      <div class="btn-group">
        <button class="btn" type="submit">signin</button>
        <button class="btn" @click.stop.prevent="cancel">Cancel</button>
        <router-link class="btn-link" :to="{ name: 'sign-up' }"
          >Do not have an account? Sign up here.</router-link
        >
      </div>
    </form>
  </div>
</template>
<script>
// import vue and firebase config and services
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import "@/config/db.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Toast } from "@/utils/helpers.js";

// some variables
// bind variables with vue
// get email and password what are input by user
// install sweet alert, create helper to config toast feature of sweet alert
// import Toast from helper
// bind signin action function with the signin form of vue
// address signin action function to check email and password with firebase authentication
// if email and password pass firebase authentication, re-direct to home page
// if email and password fail firebase authentication, pop up warning by sweet alert
export default {
  name: "Signin",
  setup() {
    const signinUserEmail = ref("");
    const signinUserPassword = ref("");

    const auth = getAuth();
    const router = useRouter();

    const signin = async () => {
      try {
        if (!signinUserEmail.value || !signinUserPassword.value) return;
        const userCredential = await signInWithEmailAndPassword(
          auth,
          signinUserEmail.value,
          signinUserPassword.value
        );
        if (!userCredential) throw new Error("無法登入帳號，請稍後再試");
        Toast.fire({
          icon: "success",
          title: "登入成功",
        });
        router.push({ name: "home" });
      } catch (err) {
        // todo handle firebase response message for error
        Toast.fire({
          icon: "warning",
          title: "無法登入，請輸入正確帳號密碼",
        });
      }
    };

    // clean up input value
    const cancel = () => {
      [signinUserEmail.value, signinUserPassword.value] = ["", ""];
    };

    return { signinUserEmail, signinUserPassword, signin, cancel };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/abstracts/_signin.scss";
</style>
