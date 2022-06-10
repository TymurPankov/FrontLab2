<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Tic-Tac-Toe App"/>
    <h3 v-if="!this.$store.state.authUser">You need log in to play a game!</h3>
    <h3 v-if="this.$store.state.authUser">You can play a game, just choose Tic-Tac-Toe page!</h3>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
