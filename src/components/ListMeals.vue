<script setup>
//const pokemon = defineProps(['name', 'url', 'img']);
</script>

<template>
    <div class="row">
      <div class="col-md-4" v-for="index in 3" :key="index" style="max-width: 350px;">
        <!-- Card -->
        <div class="card mb-3">
          <img src="https://www.themealdb.com/images/media/meals/y7h0lq1683208991.jpg" class="card-img-top" alt="...">
          <div class="d-grid card-body">
            <h5 class="card-title capitalize">Meal</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a target="_blank" class="btn btn-success">Detalhes</a>
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
    box-shadow: 0 5px 5px rgba(0,0,0,0.19), 0 3px 3px rgba(0,0,0,0.23);
    
}
.card img{
  width:100%;
}


</style>