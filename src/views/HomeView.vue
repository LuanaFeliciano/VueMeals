<script setup>
import { onMounted, reactive, ref } from 'vue';
import ListMeals from '../components/ListMeals.vue';

</script>

<template>
  <main>
    <div class="container">
      <div class="title"><h1>Refeições</h1></div>
      <div class="col-md-12">
            <ListMeals />
      </div>
    </div>
  </main>
</template>
