<template>
  <div>
    <h1>Tic-Tac-Toe</h1>
    <h1 v-if="isGameEnded && winner!=='Tie'">Winner: {{ winner }}</h1>
    <h1 v-else-if="isGameEnded && winner==='Tie'">Tie</h1>
    <div v-for="(mode, index) in modes" :key="index">
    <input type="radio" :value="mode" :id="mode" v-model="selectedMode">
    <label :for="mode">{{ mode }}</label>
    </div>
    <button @click="start">Start</button>
  </div>

  <div class="board">
    <button
      v-for="(value, index) in board"
      :key="index"
      @click="clickAt(index)"
    >{{ value }}</button>
  </div>
</template>

<script>
import { emitter } from "../board"

export default {
  beforeMount() {
    return {
      modes: ["pve", "pvp"],
      selectedMode: "pve",
      isGameEnded: false,
      isGameStarted: false,
      winner: "pla",
      board: [],
    }
  },
  
  data() {
    return {
      modes: ["pve", "pvp"],
      selectedMode: "pve",
      isGameEnded: false,
      isGameStarted: false,
      winner: "pla",
      board: [],
    }
  },

  created() {
    emitter.on("gameStarted", () => {
      this.isGameStarted = true
      this.isGameEnded = false
      this.winner = ""
    })

    emitter.on("boardChanged", board => {
      this.board = [...board]
    })

    emitter.on("gameEnded", person => {
      this.isGameEnded = true
      this.winner = person
    })

    emitter.on("gameEndedWithTie", () => {
      this.isGameEnded = true
      this.winner = "Tie"
    })
  },
  methods: {
    clickAt(index) {
      if (!this.isGameStarted) return
      if (this.isGameEnded) return
      emitter.emit("clickAt", index)
    },
    start() {
      emitter.emit("start", {
        mode: this.selectedMode
      })
      if (this.selectedMode == 'pve') alert("Choosed mode: pve")
      else if (this.selectedMode == 'pvp') alert("Choosed mode: pvp")
    },
  }
}
</script>

<style>
:root {
  --square-size: 100px;
}

.board {
  display: grid;
  grid-template-columns: repeat(3, var(--square-size));
  grid-template-rows: repeat(3, var(--square-size));
  justify-content: center;
}
</style>