<script setup>
import { ref } from "vue";
const meal = defineProps(['meals']);
const selectedMeal = ref([]);

const filteredIngredients = (meal) => {
    const ingredients = [];

    for (let index = 1; index <= 20; index++) {
        const ingredientName = meal['strIngredient' + index];
        const ingredientMeasure = meal['strMeasure' + index];

        if (ingredientName && ingredientName.trim() !== '') {
            ingredients.push({ name: ingredientName, measure: ingredientMeasure });
        }
    }

    return ingredients;
};

const openModal = (meal) => {
    selectedMeal.value = meal;
    $("#exampleModalToggle2").modal("show");
};

const closeModal = () => {
    selectedMeal.value = null;
    $("#exampleModalToggle2").modal("hide");
};
</script>

<template>
    <div class="container mt-3">
        <div class="row">
            <div :class="['col-md-4', meals.length === 1 ? 'col-md-12' : '']" v-for="meal in meals" :key="meal.idMeal">
                <!-- Card -->
                <div class="card mb-5" style="max-width: 350px;">
                    <img style="max-width: 450px;" :src="meal.strMealThumb" class="card-img-top" alt="Imagem da Receita">
                    <div class="d-grid card-body">
                        <h5 class="card-title capitalize">{{ meal.strMeal }}</h5>
                        <p class="card-text">
                            Categoria: {{ meal.strCategory }}<br>
                            Área: {{ meal.strArea }}
                        </p>
                        <div class="d-grid gap-2 d-md-flex">
                            <a :href="meal.strYoutube" target="_blank" class="btn btn-warning" type="button">Vídeo</a>
                            <button @click="openModal(meal)" class="btn btn-success" type="button">Receita</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal para exibir a receita -->
    <div class="modal fade" id="exampleModalToggle2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" v-if="selectedMeal">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{{ selectedMeal.strMeal }}</h5>
                    <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h6>Ingredientes:</h6>
                    <ul>
                        <li v-for="ingredient in filteredIngredients(selectedMeal)" :key="ingredient.index">
                            {{ ingredient.name }}: {{ ingredient.measure }}
                        </li>
                    </ul>
                    <p>{{ selectedMeal.strInstructions }}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="closeModal">
                        Fechar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.capitalize {
    text-transform: capitalize;
}

.card {
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23);

}

.card img {
    width: 100%;
}
</style>