<template>
  <div class="container mt-4">
    <div
      class="container header d-flex justify-content-between shadow mb-4 px-3 py-2 rounded"
    >
      <h2>Daftar Mahasiswa</h2>
    </div>

    <div class="table-responsive shadow">
      <table class="table">
        <thead class="thead-light">
          <tr>
            <th>No</th>
            <th>Gambar</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Alamat</th>
            <th>NPM</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(mahasiswa, index) in mahasiswas" :key="mahasiswa.id">
            <th>{{ index + 1 }}</th>
            <td>{{ mahasiswa.name }}</td>
            <td>
              <img
                :src="
                  'http://192.168.0.105/laravel/absen-unp/public/images/' +
                    mahasiswa.gambar
                "
                alt=""
              />
            </td>
            <td>{{ mahasiswa.email }}</td>
            <td>{{ mahasiswa.phone }}</td>
            <td>{{ mahasiswa.address }}</td>
            <td>{{ mahasiswa.npm }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import UserService from "../../services/user.service";

export default {
  title: "Mahasiswa",

  data() {
    return {
      mahasiswas: []
    };
  },

  mounted() {
    UserService.getMahasiswa().then(res => {
      if (res.status == 200) {
        this.mahasiswas = res.data;
      }
    });
  }
};
</script>
