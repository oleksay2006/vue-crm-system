<template>
  <ul class="sidenav app-sidenav" v-bind:class="{ open: value }">
    <!-- <a href="#" class="waves-effect waves-orange pointer">Счет</a> -->
    <router-link
      tag="li"
      :to="link.url"
      active-class="active"
      v-for="link in links"
      v-bind:key="link.url"
    >
      <a href="#" class="waves-effect waves-orange pointer">{{ link.title }}</a>
    </router-link>
  </ul>
</template>
<script>
export default {
  name: 'Sidebar',
  props: ['value'],
  data() {
    return {
      links: [
        { title: 'Счет', url: '/home' },
        { title: 'История', url: '/history' },
        { title: 'Планирование', url: '/planning' },
        { title: 'Новая запись', url: '/record' },
        { title: 'Категории', url: '/categories' },
      ],
    };
  },
};
</script>
