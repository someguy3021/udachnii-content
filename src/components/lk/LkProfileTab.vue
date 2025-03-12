<template>
  <div class="input_fieldsAndSubmit_wrapper q-pb-lg">

    <div class="input_fields_wrapper row q-gutter-x-lg q-gutter-y-sm q-pb-lg">

      <div class="field_column_no_styles col-12 col-md q-gutter-y-md">

        <div>
          <div>Логин</div>
          <div><q-input filled v-model="login" type="email" /></div>
        </div>
        <div>
          <div>Телефон</div>
          <div> <q-input filled v-model="phoneNumber" mask="(###) ### - ####" fill-mask /></div>
        </div>
        <div>
          <div>Текущий пароль</div>
          <div> <q-input v-model="password_current" filled :type="isPasswordVisble_1 ? 'password' : 'text'">
              <template v-slot:append>
                <q-icon :name="isPasswordVisble_1 ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                  @click="isPasswordVisble_1 = !isPasswordVisble_1" />
              </template>
            </q-input></div>
        </div>
        <div>
          <div>Новый пароль</div>
          <div> <q-input v-model="password_new" filled :type="isPasswordVisble_2 ? 'password' : 'text'">
              <template v-slot:append>
                <q-icon :name="isPasswordVisble_2 ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                  @click="isPasswordVisble_2 = !isPasswordVisble_2" />
              </template>
            </q-input></div>
        </div>
        <div>
          <div>Повторить пароль</div>
          <div> <q-input v-model="password_newRepeat" filled :type="isPasswordVisble_3 ? 'password' : 'text'">
              <template v-slot:append>
                <q-icon :name="isPasswordVisble_3 ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                  @click="isPasswordVisble_3 = !isPasswordVisble_3" />
              </template>
            </q-input></div>
        </div>

      </div>
      <div class="field_column_no_styles col-12 col-md q-gutter-y-md">

        <div>
          <div>Ф.И.О ребёнка</div>
          <div> <q-input filled v-model="child_fio" placeholder="Ф.И.О ребёнка" :dense="dense" /></div>
        </div>
        <div>
          <div>Возраст ребёнка</div>
          <div> <q-input filled v-model.number="child_age" type="number" /></div>
        </div>
        <div>
          <div>Ф.И.О законного представителя</div>
          <div> <q-input filled v-model="parent_fio" placeholder="Ф.И.О законного представителя" :dense="dense" /></div>
        </div>

      </div>
      <div class="field_column_no_styles col-12 col-md q-gutter-y-md">

        <div>
          <div>Статус ребёнка</div>
          <div><q-select filled v-model="diagnosis_status" :options="diagnosis_status_options" label="Статус ребёнка" />
          </div>
        </div>
        <div>
          <div>Шифр по ПМПК</div>
          <div><q-select filled v-model="diagnosis_cipher" :options="diagnosis_cipher_options" label="Шифр по ПМПК" />
          </div>
        </div>

      </div>

    </div>

    <div class="submit_wrapper">
      <q-btn no-caps color="white" label="" :size="$q.screen.gt.sm || $q.screen.lt.sm ? 'xl' : 'md'" class="q-pa-none"
        style="border-radius: 40px">
        <div style="border: solid 2px #806241; background-color: #A27D54; border-radius: 40px;">
          <div style="border: solid 2px #A27D54; border-radius: 40px;">
            <div style="border: solid 4px #806241; border-style: dashed; border-radius: 40px;"
              class="text-white q-px-xl q-py-sm">
              Сохранить
            </div>
          </div>
        </div>
      </q-btn>
    </div>

  </div>
  <div class="ticketAndButton_wrapper">

    <div class="ticket_wrapper q-pb-lg"></div>

    <div class="downloadTicket_wrapper">
      <q-btn no-caps color="white" label="" :size="$q.screen.gt.sm || $q.screen.lt.sm ? 'xl' : 'md'" class="q-pa-none"
        style="border-radius: 40px">
        <div style="border: solid 2px #806241; background-color: #A27D54; border-radius: 40px;">
          <div style="border: solid 2px #A27D54; border-radius: 40px;">
            <div style="border: solid 4px #806241; border-style: dashed; border-radius: 40px;"
              class="text-white q-px-xl q-py-sm">
              Скачать билет
            </div>
          </div>
        </div>
      </q-btn>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
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
  'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
];
const diagnosis_cipher_options = [
  'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
];
</script>

<style lang="scss" scoped></style>