<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <Loader v-if="loading" />
      <div class="row" v-else>
        <CategoryCreate v-on:created="addNewCategory" />

        <CategoryEdit
          v-if="categories.length"
          v-bind:categories="categories"
          v-on:updated="updateCategories"
          :key="categories.length + updateCount"
        />
        <p v-else class="center">Категорий пока нет</p>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import CategoryCreate from '@/components/CategoryCreate.vue';
import CategoryEdit from '@/components/CategoryEdit.vue';

export default {
  name: 'categories',
  data() {
    return {
      categories: [],
      loading: true,
      updateCount: 0,
    };
  },
  components: {
    CategoryCreate,
    CategoryEdit,
  },
  methods: {
    ...mapActions(['FETCH_CATEGORIES']),
    addNewCategory(category) {
      this.categories.push(category);
    },
    updateCategories(category) {
      const idx = this.categories.findIndex((c) => c.id === category.id);
      this.categories[idx].title = category.title;
      this.categories[idx].limit = category.limit;
      this.updateCount += 1;
    },
  },
  async mounted() {
    this.categories = await this.FETCH_CATEGORIES();
    console.log(this.categories);
    this.loading = false;
  },
};
</script>
