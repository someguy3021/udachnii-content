<template>
  <q-layout class="lk-layout" view="hHh lpR fFf">
    <q-page-container>
      <router-view />
    </q-page-container>
    </q-layout>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'LkLayout',
});
</script>

<style>
.lk-layout {
  max-height: 100dvh;
}
</style>
