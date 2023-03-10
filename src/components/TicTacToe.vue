<template>
  <div id="app">
    <div class="message">
      <div v-if="!hasWinner && !isFinished" class="status">{{ status }}</div>
      <div class="winner" v-if="hasWinner">
        The player {{ player }} won the game!
      </div>
    </div>
    <div class="board-content">
      <div class="board">
        <template v-for="(square, i) in gameBoard" :key="i">
          <div class="game-row">
            <button
              v-for="(position, index) in square"
              :key="index"
              class="square"
              :class="{ empty: !disabledSquare(position) }"
              :data-before="player"
              @click="playerMove(position)"
              :disabled="disabledSquare(position)"
            >
              <span>{{ isUsed(position) }}</span>
            </button>
          </div>
        </template>
      </div>
    </div>
    <div class="reset">
      <button class="reset-btn" @click="resetBoard">Reset</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      playerOne: [] as Array<number>,
      playerTwo: [] as Array<number>,
      player: "x",
      gameBoard: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      winArray: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7],
      ],
    };
  },
  methods: {
    isUsed(value: number) {
      if (this.playerOne.includes(value)) {
        return "x";
      }
      if (this.playerTwo.includes(value)) {
        return "0";
      }
      return "";
    },
    playerMove(value: number) {
      if (this.player === "x") {
        this.playerOne = [...this.playerOne, value];
        if (!this.hasWinner) {
          this.player = "0";
        }
      } else {
        this.playerTwo = [...this.playerTwo, value];
        if (!this.hasWinner) {
          this.player = "x";
        }
      }
    },
    resetBoard() {
      this.playerOne = [];
      this.playerTwo = [];
      this.player = "x";
    },
    disabledSquare(position: number) {
      return this.isUsed(position) != "" || this.hasWinner;
    },
  },
  computed: {
    hasWinner(): boolean {
      let hasWin = false;
      if (
        this.playerOne.length + this.playerTwo.length > 4 &&
        !this.isFinished
      ) {
        const currentPlayerValues =
          this.player === "x" ? this.playerOne : this.playerTwo;
        this.winArray.forEach((square) => {
          const hasAll = square.every((n) => currentPlayerValues.includes(n));
          if (hasAll) {
            hasWin = true;
          }
        });
      }
      return hasWin;
    },
    status(): string {
      return `Next player: ${this.player}`;
    },
    isFinished(): boolean {
      return this.playerOne.length + this.playerTwo.length === 9;
    },
  },
});
</script>
<style>
.message {
  text-align: center;
  padding: 1rem;
}
.message .winner {
  color: green;
  font-weight: 600;
  text-transform: uppercase;
}
.reset {
  text-align: center;
}
.reset-btn {
  margin: 1rem;
  background-color: #3d4250;
  border: 0;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  color: #fff;
}
.reset-btn :hover {
  background-color: #3d4259;
}
.board-content {
  display: flex;
  justify-content: center;
}
.board-content .board .square {
  width: 90px;
  height: 90px;
  background-color: #78bec5;
  border: 0;
  margin: 1px;
  border-radius: 10px;
}
.board-content .board .square span {
  position: absolute;
  line-height: 0;
  font-size: 2rem;
  margin-left: -0.5rem;
}
.board-content .board .square.empty:hover:before {
  content: attr(data-before);
  position: absolute;
  line-height: 0;
  font-size: 2rem;
  margin-left: -0.5rem;
}
</style>
