<script setup>
defineOptions({
    name: "PortCards_Card_Dialog",
});
import { useDialogPluginComponent } from 'quasar'

// console.log(props)
defineEmits([
    // REQUIRED; need to specify some events that your
    // component will emit through useDialogPluginComponent()
    ...useDialogPluginComponent.emits
])
</script>

<template>
    <q-dialog persistent :maximized=true transition-show="slide-up" transition-hide="slide-down">
        <q-card class="bg-primary text-white">
            <q-bar>
                <q-space />
                <q-btn dense flat icon="close" v-close-popup>
                    <q-tooltip class="bg-white text-primary">Close</q-tooltip>
                </q-btn>
            </q-bar>

            <q-card-section>
                <div class="text-h6">Alert</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas
                eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus
                minima, porro labore.
            </q-card-section>
        </q-card>
    </q-dialog>
</template>