<script setup>

</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light static-top fixed-top">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand text-success"> <img src="/mealplate.svg" alt="Ícone"
          class="icon-svg"> Vue<span class="text">Meal</span></router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link text" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/PesquisaNome" class="nav-link text">Pesquisar por Nome</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/PesquisarPorIngrediente" class="nav-link text">Pesquisar por Ingredientes</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="main mt-5 d-flex justify-content-center align-items-center col-md-12">
    <router-view></router-view>
  </div>
</template>

