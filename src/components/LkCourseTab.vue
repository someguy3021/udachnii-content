<template>
  <section class="lk-course">
    <div class="lk-course__left">
      <div class="lk-course__dropdown dropdown">
        <button @click="toggleDropdown" class="dropdown__btn btn">Правила</button>
        <div class="dropdown__content" :class="{open: open}">
          Лишь стремящиеся вытеснить традиционное производство, нанотехнологии преданы социально-демократической анафеме. Лишь стремящиеся вытеснить традиционное производство, нанотехнологии преданы социально-демократической анафеме.
        </div>
      </div>
        <img class="lk-course__img" src="/src/assets/images/lk/course-pic.webp" alt="">
    </div>
    <div class="lk-course__right">
      <div class="lk-course__items">
        <LkCourseSpoiler v-for="item in months" :key="item.id" :item="item" />
      </div>

    </div>
  </section>
</template>

<script>
import LkCourseSpoiler from './LkCourseSpoiler.vue';
export default {
  components: {
    LkCourseSpoiler,
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

    }
  },
  methods: {
    toggleDropdown() {
      this.open = !this.open;
    }
  }
}
</script>

<style lang="scss">
@import '/src/css/lk/lk-course.scss'
</style>
