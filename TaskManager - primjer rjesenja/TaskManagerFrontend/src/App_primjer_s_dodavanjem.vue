<script setup>
import axios from "axios";
import { ref } from "vue";

const naslovZadatka = ref("");
const opisZadatka = ref("");
const tagZadatka = ref([]);
const editing = ref(true);
const tasks = ref([]);

async function dodajZadatak() {
  if (naslovZadatka.value.trim() && opisZadatka.value.trim()) {
    tasks.value.unshift({
      naslov: naslovZadatka.value,
      opis: opisZadatka.value,
      tags: tagZadatka.value,
    });
    naslovZadatka.value = "";
    opisZadatka.value = "";
    tagZadatka.value = [];
    editing.value = false;
  }

  await axios
    .post("http://localhost:8000/tasks", {
      tasks: JSON.parse(JSON.stringify(tasks.value)),
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}
</script>

<template>
  <div class="max-w-4xl mx-auto p-4">
    <!-- Header -->
    <header
      class="flex justify-between items-center bg-white p-4 shadow rounded-md mb-6"
    >
      <h1 class="text-2xl font-bold text-gray-800">Task Manager</h1>
      <button
        class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        @click="editing = true"
      >
        Dodaj zadatak
      </button>
    </header>
    <!--/Header-->

    <!-- Editable Input Section -->
    <div v-if="editing" class="bg-white p-4 shadow rounded-md mb-6">
      <div class="mb-4">
        <label class="block text-gray-700 font-medium mb-2" for="naslov"
          >Naslov zadatka:</label
        >
        <input
          id="naslov"
          type="text"
          v-model="naslovZadatka"
          class="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Unesite naslov zadatka"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-medium mb-2" for="opis"
          >Opis zadatka:</label
        >
        <textarea
          id="opis"
          v-model="opisZadatka"
          rows="3"
          class="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Unesite opis zadatka"
        ></textarea>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-medium mb-2" for="tags"
          >Tags:</label
        >
        <input
          type="checkbox"
          id="hitno"
          name="hitno"
          value="hitno"
          class="m-3"
          v-model="tagZadatka"
        />
        <label for="hitno">Hitno</label>
        <div>
          <input
            type="checkbox"
            id="faks"
            name="faks"
            value="faks"
            class="m-3"
            v-model="tagZadatka"
          />
          <label for="faks">Faks</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="pomalo"
            name="pomalo"
            value="pomalo"
            class="m-3"
            v-model="tagZadatka"
          />
          <label for="pomalo">Pomalo</label>
        </div>
      </div>
      <div class="flex space-x-4">
        <button
          class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          @click="dodajZadatak"
          @click.native="$router.push('/')"
        >
          Spremi zadatak
        </button>
        <button
          class="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
          @click="editing = false"
          @click.native="$router.push('/')"
        >
          Odustani
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
