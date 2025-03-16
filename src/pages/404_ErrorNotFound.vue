<template>
  <div class="body_404 fullscreen column">
    <div class="col-4">
      <AppHeaderCompact />
    </div>

    <div class="col text-white text-center q-pa-md" style="margin: 0 auto;">
      <div style="max-width: 570px;">
        <div class="row q-pa-md">
          <div class="text-uc_button_text h1_bigger7 col-12 col-sm" style="font-weight: 700;">404</div>
          <div class="text-uc_button_text col-12 col-sm flex flex-center"
            :class="$q.screen.lt.sm ? 'text-center h5' : 'text-left h1'" style="margin-bottom: 0;">
            Страница
            не найдена!</div>
        </div>
        <div>
          <q-btn flat no-caps color="white" size="lg" class="q-pa-none full-width" style="border-radius: 22px">
            <div style="border: solid 4px #F8CB96; background-color: #F8CB96; border-radius: 22px;" class="full-width">
              <div style="border: solid 2px #A27D54; border-style: dashed; border-radius: 22px; color:#A27D54"
                class="q-px-lg q-py-md full-width">
                Вернуться на главную
              </div>
            </div>
          </q-btn>
        </div>
      </div>

    </div>
    <div class="col">
      <AppFooter footerTypeProp="white" />
    </div>

  </div>
</template>

<script setup>
import AppHeaderCompact from 'src/components/AppHeaderCompact.vue'
import AppFooter from 'src/components/AppFooter.vue'
</script>


<style lang="scss">
// .bottom_404_bg {
//   background: url(../assets/images/401_404/bottom_404.svg) no-repeat,
//     linear-gradient(180deg, rgba(203, 163, 119, 0) 10%, rgba(203, 163, 119, 1) 20%, rgba(203, 163, 119, 1) 100%);
// }

.body_404 {
  background: url(../assets/images/401_404/bg_404_1440px.webp) no-repeat,
    linear-gradient(180deg, rgba(208, 231, 241, 1) 0%, rgba(239, 223, 187, 1) 66%, rgba(239, 223, 187, 1) 100%);
  background-blend-mode: normal;
  background-origin: padding-box;
}
</style>