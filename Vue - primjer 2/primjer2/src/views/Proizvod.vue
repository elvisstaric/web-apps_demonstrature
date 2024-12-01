<template>
  <div class="about">
    <h1>{{ proizvod.marka }}{{ proizvod.model }}</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="marka">Marka</label>
              <p>{{ proizvod.marka }}</p>
            </div>

            <br />
            <div class="form-group">
              <label for="model">Model</label>
              <p>{{ proizvod.model }}</p>
            </div>

            <br />
            <div class="form-group">
              <label for="godina_proizvodnje">Godina proizvodnje</label>
              <p>{{ proizvod.godina_proizvodnje }}</p>
            </div>

            <br />
            <div class="form-group">
              <label for="ocjena">Ocjena</label>
              <p>{{ proizvod.ocjena }}</p>
            </div>
            <br />
            <div class="form-group">
              <label for="zaliha">Zaliha</label>
              <p>{{ proizvod.zaliha }}</p>
            </div>
            <br />
            <div class="form-group">
              <label for="zaliha">Promjena zalihe</label>
              <br />
              <input
                type="number"
                v-model="promjena_zalihe"
                class="form-control"
                id="zaliha"
                placeholder="0"
              />
            </div>
            <br />
            <button
              type="button"
              @click="urediZalihu()"
              class="btn btn-primary"
            >
              Spremi
            </button>
            <button
              type="button"
              @click="obrisiProizvod()"
              class="btn btn-primary"
            >
              Obriši
            </button>
            <br />
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>

<script>
let BaseUrl = "http://localhost:3000";
const axios = require("axios");

export default {
  name: "",
  props: ["id"],
  data() {
    return { proizvod: [], promjena_zalihe: 0 };
  },
  mounted() {
    this.dohvatiProizvod();
  },
  methods: {
    obrisiProizvod() {
      axios
        .delete(BaseUrl + "/proizvodi/" + this.id)
        .then((response) => {
          this.$router.push(`/proizvodi`);
        })
        .catch((error) => {
          console.error("Error: ", error);
        });
    },
    urediZalihu() {
      const podatci_update = {
        zaliha: this.promjena_zalihe,
      };

      axios
        .patch(BaseUrl + "/proizvodi/" + this.id, podatci_update)
        .then((response) => {
          this.$router.push(`/proizvodi`);
        })
        .catch((error) => {
          console.error("Error:", error);
          alert(error.response.data);
        });
    },
    dohvatiProizvod() {
      let proizvod = [];

      axios
        .get(BaseUrl + `/proizvodi/` + this.id)
        .then((response) => {
          this.proizvod = response.data.trazeni_proizvod[0];
        })
        .catch((error) => {
          console.error("Error: ", error);
        });
    },
  },
};
</script>
<style scoped lang="scss">
label {
  font-weight: bold;
}
p {
  margin: auto;
}
.form-group {
  width: auto;
}
button {
  margin-left: 20px;
}
</style>
