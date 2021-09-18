<template>
  <form class="card auth-card" v-on:submit.prevent="registerHandler">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model.trim="email"
          v-bind:class="{
            invalid:
              ($v.email.$dirty && !$v.email.required) ||
              !$v.email.email ||
              $v.email.$dirty,
          }"
        />
        <label for="email">Email</label>
        <small
          class="helper-text invalid"
          v-if="$v.email.$dirty && !$v.email.required"
          >Поле Email не должно быть пустым</small
        >
        <small
          class="helper-text invalid"
          v-if="$v.email.$dirty && !$v.email.email"
          >Введите корректный Email</small
        >
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          v-model.trim="password"
          v-bind:class="{
            invalid:
              ($v.password.$dirty && !$v.password.required) ||
              (!$v.password.minLength && $v.password.$dirty),
          }"
        />
        <label for="password">Пароль</label>
        <small
          class="helper-text invalid"
          v-if="$v.password.$dirty && !$v.password.required"
          >Введите пароль</small
        >
        <small
          class="helper-text invalid"
          v-else-if="$v.password.$dirty && !$v.password.minLength"
          >Пароль должен быть
          {{ this.$v.password.$params.minLength.min }} символьным. Сейчас
          {{ password.length }} символов</small
        >
      </div>
      <div class="input-field">
        <input
          id="name"
          type="text"
          v-model.trim="name"
          :class="{ invalid: $v.name.$dirty && !$v.name.required }"
        />
        <label for="name">Имя</label>
        <small
          class="helper-text invalid"
          v-if="$v.name.$dirty && !$v.name.required"
          >Введите ваше имя</small
        >
      </div>
      <p>
        <label>
          <input type="checkbox" v-model="agree" />
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/">Войти!</router-link>
      </p>
    </div>
  </form>
</template>
<script>
import { email, required, minLength } from 'vuelidate/lib/validators';
import { mapActions } from 'vuex';

export default {
  name: 'Registration',
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
    name: { required },
    agree: { checked: (v) => v },
  },
  data() {
    return {
      email: '',
      password: '',
      name: '',
      agree: false,
    };
  },
  methods: {
    ...mapActions(['REGISTER']),
    async registerHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password,
        name: this.name,
      };
      try {
        await this.REGISTER(formData);
        this.$router.push('/home');
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
<style scoped>
</style>
