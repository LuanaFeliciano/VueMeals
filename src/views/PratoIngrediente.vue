<script setup>
import { onMounted, ref } from 'vue';
import ListMeals from '../components/ListMeals.vue';
import ApiBase from '../ApiCustom';

const meals = ref([]);
const searchMeal = ref('Cheese');
const noResults = ref(false);

const search = async () => {
    meals.value = [];
    noResults.value = false;

    if (!searchMeal.value.trim()) {
        return;
    }

    const response = await ApiBase.get(`filter.php?i=${searchMeal.value.trim()}`);

    if (response.data.meals && response.data.meals.length > 0) {
        const mealIds = response.data.meals.map(meal => meal.idMeal);
        await fetchMealDetails(mealIds);
    } else {
        noResults.value = true;
    }
};

const fetchMealDetails = async (mealIds) => {
    for (const id of mealIds) {
        const response = await ApiBase.get(`lookup.php?i=${id}`);

        if (response.data.meals && response.data.meals.length > 0) {
            meals.value.push(response.data.meals[0]);
        }
    }

    noResults.value = false;
};

onMounted(() => {
    search();
});
</script>

<template>
    <main>
        <div class="mt-5">
            <div class="title text-center text-success">
                <h1>Pesquisar Por Ingrediente</h1>
            </div>

            <div class="title text-center text-success">
                <div>
                    <input v-model="searchMeal" @input="search" class="form-control form-control-lg" type="text"
                        placeholder="Digite um ingrediente" aria-label=".form-control-lg example">
                </div>
            </div>
            <ListMeals :meals="meals" />
            <div v-if="noResults">
                <div class="alert alert-danger" role="alert">
                    Digite um ingrediente Válido!
                </div>
            </div>
        </div>
    </main>
</template>
  