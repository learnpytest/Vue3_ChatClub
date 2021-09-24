<template>
  <div class="main">
    <div class="signup">
      <form action="" class="form signup__form">
        <h2>註冊 CHAT CLUB</h2>
        <div class="group">
          <label for="user_nickname" name="user_nickname" class="user_nickname"
            >暱稱</label
          >
          <input
            type="text"
            id="user_id"
            placeholder="Please enter your nickname"
          />
        </div>
        <div class="group">
          <label for="email" name="email" class="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Please enter your email"
          />
        </div>
        <div class="group">
          <label for="user_password" name="user_password" class="user_password"
            >密碼</label
          >
          <input
            type="password"
            id="user_password"
            placeholder="Chat Club password should be at least 6 characters"
            autocomplete="off"
          />
        </div>
        <div class="group">
          <label
            for="user_password--check"
            name="user_password--check"
            class="user_password--check"
            >確認密碼</label
          >
          <input
            type="password"
            id="user_password--check"
            placeholder="Please enter your password again"
            autocomplete="off"
          />
        </div>
        <div class="btn-group">
          <button class="btn" type="submit">signup</button>
          <button class="btn">Cancel</button>
          <router-link :to="{ path: '/' }" class="btn-link"
            >Go back Sign-in page</router-link
          >
        </div>
      </form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/scss/abstracts/_signup.scss";
</style>
