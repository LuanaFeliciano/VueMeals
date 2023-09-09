<script setup>
import { onMounted, ref } from 'vue';
import ListMeals from '../components/ListMeals.vue';
import ApiBase from '../ApiCustom';

const meals = ref([]);
const searchMeal = ref('');

const search = async () => {
  meals.value = [];
  const response = await ApiBase.get(`search.php?s=${searchMeal.value}`);

  if (response.data.meals && response.data.meals.length > 0) {
    meals.value = response.data.meals;
  }
};

onMounted(() => {
  search();
});

</script>

<template>
  <main>
    <div class="mt-5">
      <h1>Pesquisar Por Nome</h1>
      <div class="title text-center text-success">

        <div>
          <input v-model="searchMeal" @input="search" class="form-control form-control-lg" type="text"
            placeholder="Digite um prato em inglês" aria-label=".form-control-lg example">
        </div>
      </div>
      <ListMeals :meals="meals" />
    </div>
  </main>
</template>

  