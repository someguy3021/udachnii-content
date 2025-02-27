<template>
  <q-page>
    <!-- <div class="section_banner">
      <q-img src="src/assets/landing/section_banner.png" class="" style="width: 100vw;" />
    </div>
    <div class="section_advantages">
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
  </q-page>
</template>

<script setup>
//
</script>

<style lang="scss">
.gradient-bg {
  background: linear-gradient(160deg, #83a4d4 0%, #b6fbff 100%);
}

.sun-animation {
  animation: rotate 20s linear infinite;
}

.cloud-layer {
  z-index: 1;
  pointer-events: none;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.landing-section {
  height: 100vh;
  min-height: 600px;

  .background-layer {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, $primary 30%, $secondary 100%);
  }

  .man-image {
    z-index: 1;

    @media (max-width: $breakpoint-md) {
      right: 0 !important;
      max-height: 50% !important;
    }
  }

  .content-layer {
    z-index: 2;
    width: 90%;
    max-width: 1200px;

    @media (max-width: $breakpoint-md) {
      width: 95%;
      padding: 2rem !important;
    }
  }

  // .separator-image {
  //   z-index: 1;
  //   transform: translateY(50%);
  // }
}
</style>