<template>
  <div class="login">
    <h1>Login</h1>
    <p>
      <h>Username: </h>
      <input type="text" name="username" v-model="user.username"/>
    </p>
    <p>
      <h>Password: </h>
    <input type="password" name="password" v-model="user.password"/>
    </p>
    <p>
    <button type="button" v-on:click="login()">Login</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      if (this.user.username !== "" && this.user.password !== "") {
        this.$store.dispatch("LOGIN_USER", this.user);
        this.$router.push("/");
      } 
      else {
        alert("Fields can`t be null");
      }
    },
  },
};
</script>