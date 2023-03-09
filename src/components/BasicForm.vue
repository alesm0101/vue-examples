<template>
  <div id="app">
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="firstname" id="firstname" />
      <input type="text" v-model="lastname" id="lastname" />
      <button :disabled="isDisabled">Generate</button>
    </form>
    <span id="output" v-if="!isDisabled">{{ outputMessage }}</span>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      firstname: "",
      lastname: "",
      outputMessage: "",
    };
  },
  methods: {
    onSubmit() {
      const ramdonId = Math.floor(Math.random() * 9) + 1;
      this.outputMessage =
        `${this.firstname}_${this.lastname}_${ramdonId}`.toLowerCase();
    },
  },
  computed: {
    isDisabled() {
      return !(this.firstname && this.lastname);
    },
  },
};
</script>
