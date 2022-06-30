<template>
  <div class="container mx-auto flex items-center justify-center">
    <div class="pt-0 px-2 lg:pb-32 pb-24">
      <h1 class="text-white font-semibold text-2xl lg:mb-16 my-10">
        Ceritificates
      </h1>

      <certif-comp />
    </div>
  </div>
</template>

<script>
import CertifComp from "@/components/CertifComp.vue";
export default {
  components: {
    CertifComp,
  },
};
</script>

<style>
</style>