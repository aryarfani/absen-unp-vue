<template>
  <div class="container mt-4 ">
    <div class="header d-flex justify-content-between">
      <h1>Admins</h1>
      <router-link to="/add-admin" class="btn btn-primary align-self-center"
        >+</router-link
      >
    </div>
    <div class="shadow p-3">
      <table class="table">
        <thead class="thead-light">
          <tr>
            <th>No</th>
            <th>Gambar</th>
            <th>Nama</th>
            <th>Alamat</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(admin, index) in admins" :key="admin.id">
            <th>{{ index + 1 }}</th>
            <td><img :src="admin.gambar" alt="" /></td>
            <td>{{ admin.nama }}</td>
            <td>{{ admin.alamat }}</td>
            <td>{{ admin.email }}</td>
            <td>{{ admin.phone }}</td>
            <td>
              <router-link
                :to="{ name: 'editAdmin', params: { id: admin.id } }"
                class="btn btn-warning"
                >Edit</router-link
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      admins: []
    };
  },
  methods: {
    async getAdmin() {
      var res = await axios.get("/admin");
      console.log(res);
      if (res.status == 200) {
        this.admins = res.data;
      }
    }
  },
  mounted() {
    this.getAdmin();
  }
};
</script>

<style></style>
