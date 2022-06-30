<template>
  <div>
    <div class="container lg:mx-0 px-5 mt-5 mx-auto lg:text-left text-right">
      <div class="bg-card-restu inline-block px-4 py-2 rounded-md">
        <p class="text-white">Song : <strong>Undertale - His Theme</strong></p>

        <audio id="mySong">
          <source
            src="https://www.mboxdrive.com/Undertale%20OST_%20090%20-%20His%20Theme.mp3"
            type="audio/mp3"
          />
        </audio>
        <button
          @click="playSong"
          class="btn primary-btn my-5"
          v-html="conditionSong"
        ></button>
      </div>
    </div>
    <navbar-comp />
    <transition
      enter-active-class="transform ease-out duration-300 transition delay-300 translate-y-2 opacity-0 
            sm:translate-y-0 sm:translate-x-0"
      enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
      appear
    >
      <slot />
    </transition>
    <div
      :class="`${isShow ? 'scale-100' : 'scale-0'} inset-0
        h-screen
        flex
        items-center
        justify-center
        duration-300
        transition-all
        fixed
        bg-[rgba(0,0,0,0.7)]`"
    >
      <div
        class="
          bg-bg-restu
          flex flex-col
          rounded-md
          space-y-5
          text-white
          px-4
          py-5
        "
      >
        <div class="mb-3">
          <h1
            class="
              lg:text-3xl
              text-xl
              font-semibold
              border-b-2 border-white
              py-2
            "
          >
            Wanna listen the song ?
          </h1>
          <p class="text-sm text-[rgba(255,255,255,0.8)]">
            You can turn off, even though choosing yes
          </p>
        </div>
        <div class="flex lg:justify-evenly justify-between">
          <button class="btn secondary-btn" @click="chooseNo">
            No, Thank you
          </button>
          <button @click="chooseYes" class="btn primary-btn">
            Yes, i want
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComp from "@/components/NavbarComp.vue";
export default {
  components: { NavbarComp },
  data() {
    return {
      conditionSong: "<i class='fa-solid fa-play'></i>",
      isShow: false,
    };
  },
  methods: {
    playSong() {
      let mySong = document.getElementById("mySong");
      if (mySong.paused) {
        mySong.play();
        this.conditionSong = "<i class='fa-solid fa-pause'></i>";
      } else {
        mySong.pause();
        this.conditionSong = "<i class='fa-solid fa-play'></i>";
      }
    },
    chooseYes() {
      let mySong = document.getElementById("mySong");
      mySong.play();
      this.conditionSong = "<i class='fa-solid fa-pause'></i>";

      this.isShow = false;
    },
    chooseNo() {
      let mySong = document.getElementById("mySong");
      this.conditionSong = "<i class='fa-solid fa-play'></i>";

      mySong.pause();
      this.isShow = false;
    },
  },
  mounted() {
    this.isShow = true;
  },
};
</script>

<style>
</style>