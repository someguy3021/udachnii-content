<script setup>
import { ref, computed, onUnmounted } from 'vue';
import { useQuasar } from 'quasar';
const $q = useQuasar();
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

const form1_isPasswordVisble_1 = ref(true);
const form1_login = ref();
const form1_phoneNumber = ref();
const form1_password_current = ref();

const form1_child_fio = ref();
const form1_child_age = ref();
const form1_parent_fio = ref();

const form1_diagnosis_status = ref(null);
const form1_diagnosis_cipher = ref(null);
const form1_diagnosis_status_options = [
    'Ребёнок с ОВЗ', 'Ребёнок инвалид'
];
const form1_diagnosis_cipher_options = [
    'F80 (специфические расстройства речи и языка)',
    'F 81 (расстройства развития учебных навыков)',
    'F82 (Специфические расстройства развития моторной функции)',
    'ЧF83 (Смешанные специфические расстройства психологического развития)',
    'F84 (Общие расстройства психологического развития – РАС)'
];

// restore password functions-----------restore password functions-----------restore password functions-----------restore password functions-----------


const timeRemaining = ref(0);
const isCooldown = ref(false);
const intervalId = ref(null);

const formattedTime = computed(() => {
    const minutes = Math.floor(timeRemaining.value / 60);
    const seconds = timeRemaining.value % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
});

const startTimer = () => {
    if (isCooldown.value) return;

    // Set cooldown duration in seconds (5 minutes = 300 seconds)
    timeRemaining.value = 62;
    isCooldown.value = true;

    intervalId.value = setInterval(() => {
        timeRemaining.value -= 1;

        if (timeRemaining.value <= 0) {
            clearInterval(intervalId.value);
            isCooldown.value = false;
        }
    }, 1000);
};

// Cleanup interval when component unmounts
onUnmounted(() => {
    if (intervalId.value) {
        clearInterval(intervalId.value);
    }
});
const restorePasswordForms_emailCode = ref("");
const restorePasswordForms_newPassword = ref("");
const restorePasswordForms_newPasswordIsHidden = ref(true);

const restorePasswordDialog = ref(false);
const restorePasswordState = ref(0);
const restorePassword_EmailWhereWasSend = ref("");
// Restore Password API requests
const restorePasswordApi = {
    writeSendEmail: async () => {
        try {
            // const response = await api.post('/auth/forgot-password', {
            //     email: form1_login.value
            // });

            // // On success
            // restorePasswordState.value = 1;
            // restorePassword_EmailWhereWasSend.value = form1_login.value;
            // startTimer();
            if (response.status === 200) {
                restorePasswordState.value = 1;
                restorePassword_EmailWhereWasSend.value = form1_login.value;
                startTimer();

                $q.notify({
                    color: 'uc_green',
                    message: 'Сообщение отправлено на вашу электронную почту!',
                    icon: 'check'
                });
            }

            // setTimeout(() => {
            //     if (response.status === 200) {
            //         restorePasswordState.value = 1;
            //         restorePassword_EmailWhereWasSend.value = form1_login.value;
            //         startTimer();

            //         $q.notify({
            //             color: 'uc_green',
            //             message: 'Сообщение отправлено на вашу электронную почту!',
            //             icon: 'check'
            //         });
            //     }
            // }, 500);

        } catch (error) {
            let message = 'Ошибка при отправлении запроса';
            if (error.response) {
                switch (error.response.status) {
                    case 404:
                        message = 'Ошибка - такой электронной почты не существует';
                        break;
                    case 429:
                        message = 'Ошибка - слишком много запросов. Пожалуйста, попробуйте чуть позже.';
                        break;
                    default:
                        message = error.response.data?.message || message;
                }
            }

            $q.notify({
                color: 'negative',
                message,
                icon: 'report_problem'
            });
        }
    },
    writeSendCodeFromEmail: async () => {
        try {
            // const response = await api.post('/auth/verify-reset-code', {
            //     email: form1_login.value,
            //     code: form2_code.value
            // });
            // // On success
            // restorePasswordState.value = 2;
            if (response.status === 200) {
                restorePasswordState.value = 2;
                $q.notify({
                    color: 'uc_green',
                    message: 'Код подтвержден!',
                    icon: 'check'
                });
            }

        } catch (error) {
            let message = 'Неверный код';
            if (error.response) {
                switch (error.response.status) {
                    case 400:
                        message = 'Истек срок годности кода или код неверен';
                        break;
                    case 410:
                        message = 'Истек срок годности кода';
                        break;
                    default:
                        message = error.response.data?.message || message;
                }
            }

            $q.notify({
                color: 'negative',
                message,
                icon: 'report_problem'
            });
        }
    },
    writeSendNewPassword: async () => {
        try {
            // const response = await api.post('/auth/reset-password', {
            //     email: form1_login.value,
            //     code: form2_code.value,
            //     newPassword: form3_password.value
            // });

            // // On success
            // restorePasswordState.value = 0;
            // restorePasswordDialog.value = false;

            if (response.status === 200) {
                restorePasswordState.value = 0;
                restorePasswordDialog.value = false;

                $q.notify({
                    color: 'uc_green',
                    message: 'Пароль успешно изменен, вы можете использовать его для входа в аккаунт',
                    icon: 'check'
                });
            }

        } catch (error) {
            let message = 'Ошибка - изменение пароля провалено';
            if (error.response) {
                switch (error.response.status) {
                    case 400:
                        message = 'Ваш новый пароль слишком простой, пожалуйста, придумайте другой пароль';
                        break;
                    case 401:
                        message = 'Срок действия сессии истек, закройте это окно и повторите процедуру введения кода снова';
                        break;
                    case 409:
                        message = 'Новый пароль не может совпадать со старым паролем';
                        break;
                    default:
                        message = error.response.data?.message || message;
                }
            }

            $q.notify({
                color: 'negative',
                message,
                icon: 'report_problem',
                timeout: 3000
            });
        }
    }
};





















// // Restore Password API requests
// const restorePasswordApiTEST = {
//     sendEmail: async () => {
//         try {
//             const response = await axios.post('/restore-password/send-email', {
//                 email: form1_login.value
//             });
//             if (response.status === 200) {
//                 restorePasswordState.value = 1;
//                 restorePassword_EmailWhereWasSend.value = form1_login.value;
//                 startTimer();
//             } else {
//                 console.error('Error sending email:', response.data);
//             }
//         } catch (error) {
//             console.error('Error sending email:', error);
//         }
//     },
//     sendCodeFromEmail: async () => {
//         try {
//             const response = await axios.post('/restore-password/send-code', {
//                 email: restorePassword_EmailWhereWasSend.value
//             });
//             if (response.status === 200) {
//                 restorePasswordState.value = 2;
//             } else {
//                 console.error('Error sending code:', response.data);
//             }
//         } catch (error) {
//             console.error('Error sending code:', error);
//         }
//     },
//     sendNewPassword: async () => {
//         try {
//             const response = await axios.post('/restore-password/new-password', {
//                 email: restorePassword_EmailWhereWasSend.value,
//                 newPassword: form1_newPassword.value
//             });
//             if (response.status === 200) {
//                 restorePasswordState.value = 0;
//                 restorePasswordDialog.value = false;
//             } else {
//                 console.error('Error setting new password:', response.data);
//             }
//         } catch (error) {
//             console.error('Error setting new password:', error);
//         }
//     }
// };
</script>

<template>
    <q-dialog ref="dialogRef" persistent maximized>
        <q-card class="bg-uc_light_green reg_wrapper" v-if="showLogin">
            <q-bar class="q-pa-xl" style="height: 60px; background-color: transparent;" v-if="$q.screen.gt.sm">
                <q-space />
                <q-btn dense flat round icon="close" v-close-popup size="lg"
                    :color="$q.screen.lt.md ? 'uc_green' : 'white'"
                    :style="$q.screen.lt.md ? 'border: solid 2px #315720' : 'border: solid 2px white'">
                    <q-tooltip class="bg-white text-primary">Закрыть</q-tooltip>
                </q-btn>
            </q-bar>
            <div class="fullscreen row" style="pointer-events: none; z-index: 12;">
                <div class="login_emptySpaceImg col-12 col-md" style="min-height: 50%;">
                    <q-bar class="q-pa-xl" style="height: 60px; background-color: transparent; pointer-events: auto;"
                        v-if="$q.screen.lt.md">
                        <q-space />
                        <q-btn dense flat round icon="close" v-close-popup size="lg"
                            :color="$q.screen.lt.md ? 'uc_green' : 'white'"
                            :style="$q.screen.lt.md ? 'border: solid 2px #315720' : 'border: solid 2px white'">
                            <q-tooltip class="bg-white text-primary">Закрыть</q-tooltip>
                        </q-btn>
                    </q-bar>
                </div>
                <div class="login_bgVectorClouds col-12 col-md flex flex-center">
                    <div class="login_form_wrapper q-pa-md q-gutter-y-md"
                        style="width: 100%; max-width: 580px; pointer-events: auto;">
                        <div class="text-center font_Sunday h1 text-white q-pb-md">Авторизация</div>

                        <div class="q-gutter-y-md q-pb-md">
                            <q-input bg-color="light_yellow" label-color="uc_light_green" placeholder="Email" outlined
                                rounded v-model="form1_login" type="email" class="input_field_UCStyle">
                                <template v-slot:prepend>
                                    <div class="q-px-xs"></div>
                                </template>
                            </q-input>
                            <q-input bg-color="light_yellow" v-model="form1_password_current" placeholder="Пароль"
                                outlined rounded :type="form1_isPasswordVisble_1 ? 'password' : 'text'"
                                class="input_field_UCStyle">
                                <template v-slot:prepend>
                                    <div class="q-px-xs"></div>
                                </template>
                                <template v-slot:append>
                                    <q-icon :name="form1_isPasswordVisble_1 ? 'visibility_off' : 'visibility'"
                                        class="cursor-pointer q-pr-sm"
                                        @click="form1_isPasswordVisble_1 = !form1_isPasswordVisble_1" />
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
            <q-bar class="q-pa-xl" style="height: 60px; background-color: transparent;">
                <q-space />
                <q-btn dense flat round icon="close" v-close-popup size="lg" color="uc_green"
                    style="border: solid 2px #315720;background-color: #EFDFBB;">
                    <q-tooltip class="bg-white text-primary">Закрыть</q-tooltip>
                </q-btn>
            </q-bar>
            <div class="fullscreen row" style="pointer-events: none; z-index: 12;">
                <div class="signIn_emptySpaceImg col-12 col-md" style="min-height: 50%;" v-if="$q.screen.gt.sm">
                </div>
                <div class="signIn_bgVectorClouds col-12 col-md flex flex-center">
                    <div class="login_form_wrapper q-pa-md q-gutter-y-md"
                        style="width: 100%; max-width: 580px; pointer-events: auto;">
                        <div class="text-center text-uc_green q-pb-md" v-if="$q.screen.lt.md">
                            <div class="font_Sunday h3 q-pb-md">Вступайте в команду «у-Дачников»</div>
                            <div>Заполните все поля и получите доступ к летнему курсу видеоуроков «Занимаемся на даче —
                                У-Дачный
                                контент»</div>
                        </div>


                        <div class="q-gutter-y-md q-pb-md">
                            <q-input bg-color="light_yellow" outlined rounded v-model="form1_child_fio"
                                placeholder="Ф.И.О ребёнка" class="input_field_UCStyle">
                                <template v-slot:prepend>
                                    <div class="q-px-xs"></div>
                                </template>
                            </q-input>
                            <q-input bg-color="light_yellow" outlined rounded v-model.number="form1_child_age"
                                type="number" placeholder="Возраст ребенка" class="input_field_UCStyle">
                                <template v-slot:prepend>
                                    <div class="q-px-xs"></div>
                                </template>
                            </q-input>
                            <q-input bg-color="light_yellow" outlined rounded v-model="form1_parent_fio"
                                placeholder="Ф.И.О законного представителя" class="input_field_UCStyle">
                                <template v-slot:prepend>
                                    <div class="q-px-xs"></div>
                                </template>
                            </q-input>
                            <q-select bg-color="light_yellow" outlined rounded v-model="form1_diagnosis_status"
                                :options="form1_diagnosis_status_options" label="Статус ребенка"
                                class="input_field_UCStyle">
                                <template v-slot:prepend>
                                    <div class="q-px-xs"></div>
                                </template>
                            </q-select>
                            <q-select bg-color="light_yellow" outlined rounded v-model="form1_diagnosis_cipher"
                                :options="form1_diagnosis_cipher_options" label="Шифр по ПМПК"
                                class="input_field_UCStyle">
                                <template v-slot:prepend>
                                    <div class="q-px-xs"></div>
                                </template>
                            </q-select>
                            <q-input bg-color="light_yellow" outlined rounded v-model="form1_phoneNumber"
                                label="Телефон" mask="8 (###) ### - ###" fill-mask class="input_field_UCStyle">
                                <template v-slot:prepend>
                                    <div class="q-px-xs"></div>
                                </template>
                            </q-input>
                            <q-input bg-color="light_yellow" label-color="uc_light_green" placeholder="Email" outlined
                                rounded v-model="form1_login" type="email" class="input_field_UCStyle">
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
        <q-dialog v-model="restorePasswordDialog" persistent maximized>
            <q-card class="fullscreen bg-uc_light_green">
                <div class="fullscreen restorePassword_dialog flex flex-center">

                    <div class="restorePassword_formWrapper flex flex-center q-pa-md"
                        style="width: 100%; max-width: 650px; pointer-events: auto;">

                        <div class="bg-uc_fon q-pa-lg" style="border-radius: 20px; height: 100%;"
                            :class="$q.screen.lt.md ? 'fullscreen' : ''"
                            :style="$q.screen.lt.md ? '' : 'max-width: 426px'">
                            <div class="q-gutter-y-md restorePassword_formWrapper_fields" style="height: 100%;">
                                <q-bar style="height: 60px; background-color: transparent;">
                                    <q-space />
                                    <q-btn dense flat round icon="close" v-close-popup size="lg" color="uc_green"
                                        style="border: solid 2px #315720" @click="restorePasswordState = 0">
                                        <q-tooltip class="bg-white text-primary">Закрыть</q-tooltip>
                                    </q-btn>
                                </q-bar>
                                <div class="flex flex-center" style="height: 80%;">

                                    <div class="q-gutter-y-md">

                                        <div class="text-center font_Sunday h1 text-uc_green q-pb-md">Восстановление
                                            пароля
                                        </div>
                                        <div class="q-gutter-y-md" v-if="restorePasswordState == 0">
                                            <q-input bg-color="light_yellow" label-color="uc_light_green"
                                                placeholder="Email" outlined rounded v-model="form1_login" type="email"
                                                class="input_field_UCStyle">
                                                <template v-slot:prepend>
                                                    <div class="q-px-xs"></div>
                                                </template>
                                            </q-input>
                                            <q-btn flat no-caps :size="$q.screen.gt.sm || $q.screen.lt.sm ? 'xl' : 'md'"
                                                @click="restorePasswordApi.writeSendEmail" class="q-pa-none full-width"
                                                style="border-radius: 22px">
                                                <div class="full-width"
                                                    style="border: solid 2px #F8CB96; background-color: #F8CB96; border-radius: 22px;">
                                                    <div style="border: solid 4px #A27D54; border-style: dashed; border-radius: 22px; color:#A27D54"
                                                        class="q-px-xl q-py-sm">
                                                        Далее
                                                    </div>
                                                </div>
                                            </q-btn>
                                        </div>
                                        <div class="q-gutter-y-md" v-if="restorePasswordState == 1">
                                            <div class="text-uc_green text-center text-weight-bold h6">Введите код с
                                                почты
                                            </div>
                                            <q-input bg-color="light_yellow" label-color="uc_light_green"
                                                placeholder="Введите код с почты" outlined rounded
                                                v-model="restorePasswordForms_emailCode" class="input_field_UCStyle">
                                                <template v-slot:prepend>
                                                    <div class="q-px-xs"></div>
                                                </template>
                                            </q-input>
                                            <div class="text-uc_green">
                                                <div>Мы отправили проверочный код на почту по адресу {{
                                                    restorePassword_EmailWhereWasSend }}.
                                                    Если
                                                    сообщение не пришло, повторите попытку.</div>
                                                <div
                                                    class="send_again_timerAndText_wrapper row text-uc_green text-weight-bold h6">
                                                    <div class="send_again_text col-8">Отправить код еще раз</div>
                                                    <div class="send_again_timer col-4 text-right">через {{
                                                        formattedTime }}
                                                    </div>
                                                </div>
                                            </div>
                                            <q-btn flat no-caps :size="$q.screen.gt.sm || $q.screen.lt.sm ? 'xl' : 'md'"
                                                @click="restorePasswordApi.writeSendCodeFromEmail"
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
                                        <div class="q-gutter-y-md" v-if="restorePasswordState == 2">
                                            <q-input bg-color="light_yellow" v-model="restorePasswordForms_newPassword"
                                                placeholder="Введите новый пароль" outlined rounded
                                                :type="restorePasswordForms_newPasswordIsHidden ? 'password' : 'text'"
                                                class="input_field_UCStyle">
                                                <template v-slot:prepend>
                                                    <div class="q-px-xs"></div>
                                                </template>
                                                <template v-slot:append>
                                                    <q-icon
                                                        :name="restorePasswordForms_newPasswordIsHidden ? 'visibility_off' : 'visibility'"
                                                        class="cursor-pointer q-pr-sm"
                                                        @click="restorePasswordForms_newPasswordIsHidden = !restorePasswordForms_newPasswordIsHidden" />
                                                </template>
                                            </q-input>
                                            <q-btn flat no-caps :size="$q.screen.gt.sm || $q.screen.lt.sm ? 'xl' : 'md'"
                                                @click="restorePasswordApi.writeSendNewPassword"
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
                        </div>

                    </div>

                </div>
            </q-card>
        </q-dialog>
    </q-dialog>
</template>

<style lang="scss" scoped>
.input_field_UCStyle :deep(.q-field__control) {
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
}

.signIn_bgVectorClouds {
    background: url(../assets/images/authDialog/signIn_bgVectorClouds.svg) repeat;
    background-clip: border-box;
    background-position-x: center;
    background-position-y: center;
}

.signIn_emptySpaceImg {
    background: url(../assets/images/authDialog/signIn_emptySpaceImg_desktop.webp) no-repeat;
    background-color: #E2B377;
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