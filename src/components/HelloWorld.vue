<template>
  <div class="container">
    {{ msg }}
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "helloworld",
  setup(props) {
    let msg = ref("helloworld");
    return {
      msg,
    };
  },
});
</script>
<style></style>
