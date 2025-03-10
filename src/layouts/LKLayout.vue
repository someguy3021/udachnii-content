<template>
  <q-layout class="lk-layout" view="hHh lpR fFf">
    <q-page-container>
      <AppHeader />
      <router-view />
    </q-page-container>
    </q-layout>
</template>

<script>
import AppHeader from 'src/components/AppHeader.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'LkLayout',
  components: {
    AppHeader,
  }
});
</script>

<style>
.lk-layout {
  max-height: 100dvh;
}
</style>
