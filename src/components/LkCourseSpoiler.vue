<template>
  <div class="lk-course__item course-item" :class="{open: visible, disabled: disabled}">
    <button class="course-item__open btn" @click="spoilerOpen">
      {{ item.name }}
    </button>
    <div class="course-item__container">
      <div class="course-item__wrapper">
        <div class="course-item__content">
          <div class="course-item__grid">
            <div v-for="video in item.children" :key="video.id" class="course-item__video">
              <img class="course-item__poster" :src="video.poster" alt="">
              <button class="btn course-item__play">
                <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="62" height="62" rx="31" fill="white"/>
                <path d="M20 30.7767V25.4367C20 18.8167 24.7 16.0967 30.44 19.4167L35.06 22.0967L39.68 24.7767C45.42 28.0967 45.42 33.5167 39.68 36.8367L35.06 39.5167L30.44 42.1967C24.7 45.4567 20 42.7567 20 36.1167V30.7767Z" fill="#829F4F"/>
                </svg>
              </button>
            </div>
          </div>
          <div class="course-item__btns">
              <a class="btn course-item__link" target="_blank" href="/">
                <span class="btn__text">Методические материалы</span>
              </a>
              <button class="btn course-item__btn course-item__btn--feedback">Обратная связь</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {

  },
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      visible: false,
      disabled: true
    }
  },
  methods: {
    spoilerOpen() {
      this.visible = !this.visible
    }
  }
}
</script>
<!-- <iframe width="720" height="405" src="https://rutube.ru/play/embed/c71a722e6f74234eba54043ca507572b/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe> -->
