<script setup>
defineOptions({
    name: "DialogMenuMobile",
});
import { useDialogPluginComponent } from 'quasar'

// console.log(props)
defineEmits([
    // REQUIRED; need to specify some events that your
    // component will emit through useDialogPluginComponent()
    ...useDialogPluginComponent.emits
])

// восстановление пароля - еще одно диалоговое внутри другого
</script>

<template>
    <q-dialog persistent :maximized=true transition-show="slide-up" transition-hide="slide-down">
        <div class="reg_wrapper"></div>
        <div class="login_wrapper"></div>
        <q-card class="text-white" style="background-color: #829F4F;">
            <q-bar style="height: 60px;">
                <div style="height: 32px; width: 88px;">
                    <q-img src="src/assets/logo_white.svg" style="height: 100%; width: 100%;" fit="contain" />
                </div>
                <q-space />
                <q-btn dense flat icon="close" v-close-popup size="lg">
                    <q-tooltip class="bg-white text-primary">Close</q-tooltip>
                </q-btn>
            </q-bar>
            <div class="flex flex-center justify-center" style="height: 90%;">
                <div class="q-gutter-lg">
                    <div class="h1 text-center q-pa-md">Преимущества</div>
                    <div class="h1 text-center q-pa-md">Мероприятие</div>
                    <div class="h1 text-center q-pa-md">Спикеры</div>
                    <div class="h1 text-center q-pa-md">Партнеры</div>
                    <div class="flex flex-center justify-center">
                        <q-btn no-caps flat color="green" size="lg" text-color="primary"
                            style="background-color: #EFDFBB;border: solid 2px #315720;">Войти</q-btn>
                    </div>
                </div>

            </div>
        </q-card>
    </q-dialog>
</template>