<template>
  <div class="grey darken-1 empty-layout">
    <router-view></router-view>
  </div>
</template>
<script>
import M from 'materialize-css';
import messages from '@/utils/messages';

export default {
  computed: {
    error() {
      return this.$store.getters.ERROR;
    },
  },
  watch: {
    error(fbError) {
      // console.log(fbError.code);
      M.toast({ html: messages[fbError.code] });
    },
  },
};
</script>
