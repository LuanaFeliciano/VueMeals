<script setup>
import { onMounted, ref } from 'vue';
import ListMeals from '../components/ListMeals.vue';
import ApiBase from '../ApiCustom';

const meals = ref([]);

const generateRandomMeals = async () => {
  meals.value = [];
  for (let i = 0; i < 9; i++) {
    const response = await ApiBase.get('random.php');

    if (response.data.meals && response.data.meals.length > 0) {
      meals.value.push(response.data.meals[0]);
    }
  }
};

onMounted(generateRandomMeals);
</script>

<template>
  <main>
    <div class="container  mt-5">
      <div v-if="meals && meals.length > 0">
        <div class="title text-center text-success">
          <h1>Refeições Aleatórias</h1>
          <button class="btn btn-light" @click="generateRandomMeals">Gerar Novos Pratos Aleatórios</button>
        </div>
        <ListMeals :meals="meals" />
      </div>
    </div>
  </main>
</template>
