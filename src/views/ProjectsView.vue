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
          <project-comp :projectList="projectList" @openWeb="openWeb" />
        </div>
      </transition>
      <transition enter-to-class="animated fadeIn">
        <div v-if="current == 'vue'" class="px-4">
          <project-comp :projectList="projectList" @openWeb="openWeb" />
        </div>
      </transition>
      <transition enter-to-class="animated fadeIn">
        <div v-if="current == 'nuxt'" class="px-4">
          <nuxt-projects-comp />
          <project-comp :projectList="projectList" @openWeb="openWeb" />
        </div>
      </transition>
      <transition enter-to-class="animated fadeIn">
        <div v-if="current == 'javascript'" class="px-4">
          <project-comp :projectList="projectList" @openWeb="openWeb" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import ProjectComp from "@/components/ProjectComp.vue";
export default {
  components: {
    ProjectComp,
  },
  data() {
    return {
      current: "react",
      projectList: null,
    };
  },
  methods: {
    changeProject(jenis) {
      this.current = jenis;
    },
    async fetchData() {
      let response;
      if (this.current == "react") {
        response = await fetch("react.json");
      } else if (this.current == "vue") {
        response = await fetch("vue.json");
      } else if (this.current == "javascript") {
        response = await fetch("vanillajavascript.json");
      } else if (this.current == "nuxt") {
        response = await fetch("nuxt.json");
      }
      let data = await response.json();
      this.projectList = data;
    },
    openWeb(link) {
      window.open(link, "_blank");
    },
  },
  mounted() {
    this.fetchData();
  },
  watch: {
    current(newVal) {
      this.current = newVal;
      this.fetchData();
    },
  },
};
</script>

<style>
</style>