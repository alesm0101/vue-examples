<template>
  <div class="test-view">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />  -->
    <Test />
    <PropsPlayground :users="users" :id="id" :admin="admin" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Test from "@/components/Test.vue"; // @ is an alias to /src
import PropsPlayground, { Admin } from "@/components/PropsPlayground.vue";
export default defineComponent({
  name: "TestView",
  components: {
    Test,
    PropsPlayground,
  },
  data() {
    return {
      users: [
        { id: 1, name: "John" },
        { id: 2, name: "Smith" },
      ],
      id: "1",
      admin: new Admin("Super", 1), // ts complains if I provided wrong type to the class but Vue just check the class instance (no params type)
    };
  },
});
</script>
