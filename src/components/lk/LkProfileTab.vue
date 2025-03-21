<template>
  <div class="input_fieldsAndSubmit_wrapper q-pb-lg">

    <div class="input_fields_wrapper row q-gutter-y-sm q-pb-xl"
      :class="$q.screen.lt.sm ? 'q-gutter-x-sm' : 'q-gutter-x-lg'">

      <div class="field_column_no_styles col-12 col-md q-gutter-y-lg q-pb-md">

        <div>
          <div class="q-mb-md">Логин</div>
          <div>
            <q-input bg-color="light_yellow" label-color="uc_light_green" label="Заблоченная почта" outlined rounded
              v-model="login" type="email" disable class="input_field_UCStyle" readonly>
              <template v-slot:prepend>
                <div class="q-px-xs"></div>
              </template>
            </q-input>
          </div>
        </div>
        <div>
          <div class="q-mb-md">Телефон</div>
          <div>
            <q-input bg-color="light_yellow" outlined rounded v-model="phoneNumber" mask="8 (###) ### - ###" fill-mask
              class="input_field_UCStyle">
              <template v-slot:prepend>
                <div class="q-px-xs"></div>
              </template>
            </q-input>
          </div>
        </div>
        <div>
          <div class="q-mb-md">Текущий пароль</div>
          <div>
            <q-input bg-color="light_yellow" v-model="password_current" placeholder="Введите текущий пароль" outlined
              rounded :type="isPasswordVisble_1 ? 'password' : 'text'" class="input_field_UCStyle">
              <template v-slot:prepend>
                <div class="q-px-xs"></div>
              </template>
              <template v-slot:append>
                <q-icon :name="isPasswordVisble_1 ? 'visibility_off' : 'visibility'" class="cursor-pointer q-pr-sm"
                  @click="isPasswordVisble_1 = !isPasswordVisble_1" />
              </template>
            </q-input>
          </div>
        </div>
        <div>
          <div class="q-mb-md">Новый пароль</div>
          <div>
            <q-input bg-color="light_yellow" v-model="password_new" placeholder="Введите новый пароль" outlined rounded
              :type="isPasswordVisble_2 ? 'password' : 'text'" class="input_field_UCStyle">
              <template v-slot:prepend>
                <div class="q-px-xs"></div>
              </template>
              <template v-slot:append>
                <q-icon :name="isPasswordVisble_2 ? 'visibility_off' : 'visibility'" class="cursor-pointer q-pr-sm"
                  @click="isPasswordVisble_2 = !isPasswordVisble_2" />
              </template>
            </q-input>
          </div>
        </div>
        <div>
          <div class="q-mb-md">Повторить пароль</div>
          <div>
            <q-input bg-color="light_yellow" v-model="password_newRepeat" placeholder="Повторите новый пароль" outlined
              rounded :type="isPasswordVisble_3 ? 'password' : 'text'" class="input_field_UCStyle">
              <template v-slot:prepend>
                <div class="q-px-xs"></div>
              </template>
              <template v-slot:append>
                <q-icon :name="isPasswordVisble_3 ? 'visibility_off' : 'visibility'" class="cursor-pointer q-pr-sm"
                  @click="isPasswordVisble_3 = !isPasswordVisble_3" />
              </template>
            </q-input>
          </div>
        </div>

      </div>
      <div class="field_column_no_styles col-12 col-md q-gutter-y-lg q-pb-md">

        <div>
          <div class="q-mb-md">Ф.И.О ребёнка</div>
          <div>
            <q-input bg-color="light_yellow" outlined rounded v-model="child_fio" placeholder="Ф.И.О ребёнка"
              :dense="dense" class="input_field_UCStyle">
              <template v-slot:prepend>
                <div class="q-px-xs"></div>
              </template>
            </q-input>
          </div>
        </div>
        <div>
          <div class="q-mb-md">Возраст ребёнка</div>
          <div><q-input bg-color="light_yellow" outlined rounded v-model.number="child_age" type="number"
              placeholder="Введите возраст ребенка" class="input_field_UCStyle"> <template v-slot:prepend>
                <div class="q-px-xs"></div>
              </template></q-input>
          </div>
        </div>
        <div>
          <div class="q-mb-md">Ф.И.О законного представителя</div>
          <div>
            <q-input bg-color="light_yellow" outlined rounded v-model="parent_fio"
              placeholder="Ф.И.О законного представителя" :dense="dense" class="input_field_UCStyle">
              <template v-slot:prepend>
                <div class="q-px-xs"></div>
              </template>
            </q-input>
          </div>
        </div>

      </div>
      <div class="field_column_no_styles col-12 col-md q-gutter-y-lg q-pb-md">

        <div>
          <div class="q-mb-md">Статус ребёнка</div>
          <div><q-select bg-color="light_yellow" outlined rounded v-model="diagnosis_status"
              :options="diagnosis_status_options" label="Выберите из спика" class="input_field_UCStyle">
              <template v-slot:prepend>
                <div class="q-px-xs"></div>
              </template>
            </q-select>
          </div>
        </div>
        <div>
          <div class="q-mb-md">Шифр по ПМПК</div>
          <div><q-select bg-color="light_yellow" outlined rounded v-model="diagnosis_cipher"
              :options="diagnosis_cipher_options" label="Выберите из спика" class="input_field_UCStyle">
              <template v-slot:prepend>
                <div class="q-px-xs"></div>
              </template>
            </q-select>
          </div>
        </div>

      </div>

    </div>

    <div class="submit_wrapper">
      <q-btn flat no-caps :size="$q.screen.gt.sm || $q.screen.lt.sm ? 'xl' : 'md'" class="q-pa-none"
        style="border-radius: 22px">
        <div style="border: solid 2px #F8CB96; background-color: #F8CB96; border-radius: 22px;">
          <div style="border: solid 4px #A27D54; border-style: dashed; border-radius: 22px; color:#A27D54"
            class="q-px-xl q-py-sm">
            Сохранить
          </div>
        </div>
      </q-btn>
    </div>

  </div>
  <div class="ticketAndButton_wrapper">

    <div class="ticket_wrapper q-pb-lg row">
      <!-- <div class="ticket_body">
        <div class="ticket_body_blocks">
          <div></div>
        </div>
        <div class="ticked_body_sideBlock"></div>
      </div> -->
      <div class="background-container ticketBackground col-2">
        <div class="text-overlay q-pa-md" style="max-width: 500px;">
          <div class="text_overlay_container">
            <div>
              <q-item>
                <q-item-section side top>
                  <q-icon name="calendar_month" color="uc_light_green" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="h5 text-uc_dark_green">27 сентября 2025 года</q-item-label>
                </q-item-section>
              </q-item>
            </div>
            <div>
              <q-item>
                <q-item-section side top>
                  <q-icon name="not_listed_location" color="uc_light_green" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="h6 text-uc_dark_green">г. Иркутск, улица
                    Желябова, 5</q-item-label>
                </q-item-section>
              </q-item>
            </div>
            <div>
              <q-item>
                <q-item-section>
                  <q-item-label class="h5 text-uc_dark_green">Актовый зал Дворца детского и юношеского
                    творчества</q-item-label>
                </q-item-section>
              </q-item>
            </div>
          </div>
        </div>
        <div class="grid" :class="{ 'full-unlocked': isTicketFullyUnlocked }">
          <div v-for="block in blocks" :key="block.id" class="block"
            :class="{ 'full-progress': block.progress >= 100 }">
            <div class="lock-overlay" v-if="block.locked"></div>
            <div class="border" :class="{ unlocked: !block.locked }"></div>
          </div>
        </div>
      </div>
      <div class="ticked_body_sideText col-3">
      </div>
    </div>

    <div class="downloadTicket_wrapper">
      <q-btn flat no-caps color="white" :size="$q.screen.gt.sm || $q.screen.lt.sm ? 'xl' : 'md'" class="q-pa-none"
        style="border-radius: 22px" :disable="!isTicketFullyUnlocked">
        <div style="border: solid 2px #F8CB96; background-color: #F8CB96; border-radius: 22px;">
          <div style="border: solid 4px #A27D54; border-style: dashed; border-radius: 22px; color:#A27D54"
            class="q-px-xl q-py-sm">
            Скачать билет
          </div>
        </div>
      </q-btn>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
const dense = false;
const isPasswordVisble_1 = ref(true);
const isPasswordVisble_2 = ref(true);
const isPasswordVisble_3 = ref(true);

const login = ref();
const phoneNumber = ref();
const password_current = ref();
const password_new = ref();
const password_newRepeat = ref();

const child_fio = ref();
const child_age = ref();
const parent_fio = ref();

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


const ticketProgression = ref(0); // 0-12 (0 = all locked, 12 = all unlocked)
ticketProgression.value = 7; // test value
const isTicketFullyUnlocked = computed(() => ticketProgression.value === 12);
const blocks = computed(() =>
  Array.from({ length: 12 }, (_, i) => ({
    id: i,
    locked: i >= ticketProgression.value,
    progress: i < ticketProgression.value ? 100 : 0
  }))
);

// Example of how you would update the progression later:
// function updateProgressionFromServer(newValue) {
//   ticketProgression.value = Math.min(Math.max(newValue, 0), 12);
// }
</script>

<style lang="scss" scoped>
// со style scoped работает только :deep!
// .input_field_UCStyle :deep>*>.q-field__control {
//   border-radius: 22px !important;
// }
.input_field_UCStyle :deep(.q-field__control) {
  border-radius: 22px !important;
}

// apply a border-radius: 22px !important; to an element that has a input_field class, that element is a 2nd level child input_field>child1>child2_TARGET
.ticked_body_sideText {
  background-image: url(../../assets/images/lk/profile/profile_ticket_sideText_descktop.svg);
  background-size: contain;
  background-repeat: no-repeat;
}

.ticketBackground {
  background-image: url(../../assets/images/lk/profile/profile_ticket_background.webp);
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;
}

.background-container {
  position: relative;
  width: 70%;
  height: 600px;
  border-radius: 24px;
  overflow: hidden;
}

.text-overlay {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  /* Between background (0) and grid (2) */
  display: flex;
  align-items: center;
  justify-content: center;
  // text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  pointer-events: none;
  /* Allows clicks to pass through */
}

.grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 0;
}

.block {
  position: relative;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
  background: transparent;
}

/* Remove borders when fully unlocked */
.grid.full-unlocked .block {
  border-right: none;
  border-bottom: none;
}

.block:nth-child(4n) {
  border-right: none;
}

.block:nth-child(n+9) {
  border-bottom: none;
}

/* Existing styles remain unchanged */
.lock-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.7);
  z-index: 2;
}

.border {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
}

.unlocked {
  border: 2px solid white;
  box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.5);
}

.full-progress .border {
  border: none;
  box-shadow: none;
}
</style>