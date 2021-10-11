<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" v-on:click.prevent="$emit('click')">
          <i class="material-icons black-text">dehaze</i>
        </a>
        <span class="black-text">{{ date | date("datetime") }}</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a
            class="dropdown-trigger black-text"
            href="#"
            data-target="dropdown"
            ref="dropdown"
          >
            <!-- {{ this.name }} -->
            {{ this.$store.getters.INFO.name }}
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id="dropdown" class="dropdown-content">
            <li>
              <router-link to="/profile" class="black-text">
                <i class="material-icons">account_circle</i>Профиль
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" class="black-text" v-on:click.prevent="logout">
                <i class="material-icons">assignment_return</i>Выйти
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import M from 'materialize-css';
import { mapActions } from 'vuex';

export default {
  name: 'Navbar',
  data() {
    return {
      date: new Date(),
      interval: null,
      dropdown: null,
    };
  },
  computed: {
    // name() {
    //   return this.$store.getters.INFO.name;
    // },
  },
  async mounted() {
    M.AutoInit();
    this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: true,
    });
    this.interval = setInterval(() => {
      this.date = new Date();
    }, 1000);
    await this.FETCH_INFO();
    console.log(this.$store.getters.INFO.name);
  },
  methods: {
    ...mapActions(['LOG_OUT', 'FETCH_INFO']),
    async logout() {
      await this.LOG_OUT();
      this.$router.push('/?message=logout');
    },
  },
  beforeDestroy() {
    clearInterval(this.interval);
    if (this.dropdown && this.dropdown.destroy) {
      this.dropdown.destroy();
    }
  },
};
</script>
