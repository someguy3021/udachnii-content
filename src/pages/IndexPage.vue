<template>
  <q-page>
    <div class="section_banner">
      <div class="flex items-between justify-center section_banner_background">
        <div class="fake_header_wrapper flex justify-center q-py-md" style="width: 100%; max-height: 10vh;">
          <div class="fake_header row flex items-center justify-around" style="width: 100%;">
            <div style="min-width: 150px;max-width: 150px;">
              <q-img src="src/assets/logo.svg" style="height: 100%; width: 100%;" />
            </div>
            <div class="row" style="min-width: 150px;max-width: 550px;">
              <div class="text-primary text-center q-mx-md">Преимущества</div>
              <div class="text-primary text-center q-mx-md">Мероприятие</div>
              <div class="text-primary text-center q-mx-md">Спикеры</div>
              <div class="text-primary text-center q-mx-md">Партнеры</div>
            </div>
            <div>
              <q-btn flat no-caps color="green" icon="mail" label="Войти" />
            </div>
          </div>
        </div>
        <div class="self-center" style="max-width: 660px; position: relative; bottom: calc(20vh + 10vw);">
          <div>
            <div class="h1 font_Sunday text-primary text-center">У-дачный контент</div>
            <div class="text-primary h5 text-center">Особенный развивающий контент для особенных детей. Получи билеты на
              «у-Дачный
              фестиваль -2025 года»,
              выполнив все задания.
            </div>
          </div>
        </div>
      </div>
      <div style="height: 254px; width: 100%; margin-top: -100px;"
        :style="{ backgroundImage: `url(${img_sectionBanner_grass})` }"
        class="flex items-center justify-center h5 q-pa-md">
        <div class="background_fon q-px-xl q-py-lg row" style="border-radius: 54px; min-width: 50%;">
          <div class="col flex flex-center q-pr-lg">
            Давайте вместе сделаем лето незабываемым и полезным для наших детей!
          </div>
          <div class="col flex flex-center" style="max-width: 54px;">
            <q-img src="src/assets/landing/openmoji_scroll.svg" style="height: 54px; width: 54px;"></q-img>
          </div>
        </div>
      </div>
    </div>
    <div class="section_advantages">
      <div class="section_advantages_background">
        <div style="width: 500px;" class="irregular_rectangle">
          <div class="font_Sunday h2">Антон Кутимский</div>
          <div class="h5">Привет! Я главный «У-Дачник, продюсер и ведущий проекта «Летом — Учимся и развиваемся вместе
            с нами!» Наша
            команда разработала и создала особый контент для особенных детей.</div>
        </div>
        <q-item class="q-pa-md" style="max-width: 350px">
          <q-list bordered class="rounded-borders background_lightgreen text-white q-pa-md">
            <q-expansion-item expand-separator icon="perm_identity" label="Психомоторика" header-class="font_Sunday">
              <q-card class="background_fon text-black">
                <q-card-section>
                  При работе с детьми с особыми потребностями развиваем физические навыки: координацию, моторику
                  и равновесие совместно с психологическими навыками, улучшая концентрацию, память, самооценку
                  и социальное взаимодействие.
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item expand-separator icon="signal_wifi_off" label="Формат" header-class="font_Sunday">
              <q-card class="background_fon text-black">
                <q-card-section>
                  12 выпусков коррекционно-развивающего видеоконтента разбитые по летним месяцам формате 10-минутных
                  занятий на даче, в том числе: упражнения и игры, разные элементы движения по логоритмике, игры
                  с предметами и другие активности для развития ребёнка.
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item expand-separator icon="drafts" label="Медиакомпетентность" header-class="font_Sunday">
              <q-card class="background_fon text-black">
                <q-card-section>
                  Короткие видеоролики с совместным участием педагогов, логопедов, нейропсихологов и детей с ОВЗ,
                  направленные на развитие психомоторики, речи и когнитивных функций, поднимут уровень умений ребенки и
                  помогут с развитием критического твор­ческого мышления.
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </q-item>
      </div>
    </div>
    <div class="section_speaker">
      <div class="section_speaker_background" v-if="$q.screen.width >= 390">
      </div>
      <div v-if="$q.screen.width <= 390">
        <q-carousel style="height: 737px;" animated v-model="slide" arrows navigation infinite class="background_fon">
          <q-carousel-slide :name="1" img-src="src/assets/landing/mobile/section_speaker_1.webp" />
          <q-carousel-slide :name="2" img-src="src/assets/landing/mobile/section_speaker_2.webp" />
          <q-carousel-slide :name="3" img-src="src/assets/landing/mobile/section_speaker_3.webp" />
          <q-carousel-slide :name="4" img-src="src/assets/landing/mobile/section_speaker_4.webp" />
        </q-carousel>
      </div>
    </div>
    <div class="section_events">
      <div class="section_events_background">

      </div>
    </div>
    <div class="section_registrations">
      <div class="section_registrations_background">

      </div>
    </div>
    <div class="section_partners">
      <div class="section_partners_background">
        <div style="height: 254px; width: 100%; margin-top: -36px;"
          :style="{ backgroundImage: `url(${img_sectionBanner_grass})` }" class="q-pa-lg">
          <q-carousel v-model="slide2" transition-prev="slide-right" transition-next="slide-left" swipeable animated
            control-color="white" padding arrows infinite style="height: 100%; background-color: transparent;">
            <q-carousel-slide :name="1" class="column no-wrap">
              <div class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap">
                <q-btn no-caps color="green" icon="mail" label="info@example" />
                <q-btn no-caps color="green" icon="mail" label="info@example" />
                <q-btn no-caps color="green" icon="mail" label="info@example" />
                <q-btn no-caps color="green" icon="mail" label="info@example" />
                <q-btn no-caps color="green" icon="mail" label="info@example" />
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2" class="column no-wrap">
              <div class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap">
                <q-btn no-caps color="green" icon="mail" label="info@example" />
                <q-btn no-caps color="green" icon="mail" label="info@example" />
                <q-btn no-caps color="green" icon="mail" label="info@example" />
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="3" class="column no-wrap">
              <div class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap">
                <q-btn no-caps color="green" icon="mail" label="info@example" />
                <q-btn no-caps color="green" icon="mail" label="info@example" />
                <q-btn no-caps color="green" icon="mail" label="info@example" />
                <q-btn no-caps color="green" icon="mail" label="info@example" />
                <q-btn no-caps color="green" icon="mail" label="info@example" />
                <q-btn no-caps color="green" icon="mail" label="info@example" />
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="4" class="column no-wrap">
              <div class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap">
                <q-btn no-caps color="green" icon="mail" label="info@example" />
                <q-btn no-caps color="green" icon="mail" label="info@example" />
                <q-btn no-caps color="green" icon="mail" label="info@example" />
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </div>
    <div class="footer row flex items-center justify-around q-my-lg q-py-md">
      <div style="max-width: 150px;">
        <div class="q-mb-lg"><q-img src="src/assets/logo.svg" /></div>
        <div style="opacity: 0.6;" class="text-primary">© 2025 Text text text</div>
      </div>
      <div style="max-width: 350px;">
        <div class="q-mb-lg">
          <p style="margin: 0 0 4px;" class="text-primary">Политика конфиденциальности</p>
          <p class="text-primary">Согласие на обработку персональных данных</p>
        </div>
        <div class="row">
          <div class="col-3 flex items-center">
            <p class="text-primary" style="margin: 0 0 0px;">Сделано в</p>
          </div>
          <div class="col-7"><q-img src="src/assets/landing/titans_logo.svg" style="max-width: 140px;" /></div>
        </div>
      </div>
      <div>
        <div class="q-mb-sm">
          <q-btn flat no-caps color="green" icon="mail" label="info@example" />
        </div>
        <div class="flex items-center justify-center">
          <q-btn flat round color="green" icon="fa-brands fa-telegram" />
          <q-btn flat round color="green" icon="fa-brands fa-vk" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import img_sectionBanner_grass from 'src/assets/landing/blocks/section_banner_grass.webp'
import { ref } from 'vue'

const slide = ref(1)
const slide2 = ref(1)
</script>

<style lang="scss">
// :style="{
//         backgroundImage: `url(${img_sectionBanner}), linear-gradient(rgba(208, 231, 241, 1), rgba(255, 255, 255, 0))`,
//         backgroundRepeat: 'no-repeat',
//         backgroundBlendMode: 'normal',
//         backgroundOrigin: 'padding-box',
//       }"
.irregular_rectangle {
  padding: 40px 45px;
  color: $green;
  border: none;
  background: none;
  outline: none;
  position: relative;
  z-index: 0;
  margin: 15px;
  // filter: drop-shadow(0px 30px 25px rgba(236, 0, 244, 0.45));
}

.irregular_rectangle:before,
.irregular_rectangle:after {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  clip-path: polygon(0 11%, 100% 0, 90% 88%, 3% 96%);
  transition: 1s all;
  background: $verylightbrown;
}

.irregular_rectangle:before {
  background: $green;
  transform: scale(1.05, 1.12);
}

// Blocks with complex vector img background, very sensitive to resizing
// Blocks with complex vector img background, very sensitive to resizing
// Blocks with complex vector img background, very sensitive to resizing

.section_banner_background {
  background: url(../assets/landing/section_banner.webp) no-repeat,
    linear-gradient(rgba(208, 231, 241, 1), rgba(255, 255, 255, 0));
  background-blend-mode: normal;
  background-origin: padding-box;
  height: 1135px;
}

.section_advantages_background {
  background: url(../assets/landing/section_advantages.webp) no-repeat;
  background-blend-mode: normal;
  background-origin: padding-box;
  height: 1152px;
}

.section_speaker_background {
  background: url(../assets/landing/section_speaker.webp) no-repeat;
  background-blend-mode: normal;
  background-origin: padding-box;
  height: 3343px;
}

.section_events_background {
  background: url(../assets/landing/section_events.webp) no-repeat;
  background-blend-mode: normal;
  background-origin: padding-box;
  height: 1095px;
}

.section_registrations_background {
  background: url(../assets/landing/section_registrations.webp) no-repeat;
  background-blend-mode: normal;
  background-origin: padding-box;
  height: 697px;
}

@media (max-width: 1440px) {
  .section_banner_background {
    background: url(../assets/landing/1440/section_banner.webp) no-repeat,
      linear-gradient(rgba(208, 231, 241, 1), rgba(255, 255, 255, 0));
    background-blend-mode: normal;
    background-origin: padding-box;
    height: 915px;
  }

  .section_advantages_background {
    background: url(../assets/landing/1440/section_advantages.webp) no-repeat;
    background-blend-mode: normal;
    background-origin: padding-box;
    height: 857px;
  }

  .section_speaker_background {
    background: url(../assets/landing/1440/section_speaker.webp) no-repeat;
    background-blend-mode: normal;
    background-origin: padding-box;
    height: 2508px;
  }

  .section_events_background {
    background: url(../assets/landing/1440/section_events.webp) no-repeat;
    background-blend-mode: normal;
    background-origin: padding-box;
    height: 821px;
  }

  .section_registrations_background {
    background: url(../assets/landing/1440/section_registrations.webp) no-repeat;
    background-blend-mode: normal;
    background-origin: padding-box;
    height: 523px;
  }
}

@media (max-width: 744px) {
  .section_banner_background {
    background: url(../assets/landing/tablet/section_banner.webp) no-repeat,
      linear-gradient(rgba(208, 231, 241, 1), rgba(255, 255, 255, 0));
    background-blend-mode: normal;
    background-origin: padding-box;
    height: 480px;
  }

  .section_advantages_background {
    background: url(../assets/landing/tablet/section_advantages.webp) no-repeat;
    background-blend-mode: normal;
    background-origin: padding-box;
    height: 651px;
  }

  .section_speaker_background {
    background: url(../assets/landing/tablet/section_speaker.webp) no-repeat;
    background-blend-mode: normal;
    background-origin: padding-box;
    height: 1534px;
  }

  .section_events_background {
    background: url(../assets/landing/tablet/section_events.webp) no-repeat;
    background-blend-mode: normal;
    background-origin: padding-box;
    height: 762px;
  }

  .section_registrations_background {
    background: url(../assets/landing/tablet/section_registrations.webp) no-repeat;
    background-blend-mode: normal;
    background-origin: padding-box;
    height: 322px;
  }
}

@media (max-width: 390px) {
  .section_banner_background {
    background: url(../assets/landing/mobile/section_banner.webp) no-repeat,
      linear-gradient(rgba(208, 231, 241, 1), rgba(255, 255, 255, 0));
    background-blend-mode: normal;
    background-origin: padding-box;
    height: 660px;
  }

  .section_advantages_background {
    background: url(../assets/landing/mobile/section_advantages.webp) no-repeat;
    background-blend-mode: normal;
    background-origin: padding-box;
    height: 596px;
  }

  .section_speaker_background {
    background: url(../assets/landing/mobile/section_speaker.webp) no-repeat;
    background-blend-mode: normal;
    background-origin: padding-box;
    height: 737px;
  }

  .section_events_background {
    background: url(../assets/landing/mobile/section_events.webp) no-repeat;
    background-blend-mode: normal;
    background-origin: padding-box;
    height: 760px;
  }

  .section_registrations_background {
    background: url(../assets/landing/mobile/section_registrations.webp) no-repeat;
    background-blend-mode: normal;
    background-origin: padding-box;
    height: 420px;
  }
}

// .irregular_rectangle:hover:before,
// .irregular_rectangle:hover:after {
//   clip-path: polygon(5% 2%, 100% 5%, 100% 100%, 0% 94%);
// }

// .gradient-bg {
//   background: linear-gradient(160deg, #83a4d4 0%, #b6fbff 100%);
// }

// .sun-animation {
//   animation: rotate 20s linear infinite;
// }

// .cloud-layer {
//   z-index: 1;
//   pointer-events: none;
// }

// @keyframes rotate {
//   from {
//     transform: rotate(0deg);
//   }

//   to {
//     transform: rotate(360deg);
//   }
// }

// .landing-section {
//   height: 100vh;
//   min-height: 600px;

//   .background-layer {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(45deg, $primary 30%, $secondary 100%);
//   }

//   .man-image {
//     z-index: 1;

//     @media (max-width: $breakpoint-md) {
//       right: 0 !important;
//       max-height: 50% !important;
//     }
//   }

//   .content-layer {
//     z-index: 2;
//     width: 90%;
//     max-width: 1200px;

//     @media (max-width: $breakpoint-md) {
//       width: 95%;
//       padding: 2rem !important;
//     }
//   }

//   // .separator-image {
//   //   z-index: 1;
//   //   transform: translateY(50%);
//   // }
// }
.div_imgTagBackground {
  display: inline-block;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.img_imgTagBackground {
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>