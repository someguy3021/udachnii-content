<template>
    <div class="fake_header_wrapper flex justify-center q-py-md q-mb-md" style="width: 100%; max-height: 10vh;">
        <div class="fake_header row flex items-center" style="width: 100%; height: 80px;"
            :class="$q.screen.gt.sm ? 'justify-between q-px-xl' : 'justify-between q-px-md'">
            <div
                :style="$q.screen.gt.xs ? 'min-width: 150px; max-width: 150px;' : 'min-width: 110px; max-width: 110px;'">
                <q-img src="src/assets/logo.svg" style="height: 100%; width: 100%;" />
            </div>
            <div class="row" style="min-width: 150px;max-width: 550px;"
                v-if="$q.screen.gt.md && showLandingLinks == true">
                <AppLink_NewTabIfExt :to="{ name: 'LandingPage', hash: '#landing_section_advantages' }"
                    class="text-primary text-center q-mx-md h6">Преимущества
                </AppLink_NewTabIfExt>
                <AppLink_NewTabIfExt :to="{ name: 'LandingPage', hash: '#landing_section_events' }"
                    class="text-primary text-center q-mx-md h6">Мероприятие
                </AppLink_NewTabIfExt>
                <AppLink_NewTabIfExt :to="{ name: 'LandingPage', hash: '#landing_section_speaker' }"
                    class="text-primary text-center q-mx-md h6">Спикеры
                </AppLink_NewTabIfExt>
                <AppLink_NewTabIfExt :to="{ name: 'LandingPage', hash: '#landing_section_partners' }"
                    class="text-primary text-center q-mx-md h6">Партнеры
                </AppLink_NewTabIfExt>
            </div>
            <div class="header_buttons">

                <div v-if="showLandingLinks == true" class="q-gutter-md row justify-center">
                    <q-btn v-if="isUserLoggedIn" no-caps flat color="green" size="lg" text-color="primary"
                        style="background-color: #EFDFBB;border: solid 2px #315720;" @click="showAuthDialog = true">
                        Войти
                    </q-btn>
                    <q-btn v-if="!isUserLoggedIn" no-caps flat color="green" size="lg" text-color="primary"
                        style="background-color: #EFDFBB;border: solid 2px #315720;" @click="showAuthDialog = true"
                        icon="img:src/assets/images/icons/logout.svg">
                        Выйти
                    </q-btn>
                    <q-btn v-if="$q.screen.lt.lg" flat no-caps color="green" icon="menu"
                        @click="showMobileDialog = true" size="lg" />
                </div>
                <div v-if="showLandingLinks == false">
                    <q-btn v-if="isUserLoggedIn" no-caps flat color="green" size="lg" text-color="primary"
                        style="background-color: #EFDFBB;border: solid 2px #315720;" @click="showAuthDialog = true">
                        Войти
                    </q-btn>
                    <q-btn v-if="!isUserLoggedIn" no-caps flat color="green" size="lg" text-color="primary"
                        style="background-color: #EFDFBB;border: solid 2px #315720;" @click="showAuthDialog = true"
                        icon="img:src/assets/images/icons/logout.svg">
                        Выйти
                    </q-btn>
                </div>

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
import AppLink_NewTabIfExt from './AppLink_NewTabIfExt.vue';

const showMobileDialog = ref(false);
const showAuthDialog = ref(false);
const isUserLoggedIn = ref(false); // для хендлинга что юзер залогинен - показывать ли кнопки

const props = defineProps({
    showLandingLinksProp: {
        type: Boolean,
        default: true
    }
});

const showLandingLinks = props.showLandingLinksProp;
</script>