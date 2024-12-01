<template>
  <div class="row">
    <button
      @click="otvoriProizvod()"
      type="button"
      class="btn btn-primary btn-lg btn-block"
    >
      {{ proizvodi.marka }}{{ proizvodi.model }}
    </button>
    <br />
  </div>
</template>

<script>
export default {
  name: "ProizvodiBttn",
  props: ["proizvodi"],
  methods: {
    otvoriProizvod() {
      this.$router.push({ path: `proizvodi/${this.proizvodi.id}` });
    },
  },
};
</script>

<style scoped lang="scss">
.row {
  margin: auto;
  height: 100px;
  width: 50%;
}
</style>
