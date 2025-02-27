<template>
  <q-page class="flex flex-center">
    <div>
      <!-- Background Layers -->
      <div class="background-layer"></div>
      <img src="src/assets/landing/backgroundImg.png" class="absolute-top full-width hidden md:block"
        style="height: 100%; object-fit: cover;">
      <img src="src/assets/landing/backgroundImg.png" class="absolute-top full-width block md:hidden"
        style="height: 100%; object-fit: cover;">

      <!-- Man Image -->
      <img src="src/assets/landing/person_anton.png" class="absolute man-image"
        style="left: 10%; bottom: 20%; max-height: 70%;">

      <!-- Content Layer -->
      <div class="content-layer absolute-center q-pa-xl">
        <q-grid class="items-center" container>
          <q-grid-item class="col-12 col-md-6">
            <div class="text-content">
              <h1 class="text-h2 text-weight-bold">Course Title</h1>
              <p class="text-subtitle1 q-mt-md">Engaging course description</p>
            </div>
          </q-grid-item>

          <q-grid-item class="col-12 col-md-6 q-pl-xl">
            <div class="q-pa-md" style="max-width: 350px">
              <q-list bordered class="rounded-borders">
                <q-expansion-item expand-separator icon="perm_identity" label="Account settings" caption="John Doe">
                  <q-card>
                    <q-card-section>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                      commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                      eveniet doloribus ullam aliquid.
                    </q-card-section>
                  </q-card>
                </q-expansion-item>

                <q-expansion-item expand-separator icon="signal_wifi_off" label="Wifi settings">
                  <q-card>
                    <q-card-section>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                      commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                      eveniet doloribus ullam aliquid.
                    </q-card-section>
                  </q-card>
                </q-expansion-item>

                <q-expansion-item expand-separator icon="drafts" label="Drafts" header-class="text-purple">
                  <q-card>
                    <q-card-section>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                      commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                      eveniet doloribus ullam aliquid.
                    </q-card-section>
                  </q-card>
                </q-expansion-item>

                <q-expansion-item icon="assessment" label="Disabled" disable>
                  <q-card>
                    <q-card-section>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                      commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                      eveniet doloribus ullam aliquid.
                    </q-card-section>
                  </q-card>
                </q-expansion-item>
              </q-list>
            </div>
          </q-grid-item>
        </q-grid>
      </div>

      <!-- Separator Image -->
      <img src="src/assets/landing/separator_grassFlowers.png" class="absolute-bottom separator-image"
        style="width: 100%;">
    </div>
    <!-- <div style="height: 800vh;">
      sadadasd
    </div> -->
  </q-page>
</template>

<script setup>
//
</script>

<style lang="scss">
.gradient-bg {
  background: linear-gradient(160deg, #83a4d4 0%, #b6fbff 100%);
}

.sun-animation {
  animation: rotate 20s linear infinite;
}

.cloud-layer {
  z-index: 1;
  pointer-events: none;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.landing-section {
  height: 100vh;
  min-height: 600px;

  .background-layer {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, $primary 30%, $secondary 100%);
  }

  .man-image {
    z-index: 1;

    @media (max-width: $breakpoint-md) {
      right: 0 !important;
      max-height: 50% !important;
    }
  }

  .content-layer {
    z-index: 2;
    width: 90%;
    max-width: 1200px;

    @media (max-width: $breakpoint-md) {
      width: 95%;
      padding: 2rem !important;
    }
  }

  .separator-image {
    z-index: 1;
    transform: translateY(50%);
  }
}
</style>