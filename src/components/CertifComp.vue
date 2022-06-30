<template>
  <div class="flex flex-col lg:space-y-16 space-y-10">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-3">
      <div
        v-for="certif in certiftList"
        :key="certif.idcertif"
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
              :src="certif.photo"
              alt=""
              class="hover:scale-110 transition-all duration-300"
            />
          </div>
          <div class="flex flex-wrap justify-center space-x-2">
            <div
              v-for="(tech, index) in certif.tech"
              :key="index"
              class="bg-chip-restu px-2 py-1 mt-4 text-xs rounded-full"
            >
              {{ tech }}
            </div>
          </div>
        </div>
        <div>
          <h2 class="text-lg">{{ certif.name }}</h2>
          <p class="text-sm opacity-80">{{ certif.GetTime }}</p>
        </div>
        <div class="flex justify-evenly space-x-3 items-center">
          <button @click="openWeb(certif.linkWeb)" class="btn secondary-btn">
            Show Certificate
          </button>
        </div>
      </div>
    </div>
    <button
      class="btn primary-btn lg:w-1/3 mx-auto lg:py-5 lg:text-xl"
      @click="
        openWeb(
          'https://www.linkedin.com/in/restu-averian-putra/details/certifications/'
        )
      "
    >
      More of My Certificates
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      certiftList: [
        {
          idcertif: 0,
          name: "Belajar Membuat Front-End Web untuk Pemula",
          photo:
            "https://res.cloudinary.com/dcvolkyfb/image/upload/v1655386524/Certificates/sertifikat_course_315_687141_230222070224_page-0001_xft19f.jpg",
          linkWeb: "https://www.dicoding.com/certificates/MRZMKMWDKPYQ",
          mitra: "Dicoding",
          tech: ["HTML", "CSS", "Javascript"],
        },
        {
          idcertif: 1,
          name: "Pelatihan Junior Web Developer",
          photo:
            "https://res.cloudinary.com/dcvolkyfb/image/upload/v1655386523/Certificates/02109315031-20_Restu_Averian_page-0001_wt4icl.jpg",
          linkWeb:
            "https://drive.google.com/file/d/1iEzMyeo-3LxtAQSmuUVy_HDVphIOAYvl/view",
          mitra: "Digital Talent Scholarship",
          GetTime: "Feb 2022",
          tech: ["HTML", "CSS", "Javascript", "Bootstrap", "PHP"],
        },
        {
          idcertif: 2,
          name: "JavaScript Certification Course",
          photo:
            "https://res.cloudinary.com/dcvolkyfb/image/upload/v1655386522/Certificates/certificate_programming_hub_page-0001_xrmstd.jpg",
          linkWeb:
            "https://storage.googleapis.com/programminghub/certificate%2F1646840274310.pdf",
          mitra: "Programming Hub",
          GetTime: "Mar 2022",
          tech: ["Javascript"],
        },
        {
          idcertif: 3,
          name: "Progate Fast Track Bootcamp Batch 1",
          photo:
            "https://res.cloudinary.com/dcvolkyfb/image/upload/v1655386526/Certificates/Restu_Averian_page-0001_x5utsn.jpg",
          linkWeb:
            "https://drive.google.com/file/d/1MVVsPUHxrF9zpBg4GEwsKP1vGMe_wIpc/view",
          mitra: "Progate",
          GetTime: "Jan 2022",
          tech: ["HTML", "CSS", "Javascript"],
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