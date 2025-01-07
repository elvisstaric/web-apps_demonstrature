<template>
  <div class="row">
    <!-- Task Item -->
    <li
      class="flex justify-between items-center p-4 bg-gray-50 rounded-md shadow"
      v-bind:style="{ backgroundColor: zavrsen ? '#CCFFCC' : 'white' }"
    >
      <div>
        <p class="text-lg font-medium text-gray-800">{{ naslov }}</p>
        <p class="text-sm text-gray-600">{{ opis }}</p>
        <task-tag v-for="tag in tags" :key="tag" :tag="tag" />
      </div>
      <!-- Task Actions -->
      <div class="flex space-x-2">
        <button
          v-if="!zavrsen"
          @click="dovrseno"
          class="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
        >
          Dovršeno
        </button>
        <button
          @click="obrisi"
          class="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
        >
          Obriši
        </button>
      </div>
      <!--/Task Actions-->
    </li>
    <!--/Task Item-->
  </div>
</template>

<script>
import axios from "axios";
import TaskTag from "./tasks_tag.vue";
import { ref } from "vue";
export default {
  components: { TaskTag },
  name: "Task",
  props: ["naslov", "opis", "tags", "id", "zavrsen"],
  emits: ["hello"],

  methods: {
    dovrseno() {
      axios
        .patch(`http://localhost:8000/tasks/${this.id}`)
        .then((response) => {
          console.log(response);
          this.$emit("dovrseno");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    obrisi() {
      if (confirm("Do you really want to delete this taks?")) {
        axios
          .delete(`http://localhost:8000/tasks/${this.id}`)
          .then((response) => {
            console.log(response);
            this.$emit("deleted");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>
