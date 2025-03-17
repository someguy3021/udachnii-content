<script setup>
import { ref } from 'vue';
defineOptions({
    name: "AppAuthDialogue",
});
import { useDialogPluginComponent } from 'quasar'

const { dialogRef } = useDialogPluginComponent()

defineEmits([
    ...useDialogPluginComponent.emits
])

const props = defineProps({
    isShowLogin: {
        type: Boolean,
        default: true
    }
});
const showLogin = ref(props.isShowLogin);

const restorePasswordDialog = ref(false);
</script>

<template>
    <q-dialog ref="dialogRef" persistent maximized transition-show="slide-up" transition-hide="slide-down">
        <q-card class="bg-uc_light_green reg_wrapper" v-if="showLogin">
            <q-bar style="height: 60px; background-color: transparent; position: relative; z-index: 22;">
                <q-space />
                <q-btn dense flat round icon="close" v-close-popup size="lg" color="white"
                    style="border: solid 2px white;">
                    <q-tooltip class="bg-white text-primary">Close</q-tooltip>
                </q-btn>
            </q-bar>
            <div class="fullscreen row" style="pointer-events: none;">
                <div class="login_emptySpaceImg col-12 col-md">
                </div>
                <div class="login_bgVectorClouds col-12 col-md flex flex-center">
                    <div class="login_form_wrapper" style="width: 80%;">
                        <div>Авторизация</div>

                        <div>
                            <q-input bg-color="light_yellow" label-color="uc_light_green" label="Заблоченная почта"
                                outlined rounded v-model="login" type="email" disable class="lkProfile_input_field"
                                readonly>
                                <template v-slot:prepend>
                                    <div class="q-px-xs"></div>
                                </template>
                            </q-input>
                            <q-input bg-color="light_yellow" v-model="password_current"
                                placeholder="Введите текущий пароль" outlined rounded
                                :type="isPasswordVisble_1 ? 'password' : 'text'" class="lkProfile_input_field">
                                <template v-slot:prepend>
                                    <div class="q-px-xs"></div>
                                </template>
                                <template v-slot:append>
                                    <q-icon :name="isPasswordVisble_1 ? 'visibility_off' : 'visibility'"
                                        class="cursor-pointer q-pr-sm"
                                        @click="isPasswordVisble_1 = !isPasswordVisble_1" />
                                </template>
                            </q-input>
                        </div>

                        <div>
                            <div @click="restorePasswordDialog = true">Не помню пароль
                                <q-btn flat align="left" color="white" label="Не помню пароль"
                                    @click="restorePasswordDialog = true" no-caps />
                            </div>
                            <q-btn flat no-caps :size="$q.screen.gt.sm || $q.screen.lt.sm ? 'xl' : 'md'"
                                class="q-pa-none" style="border-radius: 22px">
                                <div style="border: solid 2px #F8CB96; background-color: #F8CB96; border-radius: 22px;">
                                    <div style="border: solid 4px #A27D54; border-style: dashed; border-radius: 22px; color:#A27D54"
                                        class="q-px-xl q-py-sm">
                                        Сохранить
                                    </div>
                                </div>
                            </q-btn>
                        </div>

                        <div>Нет аккаунта? Зарегистрироваться</div>

                    </div>
                </div>
            </div>
        </q-card>
        <q-card class="bg-uc_light_green login_wrapper" v-if="!showLogin">
            <q-bar style="height: 60px;  background-color: transparent;">
                <q-space />
                <q-btn dense flat round icon="close" v-close-popup size="lg" color="white"
                    style="border: solid 2px white;">
                    <q-tooltip class="bg-white text-primary">Close</q-tooltip>
                </q-btn>
            </q-bar>
            <q-btn label="Click me" color="primary" @click="restorePasswordDialog = true" />
        </q-card>
        <!-- Second dialog -->
        <q-dialog v-model="restorePasswordDialog" persistent>
            <q-card>
                <q-card-section>
                    <div class="text-h6">Alert</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </q-card-section>

                <q-card-actions align="right">
                    <q-btn flat label="OK" color="primary" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>
    </q-dialog>
</template>

<style lang="scss">
.login_bgVectorClouds {
    background: url(../assets/images/authDialog/login_bgVectorClouds.svg) repeat;
    background-clip: border-box;
    background-position-x: left;
    background-position-y: top;
}

.login_emptySpaceImg {
    background: url(../assets/images/authDialog/login_emptySpaceImg_desktop.webp) no-repeat;
    background-size: 986px cover;
    background-position-x: right;
    background-position-y: top;
}
</style>