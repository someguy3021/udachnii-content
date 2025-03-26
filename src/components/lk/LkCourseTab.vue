<template>
  <section class="lk-course">
    <div class="lk-course__left">
      <div ref="dropdown" class="lk-course__dropdown dropdown" v-click-outside="closeDropdown">
        <button @click="toggleDropdown" class="dropdown__btn btn">Правила</button>
        <div class="dropdown__content" :class="{ open: open }">
          Изучив весь материал курса, вы получите билет на фестиваль «У-Дачник».
          Все модули открываются постепенно — в каждом месяце по 4 видеоурока с текстовыми методическими материалами.
          Если у вас возникнут вопросы или вы захотите поделиться успехами, используйте кнопку «Обратная связь».
        </div>
      </div>
      <img :style="{ top: `${dropdownHeight}px` }" ref="img" class="lk-course__img"
        src="/src/assets/images/lk/course-pic.webp" alt="">
    </div>
    <div class="lk-course__right">
      <div class="lk-course__items">
        <LkCourseSpoiler v-for="item in months" :key="item.id" :item="item" />
      </div>

    </div>
  </section>
</template>

<script>
import vClickOutside from 'click-outside-vue3'
import LkCourseSpoiler from 'src/components/lk/LkCourseSpoiler.vue';
export default {
  components: {
    LkCourseSpoiler,
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  data() {
    return {
      months: [
        {
          id: 0,
          name: 'У - Дачный контент июнь',
          children: [
            {
              id: 0,
              video_link: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
              poster: '/src/assets/images/lk/poster.webp'
            },
            {
              id: 1,
              video_link: 'https://rutube.ru/play/embed/c71a722e6f74234eba54043ca507572b/',
              poster: '/src/assets/images/lk/poster.webp'
            },
            {
              id: 2,
              video_link: 'https://rutube.ru/play/embed/c71a722e6f74234eba54043ca507572b/',
              poster: '/src/assets/images/lk/poster.webp'
            },
            {
              id: 3,
              video_link: 'https://rutube.ru/play/embed/c71a722e6f74234eba54043ca507572b/',
              poster: '/src/assets/images/lk/poster.webp'
            },
          ]
        },
        {
          id: 1,
          name: 'У - Дачный контент июль',
          children: [
            {
              id: 0,
              video_link: '',
              poster: '/src/assets/images/lk/poster.webp'
            },
            {
              id: 1,
              video_link: '',
              poster: '/src/assets/images/lk/poster.webp'
            },
            {
              id: 2,
              video_link: '',
              poster: '/src/assets/images/lk/poster.webp'
            },
            {
              id: 3,
              video_link: '',
              poster: '/src/assets/images/lk/poster.webp'
            },
          ]
        },
        {
          id: 2,
          name: 'У - Дачный контент август',
          children: [
            {
              id: 0,
              video_link: '',
              poster: '/src/assets/images/lk/poster.webp'
            },
            {
              id: 1,
              video_link: '',
              poster: '/src/assets/images/lk/poster.webp'
            },
            {
              id: 2,
              video_link: '',
              poster: '/src/assets/images/lk/poster.webp'
            },
            {
              id: 3,
              video_link: '',
              poster: '/src/assets/images/lk/poster.webp'
            },
          ]
        },
      ],
      open: false,
      dropdownHeight: 0,
    }
  },
  methods: {
    toggleDropdown() {
      this.open = !this.open;
    },
    closeDropdown() {
      this.open = false;
    },

    dropdownHeightHundle() {
      if (this.$refs.img && this.$refs.dropdown) {
        this.dropdownHeight = this.$refs.dropdown.clientHeight + 56;
      }
    }
  },

  mounted() {
    this.dropdownHeightHundle();

    window.addEventListener('resize', this.dropdownHeightHundle);
  }
}
</script>

<style lang="scss">
@import '/src/css/lk/lk-course.scss'
</style>
