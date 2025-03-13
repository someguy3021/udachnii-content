<template>
  <div class="input_fieldsAndSubmit_wrapper q-pb-lg">

    <div class="input_fields_wrapper row q-gutter-y-sm q-pb-xl">

      <div class="field_column_no_styles col-12 col-md q-gutter-y-lg q-px-md q-pb-md">

        <div>
          <div class="q-mb-md">Логин</div>
          <div><q-input bg-color="light_yellow" label-color="light_green" label="Заблоченная почта" outlined rounded
              v-model="login" type="email" disable class="input_field" readonly />
          </div>
        </div>
        <div>
          <div class="q-mb-md">Телефон</div>
          <div> <q-input bg-color="light_yellow" outlined rounded v-model="phoneNumber" mask="8 (###) ### - ###"
              fill-mask class="input_field" /></div>
        </div>
        <div>
          <div class="q-mb-md">Текущий пароль</div>
          <div> <q-input bg-color="light_yellow" v-model="password_current" placeholder="Введите текущий пароль"
              outlined rounded :type="isPasswordVisble_1 ? 'password' : 'text'">
              <template v-slot:append>
                <q-icon :name="isPasswordVisble_1 ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                  @click="isPasswordVisble_1 = !isPasswordVisble_1" />
              </template>
            </q-input></div>
        </div>
        <div>
          <div class="q-mb-md">Новый пароль</div>
          <div> <q-input bg-color="light_yellow" v-model="password_new" placeholder="Введите новый пароль" outlined
              rounded :type="isPasswordVisble_2 ? 'password' : 'text'">
              <template v-slot:append>
                <q-icon :name="isPasswordVisble_2 ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                  @click="isPasswordVisble_2 = !isPasswordVisble_2" />
              </template>
            </q-input></div>
        </div>
        <div>
          <div class="q-mb-md">Повторить пароль</div>
          <div> <q-input bg-color="light_yellow" v-model="password_newRepeat" placeholder="Повторите новый пароль"
              outlined rounded :type="isPasswordVisble_3 ? 'password' : 'text'">
              <template v-slot:append>
                <q-icon :name="isPasswordVisble_3 ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                  @click="isPasswordVisble_3 = !isPasswordVisble_3" />
              </template>
            </q-input></div>
        </div>

      </div>
      <div class="field_column_no_styles col-12 col-md q-gutter-y-lg q-px-md q-pb-md">

        <div>
          <div class="q-mb-md">Ф.И.О ребёнка</div>
          <div> <q-input bg-color="light_yellow" outlined rounded v-model="child_fio" placeholder="Ф.И.О ребёнка"
              :dense="dense" />
          </div>
        </div>
        <div>
          <div class="q-mb-md">Возраст ребёнка</div>
          <div> <q-input bg-color="light_yellow" outlined rounded v-model.number="child_age" type="number"
              placeholder="Введите возраст ребенка" />
          </div>
        </div>
        <div>
          <div class="q-mb-md">Ф.И.О законного представителя</div>
          <div> <q-input bg-color="light_yellow" outlined rounded v-model="parent_fio"
              placeholder="Ф.И.О законного представителя" :dense="dense" />
          </div>
        </div>

      </div>
      <div class="field_column_no_styles col-12 col-md q-gutter-y-lg q-px-md q-pb-md">

        <div>
          <div class="q-mb-md">Статус ребёнка</div>
          <div><q-select bg-color="light_yellow" outlined rounded v-model="diagnosis_status"
              :options="diagnosis_status_options" label="Выберите из спика" placeholder="Введите текущий пароль" />
          </div>
        </div>
        <div>
          <div class="q-mb-md">Шифр по ПМПК</div>
          <div><q-select bg-color="light_yellow" outlined rounded v-model="diagnosis_cipher"
              :options="diagnosis_cipher_options" label="Выберите из спика" />
          </div>
        </div>

      </div>

    </div>

    <div class="submit_wrapper">
      <q-btn flat no-caps :size="$q.screen.gt.sm || $q.screen.lt.sm ? 'xl' : 'md'" class="q-pa-none"
        style="border-radius: 40px">
        <div style="border: solid 2px #F8CB96; background-color: #F8CB96; border-radius: 40px;">
          <div style="border: solid 4px #A27D54; border-style: dashed; border-radius: 40px; color:#A27D54"
            class="q-px-xl q-py-sm">
            Сохранить
          </div>
        </div>
      </q-btn>
    </div>

  </div>
  <div class="ticketAndButton_wrapper">

    <div class="ticket_wrapper q-pb-lg"></div>

    <div class="downloadTicket_wrapper">
      <q-btn flat no-caps color="white" :size="$q.screen.gt.sm || $q.screen.lt.sm ? 'xl' : 'md'" class="q-pa-none"
        style="border-radius: 40px">
        <div style="border: solid 2px #F8CB96; background-color: #F8CB96; border-radius: 40px;">
          <div style="border: solid 4px #A27D54; border-style: dashed; border-radius: 40px; color:#A27D54"
            class="q-px-xl q-py-sm">
            Скачать билет
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

<style lang="scss" scoped></style>