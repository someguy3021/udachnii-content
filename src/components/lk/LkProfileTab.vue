<template>
  <div class="input_fieldsAndSubmit_wrapper">

    <div class="input_fields_wrapper row q-gutter-x-lg q-gutter-y-sm">

      <div class="field_column_no_styles col-12 col-md">

        <div>
          <div>Логин</div>
          <div><q-input v-model="email" filled type="email" /></div>
        </div>
        <div>
          <div>Телефон</div>
          <div> <q-input filled v-model="phone" mask="(###) ### - ####" fill-mask /></div>
        </div>
        <div>
          <div>Текущий пароль</div>
          <div> <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'">
              <template v-slot:append>
                <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                  @click="isPwd = !isPwd" />
              </template>
            </q-input></div>
        </div>
        <div>
          <div>Новый пароль</div>
          <div> <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'">
              <template v-slot:append>
                <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                  @click="isPwd = !isPwd" />
              </template>
            </q-input></div>
        </div>
        <div>
          <div>Повторить пароль</div>
          <div> <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'">
              <template v-slot:append>
                <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                  @click="isPwd = !isPwd" />
              </template>
            </q-input></div>
        </div>

      </div>
      <div class="field_column_no_styles col-12 col-md">

        <div>
          <div>Ф.И.О ребёнка</div>
          <div> <q-input filled v-model="ph" placeholder="Ф.И.О ребёнка" :dense="dense" /></div>
        </div>
        <div>
          <div>Возраст ребёнка</div>
          <div> <q-input filled v-model.number="model" type="number" /></div>
        </div>
        <div>
          <div>Ф.И.О законного представителя</div>
          <div> <q-input filled v-model="ph" placeholder="Ф.И.О законного представителя" :dense="dense" /></div>
        </div>

      </div>
      <div class="field_column_no_styles col-12 col-md">

        <div>
          <div>Статус ребёнка</div>
          <div><q-select filled v-model="model" :options="options" label="Статус ребёнка" /></div>
        </div>
        <div>
          <div>Шифр по ПМПК</div>
          <div><q-select filled v-model="model" :options="options" label="Шифр по ПМПК" /></div>
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

    <div class="ticket_wrapper"></div>

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

</script>

<style lang="scss" scoped></style>