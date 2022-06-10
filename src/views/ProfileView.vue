<template>
  <div class="profile">
    <h1>User Profile</h1>
    <table align="center">
      <tbody>
        <tr>
          <td>Email:</td>
          <td><input type="email" name="email" v-model="user.email"/></td>
        </tr>
        <tr>
          <td>Username:</td>
          <td><input type="text" name="username" v-model="user.username"/></td>
        </tr>
        <tr>
          <td>Name:</td>
          <td><input type="text" name="name" v-model="user.name"/></td>
        </tr>
        <tr>
          <td>Date:</td>
          <td><input type="date" name="date" v-model="user.date"/></td>
        </tr>
        <tr>
          <td>Password:</td>
          <td><input type="password" name="password" v-model="user.password"/></td>
        </tr>
      </tbody>
    </table>
    <button type="button" id="update" v-on:click="update()">Update Profile</button>
  </div>
</template>

<script>
export default {
    name: "ProfileView",
    data() {
        return {
            user: {
                email: "",
                username: "",
                name: "",
                date: "",
                password: ""
            }
        }
    },

    beforeMount() {
        this.user = Object.assign({}, this.$store.state.authUser);
    },

    methods: {
        update() {
            if(this.user.email !== "" && this.user.username !== "" && this.user.name !== "" && this.user.date !== "" && this.user.password !== "") {
                this.$store.dispatch("UPDATE_USER", this.user);
                alert("Profile info updated");
            }
            else {
                alert("Fill all gaps");
            }
        }
    }
}
</script>

