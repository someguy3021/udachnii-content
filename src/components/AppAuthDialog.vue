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

const isPasswordVisble_1 = ref(true);
const login = ref();
const phoneNumber = ref();
const password_current = ref();

const child_fio = ref();
const child_age = ref();
// const parent_fio = ref();

const diagnosis_status = ref(null);
const diagnosis_cipher = ref(null);
const diagnosis_status_options = [
    'Ребёнок с ОВЗ', 'Ребёнок инвалид'
];
const diagnosis_cipher_options = [
    'F80 (специфические расстройства речи и языка)',
    'F 81 (расстройства развития учебных навыков)',
    'F82 (Специфические расстройства развития моторной функции)',
    'ЧF83 (Смешанные специфические расстройства психологического развития)',
    'F84 (Общие расстройства психологического развития – РАС)'
];


</script>

<template>
    <q-dialog ref="dialogRef" persistent maximized transition-show="slide-up" transition-hide="slide-down">
        <q-card class="bg-uc_light_green reg_wrapper" v-if="showLogin">
            <q-bar style="height: 60px; background-color: transparent;">
                <q-space />
                <q-btn dense flat round icon="close" v-close-popup size="lg"
                    :color="$q.screen.lt.md ? 'uc_green' : 'white'"
                    :style="$q.screen.lt.md ? 'border: solid 2px #315720' : 'border: solid 2px white'">
                    <q-tooltip class="bg-white text-primary">Закрыть</q-tooltip>
                </q-btn>
            </q-bar>
            <div class="fullscreen row" style="pointer-events: none; z-index: 12;">
                <div class="login_emptySpaceImg col-12 col-md" style="min-height: 50%;">
                </div>
                <div class="login_bgVectorClouds col-12 col-md flex flex-center">
                    <div class="login_form_wrapper q-pa-sm q-gutter-y-md"
                        style="width: 100%; max-width: 580px; pointer-events: auto;">
                        <div class="text-center font_Sunday h1 text-white q-pb-md">Авторизация</div>

                        <div class="q-gutter-y-md q-pb-md">
                            <q-input bg-color="light_yellow" label-color="uc_light_green" placeholder="Email" outlined
                                rounded v-model="login" type="email" class="input_field_UCStyle">
                                <template v-slot:prepend>
                                    <div class="q-px-xs"></div>
                                </template>
                            </q-input>
                            <q-input bg-color="light_yellow" v-model="password_current" placeholder="Пароль" outlined
                                rounded :type="isPasswordVisble_1 ? 'password' : 'text'" class="input_field_UCStyle">
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

                        <div class="q-gutter-y-md q-pb-md">
                            <div @click="restorePasswordDialog = true" class="text-white" style="cursor: pointer;">Не
                                помню пароль
                            </div>
                            <q-btn flat no-caps :size="$q.screen.gt.sm || $q.screen.lt.sm ? 'xl' : 'md'"
                                class="q-pa-none full-width" style="border-radius: 22px">
                                <div class="full-width"
                                    style="border: solid 2px #F8CB96; background-color: #F8CB96; border-radius: 22px;">
                                    <div style="border: solid 4px #A27D54; border-style: dashed; border-radius: 22px; color:#A27D54"
                                        class="q-px-xl q-py-sm">
                                        Войти
                                    </div>
                                </div>
                            </q-btn>
                        </div>

                        <div class="text-white text-center" style="cursor: pointer;" @click="showLogin = !showLogin">Нет
                            аккаунта?
                            Зарегистрироваться
                        </div>

                    </div>
                </div>
            </div>
        </q-card>
        <q-card class="login_wrapper" style="background-color: #EFDFBB;" v-if="!showLogin">
            <q-bar style="height: 60px; background-color: transparent;">
                <q-space />
                <q-btn dense flat round icon="close" v-close-popup size="lg" color=" uc_green' : 'white'"
                    style="border: solid 2px #315720">
                    <q-tooltip class="bg-white text-primary">Закрыть</q-tooltip>
                </q-btn>
            </q-bar>
            <div class="fullscreen row" style="pointer-events: none; z-index: 12;">
                <div class="signIn_emptySpaceImg col-12 col-md" style="min-height: 50%;" v-if="$q.screen.gt.sm">
                </div>
                <div class="signIn_bgVectorClouds col-12 col-md flex flex-center">
                    <div class="login_form_wrapper q-pa-sm q-gutter-y-md"
                        style="width: 100%; max-width: 580px; pointer-events: auto;">
                        <div class="text-center text-uc_green q-pb-md" v-if="$q.screen.lt.md">
                            <div class="font_Sunday h3 q-pb-md">Вступайте в команду «у-Дачников»</div>
                            <div>Заполните все поля и получите доступ к летнему курсу видеоуроков «Занимаемся на даче —
                                У-Дачный
                                контент»</div>
                        </div>


                        <div class="q-gutter-y-md q-pb-md">
                            <q-input bg-color="light_yellow" outlined rounded v-model="child_fio"
                                placeholder="Ф.И.О ребёнка" class="input_field_UCStyle">
                                <template v-slot:prepend>
                                    <div class="q-px-xs"></div>
                                </template>
                            </q-input>
                            <q-input bg-color="light_yellow" outlined rounded v-model.number="child_age" type="number"
                                placeholder="Возраст ребенка" class="input_field_UCStyle">
                                <template v-slot:prepend>
                                    <div class="q-px-xs"></div>
                                </template>
                            </q-input>
                            <q-select bg-color="light_yellow" outlined rounded v-model="diagnosis_status"
                                :options="diagnosis_status_options" label="Статус ребенка" class="input_field_UCStyle">
                                <template v-slot:prepend>
                                    <div class="q-px-xs"></div>
                                </template>
                            </q-select>
                            <q-select bg-color="light_yellow" outlined rounded v-model="diagnosis_cipher"
                                :options="diagnosis_cipher_options" label="Шифр по ПМПК" class="input_field_UCStyle">
                                <template v-slot:prepend>
                                    <div class="q-px-xs"></div>
                                </template>
                            </q-select>
                            <q-input bg-color="light_yellow" outlined rounded v-model="phoneNumber" label="Телефон"
                                mask="8 (###) ### - ###" fill-mask class="input_field_UCStyle">
                                <template v-slot:prepend>
                                    <div class="q-px-xs"></div>
                                </template>
                            </q-input>
                            <q-input bg-color="light_yellow" label-color="uc_light_green" placeholder="Email" outlined
                                rounded v-model="login" type="email" class="input_field_UCStyle">
                                <template v-slot:prepend>
                                    <div class="q-px-xs"></div>
                                </template>
                            </q-input>
                        </div>

                        <div class="q-gutter-y-md q-pb-md">
                            <q-btn flat no-caps :size="$q.screen.gt.sm || $q.screen.lt.sm ? 'xl' : 'md'"
                                class="q-pa-none full-width" style="border-radius: 22px">
                                <div class="full-width"
                                    style="border: solid 2px #F8CB96; background-color: #F8CB96; border-radius: 22px;">
                                    <div style="border: solid 4px #A27D54; border-style: dashed; border-radius: 22px; color:#A27D54"
                                        class="q-px-xl q-py-sm">
                                        Войти
                                    </div>
                                </div>
                            </q-btn>
                        </div>

                        <div class="text-uc_green text-center" style="cursor: pointer;" @click="showLogin = !showLogin">
                            Уже
                            есть
                            аккаунт?
                            Войти
                        </div>

                    </div>
                </div>
            </div>
        </q-card>
        <!-- Second dialog -->
        <q-dialog v-model="restorePasswordDialog" persistent maximized transition-show="slide-down"
            transition-hide="slide-down">
            <q-card class="fullscreen bg-uc_light_green">
                <div class="fullscreen restorePassword_dialog flex flex-center">

                    <div class="restorePassword_formWrapper flex flex-center q-pa-sm"
                        style="width: 100%; max-width: 650px; pointer-events: auto;">

                        <div class="bg-uc_fon q-pa-lg" style="border-radius: 20px;"
                            :class="$q.screen.lt.md ? 'fullscreen' : ''"
                            :style="$q.screen.lt.md ? '' : 'max-width: 426px'">
                            <div class="q-gutter-y-md restorePassword_formWrapper_fields">
                                <q-bar style="height: 60px; background-color: transparent;">
                                    <q-space />
                                    <q-btn dense flat round icon="close" v-close-popup size="lg" color="uc_green"
                                        style="border: solid 2px #315720">
                                        <q-tooltip class="bg-white text-primary">Закрыть</q-tooltip>
                                    </q-btn>
                                </q-bar>
                                <div class="text-center font_Sunday h1 text-uc_green q-pb-md">Восстановление пароля
                                </div>
                                <q-input bg-color="light_yellow" label-color="uc_light_green" placeholder="Email"
                                    outlined rounded v-model="login" type="email" class="input_field_UCStyle">
                                    <template v-slot:prepend>
                                        <div class="q-px-xs"></div>
                                    </template>
                                </q-input>
                                <q-btn flat no-caps :size="$q.screen.gt.sm || $q.screen.lt.sm ? 'xl' : 'md'"
                                    class="q-pa-none full-width" style="border-radius: 22px">
                                    <div class="full-width"
                                        style="border: solid 2px #F8CB96; background-color: #F8CB96; border-radius: 22px;">
                                        <div style="border: solid 4px #A27D54; border-style: dashed; border-radius: 22px; color:#A27D54"
                                            class="q-px-xl q-py-sm">
                                            Далее
                                        </div>
                                    </div>
                                </q-btn>
                            </div>
                        </div>

                    </div>

                </div>
            </q-card>
        </q-dialog>
    </q-dialog>
</template>

<style lang="scss" scoped>
.input_field_UCStyle :deep>*>.q-field__control {
    border-radius: 22px !important;
}

.login_bgVectorClouds {
    background: url(../assets/images/authDialog/login_bgVectorClouds.svg) repeat;
    background-clip: border-box;
    background-position-x: left;
    background-position-y: top;
}

.login_emptySpaceImg {
    background: url(../assets/images/authDialog/login_emptySpaceImg_desktop.webp) no-repeat;
    background-size: 986px auto;
    background-position-x: right;
    background-position-y: bottom;
    image-rendering: crisp-edges;
}

.signIn_bgVectorClouds {
    background: url(../assets/images/authDialog/signIn_bgVectorClouds.svg) repeat;
    background-clip: border-box;
    background-position-x: center;
    background-position-y: center;
}

.signIn_emptySpaceImg {
    background: url(../assets/images/authDialog/signIn_emptySpaceImg_desktop.webp) no-repeat;
    background-size: auto auto;
    background-position-x: center; // (посмотреть подробнее из-за суб-пиксельного рендеринга)
    background-position-y: top;
}

.restorePassword_dialog {
    background: url(../assets/images/authDialog/restorePassword_bgClouds.svg) repeat;
    background-clip: border-box;
    background-position-x: center;
    background-position-y: center;
}

@media (max-width: 1024px) {
    .login_bgVectorClouds {
        background: url(../assets/images/authDialog/login_bgVectorClouds_tablet.svg) repeat;
    }

    .login_emptySpaceImg {
        background: url(../assets/images/authDialog/login_emptySpaceImg_tablet.webp) no-repeat;
        background-size: auto 100%;
        background-clip: border-box;
        background-position-x: center;
        background-position-y: bottom;
    }
}
</style>