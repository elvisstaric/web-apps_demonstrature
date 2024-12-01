<template>
  <proizvodi-bttn
    v-for="proizvod in proizvodi"
    :key="proizvod"
    :proizvodi="proizvod"
  />
  <div
    class="form-group"
    style="margin-top: 12%; float: right; position: relative"
  >
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <button
        type="button"
        @click="dodajProizvod()"
        class="btn btn-primary btn-md"
        id="bttnDesno"
      >
        +
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProizvodiBttn from "../components/Proizvodi-bttn.vue";
let BaseUrl = "http://localhost:3000";
const axios = require("axios");
export default {
  name: "Proizvodi",
  components: {
    ProizvodiBttn,
  },
  data() {
    return {
      proizvodi: [],
    };
  },
  mounted() {
    this.dohvatiProizvode();
  },
  methods: {
    dodajProizvod() {
      this.$router.push("/dodaj_proizvod");
    },
    dohvatiProizvode() {
      let proizvodi = [];

      axios
        .get(BaseUrl + `/proizvodi`)
        .then((response) => {
          for (let proizvod of response.data) {
            this.proizvodi.push(proizvod);
          }
        })
        .catch((error) => {
          console.error("Error: ", error);
        });
    },
  },
};
</script>
<style scoped lang="css">
#bttnDesno {
  position: fixed;
  right: 0;
  bottom: 0;
  font-size: 30px;
  font-weight: bold;
  width: 60px;
  height: 60px;
}
</style>
