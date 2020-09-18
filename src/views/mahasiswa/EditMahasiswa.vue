<template>
  <div class="container mt-4">
    <div class="header d-flex justify-content-between">
      <h1>Edit Member</h1>
      <button @click="deleteMember" class="btn btn-danger align-self-center">
        x
      </button>
    </div>

    <form action="#" method="post" @submit.prevent="updateMember">
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
      <button type="submit" class="btn btn-primary">Update</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      member: [],
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
    // to get member based on id given by param from route
    async getMember() {
      const id = this.$route.params.id;
      try {
        let res = await axios.get("/member/" + id);
        if (res.status == 200) {
          this.form = res.data;
          this.form.password = "";
          this.gambarPlaceholder = res.data["gambar"];
        }
      } catch (error) {
        console.log(error);
      }
    },
    async updateMember() {
      // make new form
      let formData = new FormData();

      // if the password and re-password not same return
      if (this.form.password != this.password2 || this.form.password == "") {
        this.$toasted.show("Password and re password must be same", {
          type: "error",
          duration: 3000
        });
        return;
      }

      // if the picture is not updated
      // it will insert "gambar_lama" request with gambar from member data
      // else it will insert new picture in gambar request
      if (this.$refs.gambar.files[0] != undefined) {
        formData.append("gambar", this.$refs.gambar.files[0]);
      } else {
        formData.append("gambar_lama", this.gambarPlaceholder);
      }
      formData.append("nama", this.form.nama);
      formData.append("alamat", this.form.alamat);
      formData.append("email", this.form.email);
      formData.append("phone", this.form.phone);
      formData.append("password", this.form.password);

      try {
        let res = await axios.post(
          "/member/" + this.$route.params.id,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }
        );

        if (res.status == 200) {
          this.$toasted.show("Berhasil mengupdate member", {
            type: "success",
            duration: 3000
          });
          this.$router.push("/member");
        }
      } catch (error) {
        console.log(error);
        this.$toasted.show("Something went wrong", {
          type: "error",
          duration: 3000
        });
      }
    },
    // function to set picture and name to element after inputing picture
    onUpload() {
      const file = this.$refs.gambar.files[0];
      this.gambarPlaceholder = URL.createObjectURL(file);
      this.namaFilePlaceholder = this.$refs.gambar.files[0].name;
    },
    // function to delete member
    async deleteMember() {
      try {
        var res = await axios.post("/member/" + this.$route.params.id, {
          _method: "delete"
        });
        if (res.status == 200) {
          this.$toasted.show("Member deleted", {
            type: "success",
            duration: 3000
          });
          this.$router.push("/member");
        }
      } catch (error) {
        console.log(error);
        this.$toasted.show("Something went wrong", {
          type: "error",
          duration: 3000
        });
      }
    }
  },
  mounted() {
    this.getMember();
  }
};
</script>

<style scoped>
img {
  width: 200px;
  object-fit: cover;
}
</style>
