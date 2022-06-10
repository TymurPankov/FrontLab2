<template>
  <div class="register">
    <h1>Registration</h1>
    <p><h>Email: </h></p>
    <p><input type="email" name="email" v-model="user.email"/></p>
    <p><h>Name: </h></p>
    <p><input type="text" name="name" v-model="user.name"/></p>
    <p><h>Username: </h></p>
    <p><input type="text" name="username" v-model="user.username"/></p>
    <p><h>Date of birth:</h></p>
    <p><input type="date" name="date" v-model="user.date"/></p>
    <p><h>Password: </h></p>
    <p><input type="password" name="password" v-model="user.password"/></p>
    <p><h>Password Confirmation: </h></p>
    <p><input type="password" name="passwordConfirm" v-model="user.passwordConfirm"/></p>
    <button type="button" v-on:click="register()">Register</button>
  </div>
</template>

<script>
export default {
  name: "RegisterView",
  data() {
    return {
      user: {
        email: "",
        name: "",
        username: "",
        date: "",
        password: "",
      },
    };
  },
  methods: {
    register() {
      if (this.user.email === "" || this.user.name === "" || this.user.username === "" || this.user.date === "" || this.user.password === "") {
        alert("Noone line can`t be null");
      }
      else {
        this.$store.dispatch("ADD_USER", this.user);
        this.$router.push("/login");
      }
    },
  }, 
};
</script>