<template>
  <div>
    <div
      class="
        w-full
        fixed
        left-1/2
        z-30
        -translate-x-1/2
        flex
        justify-center
        bottom-0
      "
    >
      <div
        @click="$router.push('/certificates')"
        :class="`${
          $route.path === '/certificates'
            ? 'bg-white text-bg-restu lg:w-36 hp:w-full shadow-neon-white'
            : 'border-white bg-bg-restu text-white lg:w-32 hp:w-full hover:shadow-neon-white'
        } cursor-pointer rounded-t-lg duration-300 transition-all  flex flex-col items-center justify-evenly lg:p-4 hp:p-2 border-t-2 border-x-2`"
      >
        <svg
          class="lg:w-[34px] lg:h-[34px] hp:w-5 hp:h-5"
          width="34"
          height="34"
          viewBox="0 0 43 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_90_562)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 4.3C0 3.15957 0.453034 2.06585 1.25944 1.25944C2.06585 0.453034 3.15957 0 4.3 0L38.7 0C39.8404 0 40.9342 0.453034 41.7406 1.25944C42.547 2.06585 43 3.15957 43 4.3V15.7667L40.7067 14.0438C38.2225 12.1807 35.1496 11.2761 32.0522 11.4963C28.9548 11.7164 26.0407 13.0464 23.845 15.2421C21.6493 17.4378 20.3192 20.3519 20.0991 23.4493C19.879 26.5467 20.7835 29.6196 22.6467 32.1038L22.9333 32.4879V43H4.3C3.15957 43 2.06585 42.547 1.25944 41.7406C0.453034 40.9342 0 39.8404 0 38.7L0 4.3ZM22.9333 14.3333H8.6V11.4667H22.9333V14.3333ZM8.6 22.9333H17.2V20.0667H8.6V22.9333Z"
              :fill="`${$route.path === '/certificates' ? '#2D2C2C' : 'white'}`"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M32.9667 14.3333C30.9907 14.333 29.0586 14.9162 27.4128 16.0097C25.7669 17.1032 24.4807 18.6583 23.7152 20.48C22.9498 22.3017 22.7393 24.3089 23.1102 26.2498C23.4811 28.1906 24.4168 29.9788 25.8 31.3899V41.5666C25.8 41.8328 25.8741 42.0937 26.0141 42.3201C26.154 42.5466 26.3542 42.7296 26.5923 42.8486C26.8304 42.9676 27.0969 43.018 27.362 42.9941C27.6272 42.9702 27.8804 42.873 28.0933 42.7133L32.9667 39.0583L37.84 42.7133C38.0529 42.873 38.3062 42.9702 38.5713 42.9941C38.8364 43.018 39.1029 42.9676 39.341 42.8486C39.5791 42.7296 39.7793 42.5466 39.9193 42.3201C40.0592 42.0937 40.1333 41.8328 40.1333 41.5666V31.3899C41.5165 29.9788 42.4522 28.1906 42.8231 26.2498C43.194 24.3089 42.9835 22.3017 42.2181 20.48C41.4527 18.6583 40.1664 17.1032 38.5205 16.0097C36.8747 14.9162 34.9426 14.333 32.9667 14.3333V14.3333ZM28.6667 38.6999V33.4339C29.971 34.0531 31.4273 34.3999 32.9667 34.3999C34.5061 34.3999 35.9623 34.0559 37.2667 33.4339V38.6999L33.8267 36.1199C33.5786 35.9338 33.2768 35.8333 32.9667 35.8333C32.6565 35.8333 32.3548 35.9338 32.1067 36.1199L28.6667 38.6999V38.6999Z"
              :fill="`${$route.path === '/certificates' ? '#2D2C2C' : 'white'}`"
            />
          </g>
          <defs>
            <clipPath id="clip0_90_562">
              <rect
                width="43"
                height="43"
                :fill="`${
                  $route.path === '/certificates' ? '#2D2C2C' : 'white'
                }`"
              />
            </clipPath>
          </defs>
        </svg>
        <p
          :class="`${
            $route.path === '/certificates' ? 'font-semibold' : ''
          } hp:text-xs`"
        >
          Ceritificates
        </p>
      </div>
      <div
        @click="$router.push('/')"
        :class="`${
          $route.path === '/'
            ? 'bg-white lg:w-36 text-bg-restu hp:w-full shadow-neon-white'
            : 'border-white bg-bg-restu text-white lg:w-32 hp:w-full hover:shadow-neon-white'
        } cursor-pointer rounded-t-lg flex flex-col duration-300 transition-all items-center justify-evenly lg:p-4 hp:p-2  border-t-2 border-x-2`"
      >
        <i
          :class="`${
            $route.path === '/' ? 'text-bg-restu' : 'text-white'
          } fa-solid fa-house lg:text-3xl hp:text-xl`"
        ></i>
        <p :class="`${$route.path === '/' ? 'font-semibold' : ''} hp:text-sm`">
          Home
        </p>
      </div>

      <div
        @click="$router.push('/projects')"
        :class="`${
          $route.path === '/projects'
            ? 'bg-white lg:w-36 text-bg-restu hp:w-full shadow-neon-white'
            : 'border-white bg-bg-restu lg:w-32 text-white hp:w-full hover:shadow-neon-white'
        } cursor-pointer rounded-t-lg  flex flex-col duration-300 transition-all items-center jjustify-evenly lg:p-4 hp:p-2 border-t-2 border-x-2`"
      >
        <i
          :class="`${
            $route.path === '/projects' ? 'text-bg-restu' : 'text-white'
          } fa-solid fa-file-code lg:text-3xl hp:text-2xl`"
        ></i>
        <p
          :class="`${
            $route.path === '/projects' ? 'font-semibold' : ''
          } hp:text-sm`"
        >
          Projects
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.path);
  },
};
</script>

<style>
</style>