<template>
  <div>
    <div class="page-title">
      <h3>Счет</h3>

      <button class="btn waves-effect waves-light btn-small" @click="refresh">
        <i class="material-icons">refresh</i>
      </button>
    </div>

    <Loader v-if="loading" />
    <div v-else class="row">
      <HomeBill v-bind:rates="currency.rates" />
      <HomeCurrency v-bind:rates="currency.rates" v-bind:date="currency.date" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import HomeBill from '../components/HomeBill.vue';
import HomeCurrency from '../components/HomeCurrency.vue';

export default {
  name: 'HomePage',
  components: {
    HomeBill,
    HomeCurrency,
  },
  async mounted() {
    this.currency = await this.FETCH_CURRENCY();
    console.log(this.currency);
    this.loading = false;
  },
  methods: {
    ...mapActions(['FETCH_CURRENCY']),
    async refresh() {
      this.loading = true;
      this.currency = await this.FETCH_CURRENCY();
      setTimeout((this.loading = false), 5000);
      // this.loading = false;
    },
  },
  data() {
    return {
      loading: true,
      currency: null,
    };
  },
};
</script>
