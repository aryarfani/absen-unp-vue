<template>
  <div class="container mt-4">
    <div
      class="container header d-flex justify-content-between shadow mb-4 px-3 py-2 rounded"
    >
      <h2>Daftar Lokasi</h2>
      <router-link to="/add-lokasi" class="btn btn-primary align-self-center"
        >Tambah Lokasi</router-link
      >
    </div>

    <div class="table-responsive shadow">
      <table class="table">
        <thead class="thead-light">
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Alamat</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(location, index) in locations" :key="location.id">
            <th>{{ index + 1 }}</th>
            <td>{{ location.name }}</td>
            <td>{{ location.address }}</td>
            <td>{{ location.latitude }}</td>
            <td>{{ location.longitude }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import UserService from "../../services/user.service";

export default {
  title: "Lokasi",
  data() {
    return {
      locations: []
    };
  },

  mounted() {
    UserService.getLocation().then(res => {
      if (res.status == 200) {
        this.locations = res.data;
      }
    });
  }
};
</script>
