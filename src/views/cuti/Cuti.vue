<template>
  <div class="container mt-4 ">
    <div
      class="container header d-flex justify-content-between shadow mb-4 px-3 py-2 rounded"
    >
      <h2>Daftar Cuti</h2>
    </div>

    <div class="table-responsive shadow">
      <table class="table">
        <thead class="thead-light">
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Judul</th>
            <th>Keterangan</th>
            <th>Tanggal Mulai</th>
            <th>Tanggal Akhir</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(cuti, index) in cutis" :key="cuti.id">
            <th>{{ index + 1 }}</th>
            <td>{{ cuti.name }}</td>
            <td>{{ cuti.judul }}</td>
            <td>{{ cuti.keterangan }}</td>
            <td>{{ cuti.tanggal_mulai }}</td>
            <td>{{ cuti.tanggal_akhir }}</td>

            <td>
              <p class="badge badge-warning" v-if="cuti.status == 0">
                Menunggu
              </p>
              <p class="badge badge-success" v-if="cuti.status == 1">
                Dikonfirmasi
              </p>
            </td>
            <template v-if="cuti.status == 0">
              <td>
                <button @click="confirmCuti(cuti.id)" class="btn btn-success">
                  ✓
                </button>
              </td>
            </template>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import UserService from "../../services/user.service";

export default {
  title: "Cuti",

  data() {
    return {
      cutis: []
    };
  },
  methods: {
    async confirmCuti(id) {
      if (confirm("Anda ingin mengkonfirmasi ini ?")) {
        UserService.confirmCuti(id).then(res => {
          if (res.status == 200) {
            this.$toasted.show("Cuti berhasil dikonfirmasi", {
              type: "success",
              duration: 3000
            });
            UserService.getCuti().then(response => {
              this.cutis = response.data;
            });
          }
        });
      }
    }
  },
  mounted() {
    UserService.getCuti().then(res => {
      this.cutis = res.data;
    });
  }
};
</script>

<style></style>
