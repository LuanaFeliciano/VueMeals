<script setup>
import { onMounted, ref } from 'vue';
import ListMeals from '../components/ListMeals.vue';
import ApiBase from '../ApiCustom';

const meals = ref([]);
const searchMeal = ref('');
const noResults = ref(false);

const search = async () => {
  meals.value = [];
  noResults.value = false;
  const response = await ApiBase.get(`search.php?s=${searchMeal.value.trim()}`);

  if (response.data.meals && response.data.meals.length > 0) {
    meals.value = response.data.meals;
    noResults.value = false;
  } else {
    noResults.value = true;
  }
};

onMounted(() => {
  search();
});

</script>

<template>
  <main>
    <div class="mt-5">
      <div class="title text-center text-success">
        <h1>Pesquisar por nome do prato</h1>
      </div>

      <div class="title text-center text-success">
        <div>
          <input v-model="searchMeal" @input="search" class="form-control form-control-lg" type="text"
            placeholder="Digite um Prato em inglês" aria-label=".form-control-lg example">
        </div>
      </div>
      <ListMeals :meals="meals" />
      <div v-if="noResults">
        <div class="alert alert-danger" role="alert">
          Digite um Prato Válido!
        </div>
      </div>
    </div>
  </main>
</template>

  