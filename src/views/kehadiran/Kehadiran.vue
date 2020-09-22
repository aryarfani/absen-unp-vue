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
            <th>Tanggal</th>
            <th>Nama</th>
            <th>Lokasi</th>
            <th>Status</th>
            <th>Telat / Lembur</th>
            <th>IMEI</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(kehadiran, index) in kehadirans" :key="kehadiran.id">
            <th>{{ index + 1 }}</th>
            <td>{{ kehadiran.created_at }}</td>
            <td>{{ kehadiran.name }}</td>
            <td>{{ kehadiran.location }}</td>
            <td>
              <p class="badge badge-warning" v-if="kehadiran.status == 0">
                Pulang
              </p>
              <p class="badge badge-success" v-if="kehadiran.status == 1">
                Hadir
              </p>
            </td>
            <td v-if="kehadiran.keterlambatan > 0">
              {{ Math.floor(kehadiran.keterlambatan / 60) }} jam
              {{
                Math.round(
                  (kehadiran.keterlambatan / 60 -
                    Math.floor(kehadiran.keterlambatan / 60)) *
                    60
                )
              }}
              menit
            </td>
            <td>{{ kehadiran.imei }}</td>
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
