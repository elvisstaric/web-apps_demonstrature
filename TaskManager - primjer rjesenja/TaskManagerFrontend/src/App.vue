<script>
import task from "./components/task.vue";
import { ref } from "vue";
import axios from "axios";
export default {
  name: "Tasks",

  components: {
    task,
  },

  data() {
    return {
      tasks: ref([]),
    };
  },
  mounted() {
    this.dohvatiTaskove();
  },
  methods: {
    dohvatiTaskove() {
      let tasks = [];
      this.tasks = [];

      axios
        .get("http://localhost:8000/tasks")
        .then((response) => {
          for (let task of response.data) {
            this.tasks.push(task);
          }
        })
        .catch((error) => {
          console.error("Error: ", error);
        });
    },
  },
};
</script>

<template>
  <div class="max-w-4xl mx-auto p-4">
    <!-- Header -->
    <header
      class="flex justify-between items-center bg-white p-4 shadow rounded-md mb-6"
    >
      <h1 class="text-2xl font-bold text-gray-800">Task Manager</h1>
      <button
        @click="this.$router.push({ path: '/add_task' })"
        class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Dodaj zadatak
      </button>
    </header>
    <!--/Header-->

    <!-- Task List -->
    <div class="bg-white p-4 shadow rounded-md">
      <h2 class="text-xl font-semibold text-gray-800 mb-4">Vaši zadaci</h2>
      <ul class="space-y-4">
        <task
          @deleted="this.dohvatiTaskove()"
          @dovrseno="this.dohvatiTaskove()"
          v-for="task in tasks"
          :key="task"
          :naslov="task.naslov"
          :opis="task.opis"
          :tags="task.tags"
          :id="task._id"
          :zavrsen="task.zavrsen"
        />
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
