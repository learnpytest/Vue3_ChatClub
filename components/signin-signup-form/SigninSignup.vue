<template>
  <div class="main">
    <div class="signup container">
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
@import url("https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i");

.container {
  width: 600px;
  height: 650px;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid #fff;
  border-radius: 10px;
  box-shadow: 0 0 60px #000;
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
}

//common form style for signin and signup use
.form {
  width: 70%;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: var(--white);
  & h2 {
    margin-bottom: 1em;
  }
  & .group {
    margin-bottom: 1em;
  }
  & .group label {
    line-height: 2;
  }
  & .group input {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    width: 100%;
    line-height: 2rem;
    border: 2px solid var(--grey-5);
    border-radius: 5px;
    text-indent: 1em;
    &:focus {
      outline: none;
    }
  }
  & .btn-group {
    font-size: 0;
    margin-top: 3rem;
  }
  & .btn-group .btn {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 1rem;
    border-radius: 5px;
    border: none;
    background-color: var(--blue-1);
    width: 200px;
    padding: 0.7em 0;
    margin-bottom: 3rem;
    color: var(--white);
    cursor: pointer;
  }
  .btn + .btn {
    margin-left: 15px;
  }
  & .btn-group .btn-link {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 1rem;
    color: var(--white);
  }
}
</style>
