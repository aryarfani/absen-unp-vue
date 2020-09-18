<template>
  <div class="container mt-4">
    <h1>Add Admin</h1>

    <form action="#" method="post" @submit.prevent="store">
      <div class="form-group">
        <label for="nama">Nama</label>
        <input
          id="nama"
          type="text"
          class="form-control"
          placeholder="Nama"
          v-model="form.nama"
        />
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="form.email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div class="form-group">
        <label for="alamat">Alamat</label>
        <input
          id="alamat"
          v-model="form.alamat"
          type="text"
          class="form-control"
          placeholder="Alamat"
        />
      </div>
      <div class="form-group">
        <label for="phone">Phone</label>
        <input
          id="phone"
          v-model="form.phone"
          type="number"
          class="form-control"
          placeholder="Phone"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="form.password"
          type="password"
          class="form-control"
          placeholder="Password"
        />
      </div>
      <div class="form-group">
        <label for="password2">Confirm Password</label>
        <input
          id="password2"
          v-model="password2"
          type="password"
          class="form-control"
          placeholder="Re Password"
        />
      </div>
      <!-- Upload File -->
      <img alt="" class="img-thumbnail rounded" :src="gambarPlaceholder" />
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Upload</span>
        </div>
        <div class="custom-file">
          <input
            type="file"
            class="custom-file-input"
            id="gambar"
            accept="image/*"
            ref="gambar"
            @change="onUpload"
          />
          <label class="custom-file-label" for="gambar">
            {{ namaFilePlaceholder }}
          </label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        nama: "",
        alamat: "",
        email: "",
        phone: "",
        password: ""
      },
      password2: "",
      gambarPlaceholder:
        "https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg",
      namaFilePlaceholder: "Pilih Gambar"
    };
  },
  methods: {
    async store() {
      // make new form
      let formData = new FormData();

      // if the password and re-password same
      if (this.form.password == this.password2) {
        formData.append("gambar", this.$refs.gambar.files[0]);
        formData.append("nama", this.form.nama);
        formData.append("alamat", this.form.alamat);
        formData.append("email", this.form.email);
        formData.append("phone", this.form.phone);
        formData.append("password", this.form.password);
      }

      try {
        let res = await axios.post("/admin", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });

        if (res.status == 200) {
          this.$toasted.show("Menambah member berhasil", {
            type: "success",
            duration: 3000
          });
        }
      } catch (error) {
        console.log(error);
        this.$toasted.show("Something went wrong", {
          type: "error",
          duration: 3000
        });
      }
    },
    onUpload() {
      const file = this.$refs.gambar.files[0];
      this.gambarPlaceholder = URL.createObjectURL(file);
      this.namaFilePlaceholder = this.$refs.gambar.files[0].name;
    }
  }
};
</script>

<style scoped>
img {
  width: 200px;
  object-fit: cover;
}
</style>
