<template>
  <div>ROOT Page</div>
  <Helloworld></Helloworld>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Helloworld from "./components/HelloWorld.vue";
export default defineComponent({
  name: "APP",
  setup() {},
  components: {
    Helloworld,
  },
});
</script>
<style>
div {
  color: black;
  font-size: 30px;
}
</style>
