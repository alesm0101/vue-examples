<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Test />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Test from "@/components/Test.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    Test,
  },
});
</script>
