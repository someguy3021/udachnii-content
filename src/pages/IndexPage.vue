<template>
  <q-page>
    <div class="section_banner">
      <div style="height: 118vh;" class="flex items-between justify-center" :style="{
        backgroundImage: `url(${img_sectionBanner}), linear-gradient(rgba(208, 231, 241, 1), rgba(255, 255, 255, 0))`,
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'normal',
        backgroundOrigin: 'padding-box',
      }">
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
        <div class="self-center" style="max-width: 660px; position: relative; bottom: 400px;">
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
    <div class="section_advantages" style="height: 1148px;" :style="{
      backgroundImage: `url(${img_sectionAdvantages})`,
      backgroundRepeat: 'no-repeat',
      backgroundBlendMode: 'normal',
      backgroundOrigin: 'padding-box',
    }">
      <div style="width: 500px;" class="irregular_rectangle">
        <div class="font_Sunday h2">Антон Кутимский</div>
        <div class="h5">Привет! Я главный «У-Дачник, продюсер и ведущий проекта «Летом — Учимся и развиваемся вместе
          с нами!» Наша
          команда разработала и создала особый контент для особенных детей.</div>
      </div>
    </div>
    <div class="footer row flex items-center justify-around">
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
    <!-- <div class="section_advantages">
      <q-img src="src/assets/landing/section_advantages.png" class="" style="width: 100vw;" />
    </div>
    <div class="section_speaker">
      <q-img src="src/assets/landing/section_speaker.png" class="" style="width: 100vw;" />
    </div>
    <div class="section_events">
      <q-img src="src/assets/landing/section_events.png" class="" style="width: 100vw;" />
    </div>
    <div class="section_registrations">
      <q-img src="src/assets/landing/section_registrations.png" class="" style="width: 100vw;" />
    </div>
    <div class="section_partners">
      <q-img src="src/assets/landing/section_partners.png" class="" style="width: 100vw;" />
    </div> -->
  </q-page>
</template>

<script setup>
import img_sectionBanner from 'src/assets/landing/section_banner.webp'
import img_sectionBanner_grass from 'src/assets/landing/blocks/section_banner_grass.webp'
import img_sectionAdvantages from 'src/assets/landing/section_advantages.png'
// import img_sectionSpeaker from 'src/assets/landing/section_speaker.png'
// import img_sectionEvents from 'src/assets/landing/section_events.png'
// import img_sectionRegistrations from 'src/assets/landing/section_registrations.png'
// import img_sectionPartners from 'src/assets/landing/section_partners.png'

</script>

<style lang="scss">
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