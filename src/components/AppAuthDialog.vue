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

const secondDialog = ref(false);
const showLogin = ref(props.isShowLogin); // Local state for login/reg toggle
</script>

<template>
    <q-dialog ref="dialogRef" persistent maximized transition-show="slide-up" transition-hide="slide-down">
        <q-card>
            <q-bar style="height: 60px;">
                <div style="height: 32px; width: 88px;">
                    <q-img src="src/assets/logo_white.svg" style="height: 100%; width: 100%;" fit="contain" />
                </div>
                <q-space />
                <q-btn dense flat icon="close" v-close-popup size="lg">
                    <q-tooltip class="bg-white text-primary">Close</q-tooltip>
                </q-btn>
            </q-bar>

            <div class="reg_wrapper" v-if="!showLogin">32323</div>
            <div class="login_wrapper" v-else>
                <q-btn label="Click me" color="primary" @click="secondDialog = true" />
            </div>
        </q-card>
        <!-- Second dialog -->
        <q-dialog v-model="secondDialog" persistent>
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