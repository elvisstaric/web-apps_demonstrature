<template>
  <div class="about">
    <h1>Dodavanje proizvoda</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="marka">Marka</label>
              <br />
              <input
                type="text"
                v-model="marka"
                class="form-control"
                id="marka"
                placeholder="Marka"
              />
              <br />
            </div>
            <div class="form-group">
              <label for="model">Model</label>
              <br />
              <input
                type="text"
                v-model="model"
                class="form-control"
                id="model"
                placeholder="Model"
              />
              <br />
            </div>
            <div class="form-group">
              <label for="godina_proizvodnje">Godina proizvodnje</label>
              <br />
              <input
                type="number"
                v-model="godina_proizvodnje"
                class="form-control"
                id="godina_proizvodnje"
                placeholder="Godina proizvodnje"
              />
              <br />
            </div>
            <div class="form-group">
              <label for="zaliha">Zaliha</label>
              <br />
              <input
                type="number"
                v-model="zaliha"
                class="form-control"
                id="zaliha"
                placeholder="Zaliha"
              />
              <br />
            </div>
            <div class="form-group">
              <label for="ocjena">Ocjena</label>
              <br />
              <input
                type="number"
                v-model="ocjena"
                class="form-control"
                id="ocjena"
                placeholder="Ocjena"
              />
              <br />
            </div>
            <br />
            <button
              type="button"
              @click="dodajProizvod()"
              class="btn btn-primary"
            >
              Dodaj
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
  data: function () {
    return {
      marka: "",
      model: "",
      godina_proizvodnje: "",
      zaliha: "",
      ocjena: "",
    };
  },
  methods: {
    dodajProizvod() {
      let podatci = {
        marka: this.marka,
        model: this.model,
        godina_proizvodnje: this.godina_proizvodnje,
        zaliha: this.zaliha,
        ocjena: this.ocjena,
      };
      axios
        .post(BaseUrl + "/proizvodi", podatci)
        .then((response) => {
          this.marka = "";
          this.model = "";
          this.godina_proizvodnje = "";
          this.zaliha = "";
          this.ocjena = "";
          this.$router.push("/proizvodi");
        })
        .catch((error) => {
          console.log("Error:", error);
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
  margin-top: 20px;
}
button {
  margin-left: 20px;
}
</style>
