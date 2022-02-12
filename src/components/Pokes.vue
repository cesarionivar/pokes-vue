<script setup>
import { ref } from 'vue';
import { getPokes } from '../api/fetchPokes';
const pokes = ref();

const getPokemons = async () => {
  pokes.value = await getPokes();
};

getPokemons();
</script>

<template>
  <div class="pokes">
    <h2 class="pokes__title">Pokes</h2>
    <div class="pokes__container">
      <div class="poke" v-for="poke in pokes">
        <p>{{ poke.name }}</p>
      </div>
    </div>
  </div>
</template>

<style>
.pokes__title {
  margin: 1rem 0;
}

.pokes__container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 10px;
  margin-bottom: 30px;
}

.poke {
  background-color: rgb(7, 125, 155);
  color: white;
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
}
</style>
