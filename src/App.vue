<template>
   <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import MainLayout from './layouts/MainLayout.vue';
import LkLayout from './layouts/LkLayout.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();

    const layout = computed(() => {
      return route.meta.layout === 'LkLayout' ? LkLayout : MainLayout;
    });

    return {
      layout,
    };
  },
}



</script>

