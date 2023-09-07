<script setup>
const meal = defineProps(['meals']);
</script>

<template>
  <div class="container mt-3">
    <div class="row justify-content-center">
      <div class="col-md-4" v-for="meal in meals" :key="meal.idMeal" style="max-width: 350px; max-height: 500px;">
        <!-- Card -->
        <div class="card mb-3">
            <img :src="meal.strMealThumb" class="card-img-top" alt="Imagem da Receita">
          <div class="d-grid card-body">
            <h5 class="card-title capitalize">{{ meal.strMeal }}</h5>
            <p class="card-text">
              Categoria: {{ meal.strCategory }}<br>
              Area: {{ meal.strArea }}
            </p>
            <div class="d-grid gap-2 d-md-flex">
              <a :href="meal.strYoutube" target="_blank" class="btn btn-warning" type="button">Vídeo</a>
              <router-link :to="'/receita/' + meal.idMeal" class="btn btn-success">Receita</router-link>
            </div>
          </div>
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