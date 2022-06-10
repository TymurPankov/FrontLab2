<template>
    <div id="app">
        <div v-if="!this.$store.state.authUser" id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
           <router-link to="/login">Login</router-link> |
            <router-link to="/reg">Registration</router-link>
        </div>
        <div v-else id="nav">
            <router-link to="/game">Tic-Tac-Toe</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/profile">Profile</router-link> |
            <button v-on:click="logout()">Logout</button>
        </div>
        <router-view />
    </div>
</template>

<script>
  export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$store.dispatch("LOGOUT_USER");
      this.$router.push("/");
    },
  },
  beforeMount() {
    const users = require("./assets/admin.json");
    users.forEach((user) => this.$store.dispatch("ADD_USER", user));
  },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    display: flex;
    justify-content: center;
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
    padding: 0 5px;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
