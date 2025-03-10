<template>
  <div class="fake_header_wrapper flex justify-center q-py-md" style="width: 100%;">
    <div class="container">
      <div class="fake_header__container">
        <div class="fake_header row flex items-center justify-between" style="width: 100%;">
            <div style="min-width: 150px;max-width: 150px;">
              <q-img src="src/assets/logo.svg" style="height: 100%; width: 100%;" />
            </div>
            <div class="row" style="min-width: 150px;max-width: 550px;">
              <div class="text-primary text-center q-mx-md">Преимущества</div>
              <div class="text-primary text-center q-mx-md">Мероприятие</div>
              <div class="text-primary text-center q-mx-md">Спикеры</div>
              <div class="text-primary text-center q-mx-md">Партнеры</div>
            </div>
            <div>
              <q-btn flat no-caps color="green" icon="mail" label="Войти" />
            </div>
          </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>
