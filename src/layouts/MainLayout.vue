<template>
  <div>
    <Loader v-if="loading" />
    <div class="app-main-layout" v-else>
      <Navbar v-on:click="isOpen = !isOpen" />

      <Sidebar v-model="isOpen" />
      <main class="app-content" v-bind:class="{ full: !isOpen }">
        <div class="app-page">
          <router-view></router-view>
        </div>
      </main>

      <div class="fixed-action-btn">
        <router-link class="btn-floating btn-large blue" to="/record">
          <i class="large material-icons">add</i>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import Navbar from '../components/app/Navbar.vue';
import Sidebar from '../components/app/Sidebar.vue';

export default {
  name: 'main-layout',
  components: {
    Navbar,
    Sidebar,
  },
  methods: {
    ...mapActions(['FETCH_INFO']),
  },
  data() {
    return {
      isOpen: true,
      loading: true,
    };
  },
  async mounted() {
    if (!Object.keys(this.INFO).length) {
      await this.FETCH_INFO();
    }
    this.loading = false;
  },
  computed: {
    ...mapGetters(['INFO']),
  },
};
</script>
