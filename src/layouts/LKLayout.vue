<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <AppHeader />
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import AppHeader from 'src/components/AppHeader.vue';
// убрал ненужный код
</script>

<style>
/* лейаут и так всегда во весь экран, убрал класс */
</style>
