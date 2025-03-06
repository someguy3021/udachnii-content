<template>
  <q-page>
    <div class="section_banner">
      <div class="section_banner_background">

        <div class="fake_header_wrapper flex justify-center q-py-md" style="width: 100%; max-height: 10vh;">
          <div class="fake_header row flex items-center" style="width: 100%; height: 80px;"
            :class="$q.screen.gt.sm ? 'justify-between q-px-xl' : 'justify-between q-px-md'">
            <div style="min-width: 150px;max-width: 150px;">
              <q-img src="src/assets/logo.svg" style="height: 100%; width: 100%;" />
            </div>
            <div class="row" style="min-width: 150px;max-width: 550px;" v-if="$q.screen.gt.md">
              <div class="text-primary text-center q-mx-md">Преимущества</div>
              <div class="text-primary text-center q-mx-md">Мероприятие</div>
              <div class="text-primary text-center q-mx-md">Спикеры</div>
              <div class="text-primary text-center q-mx-md">Партнеры</div>
            </div>
            <div class="q-gutter-md">
              <q-btn v-if="$q.screen.gt.sm" no-caps color="green" label="Войти" />
              <q-btn v-if="$q.screen.lt.lg" flat no-caps color="green" icon="menu" @click="showMobileDialog = true" />
            </div>
          </div>
        </div>

        <div class="text_hero_wrapper self-center">
          <div class="text_hero q-px-md">
            <div class="h1_bigger3 font_Sunday text-primary text-center"
              :style="$q.screen.lt.sm ? { fontSize: '48px' } : {}">У-дачный контент</div>
            <div class="text-primary text-center" :class="$q.screen.gt.sm ? 'h4' : 'h6'">Особенный развивающий
              контент для особенных детей. Получи билеты на
              «у-Дачный
              фестиваль -2025 года»,
              выполнив все задания.
            </div>
          </div>
        </div>

        <div class="sign_button_wrapper">
          <div class="sign_button sign_button_pillar">
            <div>
              <q-btn flat no-caps color="white" label="" :size="$q.screen.gt.sm || $q.screen.lt.sm ? 'xl' : 'md'"
                class="q-pa-none" style="margin-bottom: -38%;border-radius: 40px">
                <div style="border: solid 2px #806241; background-color: #A27D54; border-radius: 40px;">
                  <div style="border: solid 2px #A27D54; border-radius: 40px;">
                    <div style="border: solid 4px #806241; border-style: dashed; border-radius: 40px;"
                      class="text-white q-px-xl q-py-sm">
                      Присоединиться
                    </div>
                  </div>
                </div>
              </q-btn>
            </div>
          </div>
        </div>

      </div>
      <div style="height: 254px; width: 100%; margin-top: -100px; z-index: 100; position: relative;" :style="[
        $q.screen.gt.sm ?
          { marginTop: '-100px', backgroundImage: `url(${img_sectionBanner_grass})` }
          : { marginTop: '-200px', backgroundImage: `url(${img_sectionBanner_grass})` }
      ]" class="flex items-center justify-center" :class="$q.screen.gt.sm ? 'h5 q-pa-md' : 'q-pa-sm'">
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
        <div class="flex justify-around ">
          <div class="irregularShape">
            <div class="irregularShape_text text-primary">
              <div class="font_Sunday h3">Антон Кутимский</div>
              <div class="h5">Привет! Я главный «У-Дачник, продюсер и ведущий проекта «Летом — Учимся и развиваемся
                вместе
                с нами!» Наша
                команда разработала и создала особый контент для особенных детей.</div>
            </div>
          </div>
          <q-item class="q-pa-md" style="max-width: 350px" id="accordeon1">
            <q-list bordered class="rounded-borders background_lightgreen text-white q-pa-md no-border">
              <q-expansion-item expand-separator icon="perm_identity" label="Психомоторика" header-class="font_Sunday">
                <q-card class="background_fon text-black">
                  <q-card-section>
                    При работе с детьми с особыми потребностями развиваем физические навыки: координацию, моторику
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
                    направленные на развитие психомоторики, речи и когнитивных функций, поднимут уровень умений ребенки
                    и
                    помогут с развитием критического твор­ческого мышления.
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
          </q-item>
        </div>

      </div>
    </div>
    <div class="section_speaker">
      <div class="section_speaker_desktopORtablets section_speaker_background" v-if="$q.screen.width >= 390">
        <div class="relative-position">
          <AppearBlock class="irregularShape">
            <div class="irregularShape_text text-primary">
              <div class="font_Sunday h3">Антон Кутимский</div>
              <div class="h5">Привет! Я главный «У-Дачник, продюсер и ведущий проекта «Летом — Учимся и развиваемся
                вместе
                с нами!» Наша
                команда разработала и создала особый контент для особенных детей.</div>
            </div>

          </AppearBlock>
        </div>
      </div>
      <div class="section_speaker_mobile" v-if="$q.screen.width <= 390">
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
    <DialogMenuMobile v-model="showMobileDialog"></DialogMenuMobile>
  </q-page>
</template>

<script setup>
import img_sectionBanner_grass from 'src/assets/landing/blocks/section_banner_grass.webp'
import { ref, onMounted } from 'vue'
import AppearBlock from 'src/components/landing/AppearBlock.vue'
import DialogMenuMobile from 'src/components/landing/DialogMenuMobile.vue'

const showMobileDialog = ref(false);
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
.irregularShape {
  padding-left: 20px;
  padding-right: 12px;
  padding-top: 20px;
  padding-bottom: 40px;
  width: 550px;
  height: 226px;
  transform: skew(-6deg, 5deg);
  background: $light_yellow;
  border: solid 2px $green;
  border-radius: 20px;
}

.irregularShape_text {
  transform: skew(6deg, -5deg);
}

#accordeon1::before {
  content: '';
  background-image: url(../assets/landing/blocks/Vector_cloud.svg);
  background-size: contain;
  background-repeat: no-repeat;
  width: 250px;
  /* Adjust image width */
  height: 113px;
  /* Adjust image height */
  position: absolute;
  top: -80px;
  /* Half of image height to center on edge */
  left: 50%;
  transform: translateX(-20%);
  display: block;
  z-index: 1;
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

.text_hero_wrapper {
  position: relative;
  top: 150px;
}

.text_hero {
  margin: 0 auto;
  width: 850px;
  max-width: 100%;
}

.sign_button_wrapper {
  position: relative;
  top: 400px;
}

.sign_button {
  margin-left: 700px;
  width: 850px;
  max-width: 100%;
}

.sign_button_pillar {
  background: url(../assets/landing/blocks/Pillar_for_button.svg) no-repeat;
  width: 281px;
  height: 340px;
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

  .text_hero_wrapper {
    top: 100px;
  }

  .sign_button_wrapper {
    top: 290px;
  }

  .sign_button {
    margin: 0 auto;
  }

}

@media (max-width: 744px) {
  .section_banner_background {
    background: url(../assets/landing/tablet/section_banner.webp) no-repeat,
      linear-gradient(rgba(208, 231, 241, 1), rgba(255, 255, 255, 0));
    background-blend-mode: normal;
    background-origin: padding-box;
    height: 664px;
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

  .text_hero_wrapper {
    top: 0;
  }

  .text_hero {
    width: 450px;
  }

  .sign_button_wrapper {
    top: 50px;
  }

  .sign_button_pillar {
    background: url(../assets/landing/blocks/Pillar_for_button.svg) no-repeat;
    width: 201px;
    height: 240px;
  }
}

@media (max-width: 440px) {
  .section_banner_background {
    background: url(../assets/landing/mobile/section_banner.webp) no-repeat,
      linear-gradient(rgba(208, 231, 241, 1), rgba(255, 255, 255, 0));
    background-blend-mode: normal;
    background-origin: padding-box;
    height: 860px;
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

  .sign_button_wrapper {
    top: 100px;
  }

  .sign_button {
    margin-top: -20px;
    margin-left: 50px;
    width: 850px;
    max-width: 100%;
  }

  .sign_button_pillar {
    background: url(../assets/landing/blocks/Pillar_for_button.svg) no-repeat;
    width: 281px;
    height: 340px;
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