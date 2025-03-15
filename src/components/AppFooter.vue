<template>
    <div class="footer_type_1" v-if="footerTypeShown == ''">

        <div class="footer row flex items-center justify-around q-my-lg q-py-md q-gutter-x-lg q-gutter-y-lg"
            v-if="$q.screen.gt.xs">
            <div style="max-width: 150px;">
                <div class="q-mb-lg"><q-img src="src/assets/logo.svg" /></div>
                <div style="opacity: 0.6;" class="text-primary">© 2025 Text text text</div>
            </div>
            <div style="max-width: 350px;">
                <div class="q-mb-lg">
                    <p style="margin: 0 0 4px;" class="text-primary">Политика конфиденциальности</p>
                    <p class="text-primary">Согласие на обработку персональных данных</p>
                </div>
                <div class="row">
                    <div class="col-3 flex items-center">
                        <p class="text-primary" style="margin: 0 0 0px;">Сделано в</p>
                    </div>
                    <div class="col-7"><q-img src="src/assets/landing/titans_logo.svg" style="max-width: 140px;" />
                    </div>
                </div>
            </div>
            <div>
                <div class="q-mb-sm">
                    <q-btn flat no-caps color="green" icon="mail" label="info@example" />
                </div>
                <div class="flex items-center justify-center">
                    <q-btn flat round color="green" icon="fa-brands fa-telegram" />
                    <q-btn flat round color="green" icon="fa-brands fa-vk" />
                </div>
            </div>
        </div>
        <div class="footer_mobile row flex items-center justify-around q-mt-lg q-py-md" v-if="$q.screen.lt.sm">
            <div class="footer_mobile_section row q-gutter-x-lg q-gutter-y-lg">
                <div class="q-mb-lg"><q-img src="src/assets/logo.svg" style="width: 170px; height: 60px;" /></div>
                <div>
                    <div class="q-mb-sm">
                        <q-btn flat no-caps color="green" icon="mail" label="info@example" />
                    </div>
                    <div class="flex items-center justify-center">
                        <q-btn flat round color="green" icon="fa-brands fa-telegram" />
                        <q-btn flat round color="green" icon="fa-brands fa-vk" />
                    </div>
                </div>
            </div>
            <div class="footer_mobile_section">
                <div style="max-width: 350px;">
                    <div class="q-mb-lg">
                        <p style="margin: 0 0 4px;" class="text-primary">Политика конфиденциальности</p>
                        <p class="text-primary">Согласие на обработку персональных данных</p>
                    </div>
                    <div class="row">
                        <div class="col-3 flex items-center">
                            <p class="text-primary" style="margin: 0 0 0px;">Сделано в</p>
                        </div>
                        <div class="col-7"><q-img src="src/assets/landing/titans_logo.svg" style="max-width: 140px;" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer_mobile_section q-pt-md">
                <div style="opacity: 0.6;" class="text-primary">© 2025 Text text text</div>
            </div>
        </div>

    </div>

    <div class="footer_type_2" v-if="footerTypeShown == 'green'">
        dsadadsaadasdasdasdasdasdasdasdasdasdsaadsdasdd
        <div class="footer row flex items-center justify-around q-my-lg q-py-md q-gutter-x-lg q-gutter-y-lg"
            v-if="$q.screen.gt.xs">
            <div style="max-width: 150px;">
                <div class="q-mb-lg"><q-img src="src/assets/logo.svg" /></div>
                <div style="opacity: 0.6;" class="text-primary">© 2025 Text text text</div>
            </div>
            <div style="max-width: 350px;">
                <div class="q-mb-lg">
                    <p style="margin: 0 0 4px;" class="text-primary">Политика конфиденциальности</p>
                    <p class="text-primary">Согласие на обработку персональных данных</p>
                </div>
                <div class="row">
                    <div class="col-3 flex items-center">
                        <p class="text-primary" style="margin: 0 0 0px;">Сделано в</p>
                    </div>
                    <div class="col-7"><q-img src="src/assets/landing/titans_logo.svg" style="max-width: 140px;" />
                    </div>
                </div>
            </div>
            <div>
                <div class="q-mb-sm">
                    <q-btn flat no-caps color="green" icon="mail" label="info@example" />
                </div>
                <div class="flex items-center justify-center">
                    <q-btn flat round color="green" icon="fa-brands fa-telegram" />
                    <q-btn flat round color="green" icon="fa-brands fa-vk" />
                </div>
            </div>
        </div>
        <div class="footer_mobile row flex items-center justify-around q-mt-lg q-py-md" v-if="$q.screen.lt.sm">
            <div class="footer_mobile_section row q-gutter-x-lg q-gutter-y-lg">
                <div class="q-mb-lg"><q-img src="src/assets/logo.svg" style="width: 170px; height: 60px;" /></div>
                <div>
                    <div class="q-mb-sm">
                        <q-btn flat no-caps color="green" icon="mail" label="info@example" />
                    </div>
                    <div class="flex items-center justify-center">
                        <q-btn flat round color="green" icon="fa-brands fa-telegram" />
                        <q-btn flat round color="green" icon="fa-brands fa-vk" />
                    </div>
                </div>
            </div>
            <div class="footer_mobile_section">
                <div style="max-width: 350px;">
                    <div class="q-mb-lg">
                        <p style="margin: 0 0 4px;" class="text-primary">Политика конфиденциальности</p>
                        <p class="text-primary">Согласие на обработку персональных данных</p>
                    </div>
                    <div class="row">
                        <div class="col-3 flex items-center">
                            <p class="text-primary" style="margin: 0 0 0px;">Сделано в</p>
                        </div>
                        <div class="col-7"><q-img src="src/assets/landing/titans_logo.svg" style="max-width: 140px;" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer_mobile_section q-pt-md">
                <div style="opacity: 0.6;" class="text-primary">© 2025 Text text text</div>
            </div>
        </div>


    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
// сюда передавать тайп футера, исходя из него показывается определенный футер
const props = defineProps({
    footerTypeProp: {
        type: String,
        required: false,
        default: ""
    }
});
const footerTypeShown = ref("");

async function getfooterTypeShown() {
    if (
        (props.footerTypeProp !== null) ||
        (props.footerTypeProp !== undefined) ||
        (props.footerTypeProp !== '')
    ) {
        footerTypeShown.value = props.footerTypeProp;
    } else footerTypeShown.value = "";
}
onMounted(getfooterTypeShown)
// console.log(footerTypeShown.value)
</script>