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
  data() {
    return {
      projectList: [
        {
          idproject: 0,
          name: "News App",
          photo:
            "https://res.cloudinary.com/dcvolkyfb/image/upload/v1655367833/Project-Screenshot/Vue/newsapp_vue_jpmpk6.png",
          linkWeb: "https://vuetify-news-app-restu.netlify.app/",
          linkGithub: "https://github.com/Restu-Averian/news-app-vuetify",
          tools: ["Vue.js", "Axios"],
        },
        {
          idproject: 1,
          name: "E-Commerce Hp",
          photo:
            "https://res.cloudinary.com/dcvolkyfb/image/upload/v1655368140/Project-Screenshot/Vue/ecommerce_vue_gkw9rt.png",
          linkWeb: "https://restuap-mini-project-km-ecommerce-hp.netlify.app/",
          linkGithub: "https://github.com/Restu-Averian/simple-ecommerce-phone",
          tools: [
            "Vue.js",
            "Axios",
            "GraphQL Hasura",
            "Buefy",
            "Vuesax",
            "Iview",
          ],
        },
        {
          idproject: 2,
          name: "Pustaka Pribadi",
          photo:
            "https://res.cloudinary.com/dcvolkyfb/image/upload/v1655373065/Project-Screenshot/Vue/pustaka-pribadi-vue_jsx7zc.png",
          linkWeb: "https://pustaka-pribadimu.netlify.app/",
          linkGithub: "https://github.com/Restu-Averian/bookshelf-vue",
          tools: ["Vue.js", "PWA", "Axios", "Tailwind CSS"],
        },
      ],
    };
  },
  methods: {
    openWeb(link) {
      window.open(link, "_blank");
    },
  },
};
</script>

<style>
</style>