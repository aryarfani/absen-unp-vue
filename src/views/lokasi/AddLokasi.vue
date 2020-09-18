<template>
  <div class="container mt-4">
    <h1>Tambah Lokasi</h1>

    <form name="form" @submit.prevent="store">
      <div class="form-group">
        <label for="name">Nama Tempat</label>
        <input
          type="text"
          class="form-control"
          v-validate="'required'"
          placeholder="Masukkan nama tempat"
          v-model="form.name"
          name="name"
        />
      </div>
      <div v-if="submitted && errors.has('name')" class="alert-danger">
        {{ errors.first("name") }}
      </div>
      <div class="form-group">
        <label for="address">Alamat</label>
        <input
          id="address"
          v-model="form.address"
          v-validate="'required'"
          type="text"
          class="form-control"
          placeholder="Masukkan alamat"
          name="alamat"
        />
      </div>
      <div v-if="submitted && errors.has('alamat')" class="alert-danger">
        {{ errors.first("alamat") }}
      </div>
      <div class="form-group">
        <label for="latitude">Latitude</label>
        <input
          id="latitude"
          v-model="form.latitude"
          v-validate="'required'"
          type="number"
          class="form-control"
          placeholder="Masukkan latitude"
          name="latitude"
        />
      </div>
      <div v-if="submitted && errors.has('latitude')" class="alert-danger">
        {{ errors.first("latitude") }}
      </div>
      <div class="form-group">
        <label for="longitude">Longitude</label>
        <input
          id="longitude"
          v-model="form.longitude"
          v-validate="'required'"
          type="number"
          class="form-control"
          placeholder="Masukkan longitude"
          name="longitude"
        />
      </div>
      <div v-if="submitted && errors.has('longitude')" class="alert-danger">
        {{ errors.first("longitude") }}
      </div>
      <div class="form-group mb-3">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import userService from "../../services/user.service";
export default {
  data() {
    return {
      submitted: false,

      form: {
        name: "",
        address: "",
        email: "",
        latitude: "",
        longitude: ""
      }
    };
  },

  methods: {
    async store() {
      this.submitted = true;

      this.$validator.validate().then(async isValid => {
        if (isValid) {
          try {
            let res = await userService.addLocation(this.form);

            if (res.status == 200) {
              this.$toasted.show("Menambah lokasi berhasil", {
                type: "success",
                duration: 3000
              });
              this.$router.push("/lokasi");
            }
          } catch (error) {
            console.log(error);
            this.$toasted.show("Something went wrong", {
              type: "error",
              duration: 3000
            });
          }
        }
      });
    }
  }
};
</script>

<style scoped></style>
