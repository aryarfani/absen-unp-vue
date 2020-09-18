<template>
  <div class="container mt-4">
    <div
      class="container header d-flex justify-content-between shadow mb-4 px-3 py-2 rounded"
    >
      <h2>Kehadiran</h2>
    </div>

    <div class="table-responsive shadow">
      <table class="table">
        <thead class="thead-light">
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Lokasi</th>
            <th>IMEI</th>
            <th>Tanggal</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(kehadiran, index) in kehadirans" :key="kehadiran.id">
            <th>{{ index + 1 }}</th>
            <td>{{ kehadiran.name }}</td>
            <td>{{ kehadiran.location }}</td>
            <td>{{ kehadiran.imei }}</td>
            <td>{{ kehadiran.created_at }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import UserService from "../../services/user.service";

export default {
  title: "Kehadiran",

  data() {
    return {
      kehadirans: []
    };
  },

  mounted() {
    UserService.getKehadiran().then(res => {
      if (res.status == 200) {
        this.kehadirans = res.data;
      }
    });
  }
};
</script>
