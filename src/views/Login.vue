<template>
  <form class="card auth-card" v-on:submit.prevent="submitHandler">
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
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/registration">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>
<script>
import { email, required, minLength } from 'vuelidate/lib/validators';
import M from 'materialize-css';
import { mapActions } from 'vuex';
import messages from '@/utils/messages';

export default {
  name: 'login',
  mounted() {
    M.AutoInit();
    if (messages[this.$route.query.message]) {
      M.toast({ html: messages[this.$route.query.message] });
    }
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
  },
  methods: {
    ...mapActions(['LOGIN']),
    async submitHandler() {
      console.log(this.$v.password);
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password,
      };
      try {
        await this.LOGIN(formData);
        this.$router.push('/home');
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
