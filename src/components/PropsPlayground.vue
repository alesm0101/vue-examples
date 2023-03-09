<template>
  <div>
    <h2>{{ title }}</h2>
    <div v-for="user in users" :key="user.id">
      <p>{{ user.name }}</p>
    </div>
    <p>{{ selectedUser.name }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export interface User {
  name: string;
  id: number | string;
}
export class Admin {
  name;
  id;
  constructor(name: string, id: number | string) {
    this.id = id;
    this.name = name;
  }
}

export default defineComponent({
  name: "TheHeader",
  props: {
    admin: {
      type: Admin, // class
      required: true,
    },
    users: {
      type: Array as () => Array<User>, // or just 'Array' without interfaces (casting the object is just for ts, there is not js/vue validation here)
      default: () => [],
      validator: (userArray: Array<User>) => {
        // Unique id
        // const filteredArray = userArray.filter((item, index) => {
        //   console.log(item, index);
        //   return userArray.indexOf(item) == index; // if match the index
        // });
        return userArray.every((user) => "id" in user && "name" in user);
      },
    },
    selectedUser: {
      type: Object, // Object as () => Person
      default: () => ({
        id: -1,
        name: "New user",
      }),
    },
    id: {
      type: [Number, String],
      required: true,
      validator: (id) => {
        // only support integer as Id
        if (typeof id === "string") {
          return Number.isInteger(Number(id));
          // return !isNaN(parseFloat(id)); // admit comma
        } else {
          return Number.isInteger(id);
        }
      },
    },
    title: {
      type: String,
      default: "User list",
    },
    // pending ENUM
    // pending check compositon api validation
    // check unit test force array error
  },
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
    this.$nextTick(() => {
      this.setFocus();
    });
  },
});
</script>
