import EventEmitter from "events"

export const emitter = new EventEmitter()

const data = {
  board: [],
  playerIndex: 0,
  config: {
    mode: ""
  },
}

const checkmarks = {
  player: "X",
  enemy: "O"
}

function createEmptyBoard() {
  return Array(9).fill("")
}

function isEmptyAt(index) {
  return !data.board[index]
}

function getEmptyCells() {
  return data.board
    .map((value, i) => ({ value, i }))
    .filter(({ i }) => isEmptyAt(i))
    .map(({ i }) => i)
}

function isTie() {
  return getEmptyCells().length === 0
}

function calculateWinner() {
  const winLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const equal3 = (a, b, c) => {
    return !!a && a === b && a === c
  }

  const lineEqual = (indexes) => {
    const line = data.board.filter((_, i) => indexes.includes(i))
    return equal3(...line)
  }

  for (let i = 0; i < winLines.length; i++) {
    // const [a, b, c] = winLines[i]
    // if (equal3(data.board[a], data.board[b], data.board[c])) {
    //   return data.board[a]
    // }
    const line = winLines[i]
    if (lineEqual(line)) {
      return data.board[line[0]]
    }
  }
  return ""
}

function playerTurn(index) {
  data.board[index] = checkmarks.player
  forceBoardUpdate()
  return calculateWinner() === checkmarks.player
}

function generateRandomEnemyTurn() {
  const emptyIndexes = getEmptyCells()
  const randomIndex = Math.floor(Math.random() * emptyIndexes.length)
  const cellIndex = emptyIndexes[randomIndex]
  data.board[cellIndex] = checkmarks.enemy
  forceBoardUpdate()
}

function enemyTurn() {
  generateRandomEnemyTurn()
  return calculateWinner() === checkmarks.enemy
}

function pveClickHandler(index) {
  if (isEmptyAt(index)) {
    if (playerTurn(index)) {
      forceEnd("Player");
    }
    else if (enemyTurn()) {
      forceEnd("Enemy")
    }
    else if (isTie()) {
      forceTie()
    }
  }
}

function pvpClickHandler(index) {
  if (isEmptyAt(index)) {
    const value = Object.values(checkmarks)[data.playerIndex]
    data.playerIndex = (data.playerIndex + 1) % 2
    data.board[index] = value
    forceBoardUpdate()
    const winner = calculateWinner()
    if (winner) {
      forceEnd(winner)
    }
    else if (isTie()) {
      forceTie()
    }
  }
}

function clickAt(index) {
  const mode = data.config.mode
  if (mode === "pve") {
    pveClickHandler(index)
  }
  else if (mode === "pvp") {
    pvpClickHandler(index)
  }
}

function forceBoardUpdate() {
  emitter.emit("boardChanged", data.board)
}

function forceEnd(person) {
  emitter.emit("gameEnded", person)
}

function forceTie() {
  emitter.emit("gameEndedWithTie")
}

emitter.on("start", ({ mode }) => {
  data.config.mode = mode
  data.playerIndex = 0
  data.board = createEmptyBoard()
  forceBoardUpdate()
  emitter.emit("gameStarted")
})

emitter.on("clickAt", index => {
  clickAt(index)
})
