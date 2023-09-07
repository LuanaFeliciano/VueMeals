<script setup>
import { onMounted, reactive, ref } from 'vue';
import ListMeals from '../components/ListMeals.vue';
import ApiBase from '../ApiCustom';

const meals = ref([]);

onMounted(async () => {
  // guardo 9 meals na const meals
  for (let i = 0; i < 9; i++) {
    const response = await ApiBase.get('random.php');
    console.log(response.data);

    if (response.data.meals && response.data.meals.length > 0) {
      meals.value.push(response.data.meals[0]);
    }
  }
});


</script>

<template>
  <main>
    <div class="container  mt-4">
      <div v-if="meals && meals.length > 0">
        <div class="title text-center text-success">
                <h1>Refeições Aleatórias</h1>
        </div>
            <ListMeals :meals="meals"/>
      </div>
    </div>
  </main>
</template>
