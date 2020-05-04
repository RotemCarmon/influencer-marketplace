<template>
  <section >
    <span v-if="credentials.userType">Login as {{credentials.userType}}</span>
    <form  @submit.prevent="login" class="login-page-form flex column">
      <label>
        username:
        <input type="text" placeholder="username" v-model="credentials.username" />
      </label>
      <label>
        password:
        <input type="password" placeholder="password" v-model="credentials.password" />
      </label>
      <h4 class="validation" :class="{invalid: isInvalid}">Invalid user details</h4>
      <button class="btn" type="submit">Sign In</button>
    </form>
  </section>
</template>

<script>
import userService from "../services/user.service.js";

export default {
  name: "login-page",
  data() {
    return {
      credentials: {
        userType: 'brand',
        username: '',
        password: ''
      },
      isInvalid: false,
    };
  },
  methods: {
    async login() {
        let loggedInUser = await this.$store.dispatch({
          type: "login",
          credentials: this.credentials
        });
        if(loggedInUser){
          this.isInvalid = false;
          this.$router.push("/app");
        } else {
          this.isInvalid = true;
        }
    }
  }
};
</script>
