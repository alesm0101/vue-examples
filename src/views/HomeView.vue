<template>
  <div class="home">
    <TicTacToe />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TicTacToe from "@/components/TicTacToe.vue"; // @ is an alias to /src
export default defineComponent({
  name: "HomeView",
  components: {
    TicTacToe,
  },
});
</script>
