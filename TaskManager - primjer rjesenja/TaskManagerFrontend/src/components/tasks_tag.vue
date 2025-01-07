<template>
  <span class="row">
    <span v-if="tag == 'hitno'">
      <p
        class="bg-red-200 text-red-700 w-auto inline-block p-1 m-2 rounded-md text-sm"
      >
        HITNO
      </p>
    </span>
    <span v-else-if="tag == 'faks'">
      <p
        class="bg-blue-200 text-blue-700 w-auto inline-block p-1 m-2 rounded-md text-sm"
      >
        FAKS
      </p>
    </span>
    <span v-else-if="tag == 'pomalo'">
      <p
        class="bg-green-200 text-green-700 w-auto inline-block p-1 m-2 rounded-md text-sm"
      >
        POMALO
      </p>
    </span>
    <span v-else>
      <p
        class="bg-gray-200 text-gray-700 w-auto inline-block p-1 m-2 rounded-md text-sm uppercase"
      >
        {{ tag }}
      </p>
    </span>
  </span>
</template>

<script>
export default {
  name: "TaskTag",
  props: ["tag"],
};
</script>
