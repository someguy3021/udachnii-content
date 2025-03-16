<template>
    <div class="fake_header_wrapper flex justify-center q-py-md q-mb-md" style="width: 100%; max-height: 10vh;">
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
                <q-btn v-if="$q.screen.gt.sm" no-caps flat color="green" size="lg" text-color="primary"
                    style="background-color: #EFDFBB;border: solid 2px #315720;"
                    @click="showAuthDialog = true">Войти</q-btn>
                <q-btn v-if="$q.screen.lt.lg" flat no-caps color="green" icon="menu" @click="showMobileDialog = true"
                    size="lg" />
            </div>
        </div>
    </div>
    <DialogMenuMobile v-model="showMobileDialog"></DialogMenuMobile>
    <AppAuthDialog v-model="showAuthDialog" />
</template>

<script setup>
import { ref } from 'vue'
import DialogMenuMobile from 'src/components/landing/DialogMenuMobile.vue'
import AppAuthDialog from 'src/components/AppAuthDialog.vue';

const showMobileDialog = ref(false);
const showAuthDialog = ref(false);

</script>