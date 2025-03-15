<template>
  <div class="fullscreen body_404">
    <AppHeaderCompact />
    <div class="text-white text-center q-pa-md flex flex-center">
      <div style="font-size: 30vh">
        404
      </div>

      <div class="text-h2" style="opacity:.4">
        Oops. Nothing here...
      </div>

      <q-btn class="q-mt-xl" color="white" text-color="blue" unelevated to="/" label="Go Home" no-caps />
    </div>
  </div>
</template>

<script setup>
import AppHeaderCompact from 'src/components/AppHeaderCompact.vue'
</script>


<style lang="scss">
.body_404 {
  background: url(../assets/images/401_404/bg_404_1440px.webp) no-repeat,
    linear-gradient(180deg, rgba(208, 231, 241, 1) 0%, rgba(239, 223, 187, 1) 66%, rgba(239, 223, 187, 1) 100%);
  background-blend-mode: normal;
  background-origin: padding-box;
}
</style>