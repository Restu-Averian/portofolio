<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-3">
    <div
      v-for="project in projectList"
      :key="project.idproject"
      class="
        bg-card-restu
        px-2
        pt-4
        pb-6
        rounded-md
        text-white
        flex
        space-y-5
        flex-col
      "
    >
      <div>
        <div class="overflow-hidden">
          <img
            :src="project.photo"
            alt=""
            class="hover:scale-110 transition-all duration-300"
          />
        </div>
        <div class="flex flex-wrap justify-center space-x-2">
          <div
            v-for="(tools, index) in project.tools"
            :key="index"
            class="bg-chip-restu px-2 py-1 mt-4 text-white text-xs rounded-full"
          >
            {{ tools }}
          </div>
        </div>
      </div>
      <h2 class="text-lg text-white">{{ project.name }}</h2>
      <div class="flex justify-evenly space-x-3 items-center">
        <button @click="openWeb(project.linkGithub)" class="btn secondary-btn">
          Visit Github
        </button>
        <button @click="openWeb(project.linkWeb)" class="btn primary-btn">
          Visit Webiste
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["projectList"],
  methods: {
    openWeb(page) {
      this.$emit("openWeb", page);
    },
  },
};
</script>

<style>
</style>