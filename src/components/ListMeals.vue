<script setup>
//const pokemon = defineProps(['name', 'url', 'img']);
</script>

<template>
    <div class="container mt-4 ">
        <div class="row justify-content-center">
            <div class="title text-center mb-2 text-success">
                <h1>Refeições Aleatórias</h1>
            </div>
            <div class="col-md-4" v-for="index in 6" :key="index" style="max-width: 350px;">
                <!-- Card -->
                <div class="card mb-3">
                    <img src="https://www.themealdb.com/images/media/meals/y7h0lq1683208991.jpg" class="card-img-top"
                        alt="...">
                    <div class="d-grid card-body">
                        <h5 class="card-title capitalize">Meal</h5>
                        <p class="card-text">Categoria: Vegetariana<br>
                            Area: Brasilieta
                        </p>
                        <div class="d-grid gap-2 d-md-flex">
                            <button class="btn btn-success" type="button">Receita</button>
                            <button class="btn btn-warning" type="button">Vídeo</button>
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