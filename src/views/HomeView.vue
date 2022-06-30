<template>
  <div class="lg:my-28 my-10 flex items-center justify-center">
    <home-comp />
  </div>
</template>

<script>
import HomeComp from "@/components/HomeComp.vue";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: { HomeComp },
};
</script>
