<template>
  <header id="header">
    <div fluid class="header__row">
      <div>
        <div
          ref="tempFocusElement"
          data-testid="tempFocusElement"
          style="background-color: red; height: 20px"
          tabindex="-1"
        ></div>
        <div
          cols="12"
          ref="focusableItem"
          data-testid="focusableItem"
          tabindex="-1"
          style="background-color: green; height: 20px"
        >
          <img
            v-if="surveyLogo"
            :alt="surveyLogo.imageAltText"
            :src="surveyLogo.imageSrc"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheHeader",
  data() {
    return {
      surveyLogo: {
        imageAltText: "",
        imageSrc: "",
      },
    };
  },
  methods: {
    setFocus() {
      const itemToTempFocus = this.$refs.tempFocusElement as HTMLElement;
      const itemToFocus = this.$refs.focusableItem as HTMLElement;
      // if (itemToTempFocus != null) {
      //   itemToTempFocus.setAttribute("tabindex", "-1");
      // }
      if (itemToTempFocus != null) {
        itemToTempFocus.focus();
      }

      setTimeout(() => {
        if (itemToFocus) {
          itemToFocus.focus();
        }
      }, 500);
    },
  },
  mounted(): void {
    // this.$nextTick is not necesary here but is for test purpose
    this.$nextTick(() => {
      this.setFocus();
    });
  },
});
</script>
