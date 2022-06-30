<template>
  <div class="container mx-auto flex items-center justify-center">
    <div class="px-2 lg:pb-32 pb-24">
      <h1 class="text-white font-semibold text-2xl lg:mb-16 my-10">Projects</h1>
      <div
        class="
          flex
          text-white text-sm
          my-5
          w-[300px]
          sm:w-full
          overflow-x-scroll overflow-y-hidden
          whitespace-nowrap
        "
      >
        <div
          :class="`${
            current === 'react' ? 'border-opacity-100' : 'border-opacity-0'
          } px-8 pb-4 cursor-pointer duration-300 transition-all border-b-2 border-white`"
          @click="changeProject('react')"
        >
          React.js
        </div>
        <div
          :class="`${
            current === 'vue' ? 'border-opacity-100' : 'border-opacity-0'
          } px-8 pb-4 cursor-pointer duration-300 transition-all border-b-2 border-white`"
          @click="changeProject('vue')"
        >
          Vue.js
        </div>
        <div
          :class="`${
            current === 'nuxt' ? 'border-opacity-100' : 'border-opacity-0'
          } px-8 pb-4 cursor-pointer duration-300 transition-all border-b-2 border-white`"
          @click="changeProject('nuxt')"
        >
          Nuxt.js
        </div>
        <div
          :class="`${
            current === 'javascript' ? 'border-opacity-100' : 'border-opacity-0'
          } px-8 pb-4 cursor-pointer duration-300 transition-all border-b-2 border-white`"
          @click="changeProject('javascript')"
        >
          Vanilla Javascript
        </div>
      </div>
      <transition enter-to-class="animated fadeIn">
        <div v-if="current == 'react'" class="px-4">
          <react-projects-comp />
        </div>
      </transition>
      <transition enter-to-class="animated fadeIn">
        <div v-if="current == 'vue'" class="px-4">
          <vue-projects-comp />
        </div>
      </transition>
      <transition enter-to-class="animated fadeIn">
        <div v-if="current == 'nuxt'" class="px-4">
          <nuxt-projects-comp />
        </div>
      </transition>
      <transition enter-to-class="animated fadeIn">
        <div v-if="current == 'javascript'" class="px-4">
          <javascript-projects-comp />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import NuxtProjectsComp from "@/components/NuxtProjectsComp.vue";
import VueProjectsComp from "../components/VueProjectsComp.vue";
import ReactProjectsComp from "@/components/ReactProjectsComp.vue";
import JavascriptProjectsComp from "@/components/JavascriptProjectsComp.vue";
export default {
  components: {
    VueProjectsComp,
    NuxtProjectsComp,
    ReactProjectsComp,
    JavascriptProjectsComp,
  },
  data() {
    return {
      current: "react",
    };
  },
  methods: {
    changeProject(jenis) {
      this.current = jenis;
    },
  },
};
</script>

<style>
</style>