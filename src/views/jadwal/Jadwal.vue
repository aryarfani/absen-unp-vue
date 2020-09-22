<template>
  <div class="container mt-4">
    <div
      class="container header d-flex justify-content-between shadow mb-4 px-3 py-2 rounded"
    >
      <h2>Atur Jadwal</h2>
    </div>
    <div class="container">
      <div>
        <h5>Jam Waktu Hadir</h5>
        <vue-timepicker
          close-on-complete
          v-model="jadwal_hadir"
          format="HH:mm"
        ></vue-timepicker>
      </div>

      <div>
        <h5 class="mt-3">Jam Waktu Pulang</h5>
        <vue-timepicker
          close-on-complete
          v-model="jadwal_pulang"
          format="HH:mm"
        ></vue-timepicker>
      </div>
      <button @click="addJadwal" class="btn btn-primary px-5 mt-4">
        SIMPAN
      </button>
    </div>
  </div>
</template>

<script>
import UserService from "../../services/user.service";
import VueTimepicker from "vue2-timepicker/src/vue-timepicker.vue";

export default {
  title: "Lokasi",
  data() {
    return {
      locations: [],
      jadwal_hadir: "",
      jadwal_pulang: ""
    };
  },
  components: {
    VueTimepicker
  },
  methods: {
    async addJadwal() {
      var form = {
        // jadwal_hadir: `${this.jadwal_hadir.HH}:${this.jadwal_hadir.mm}`,
        // jadwal_pulang: `${this.jadwal_pulang.HH}:${this.jadwal_pulang.mm}`
        jadwal_hadir: this.jadwal_hadir,
        jadwal_pulang: this.jadwal_pulang
      };

      UserService.updateJadwal(form).then(res => {
        if (res.status == 200) {
          this.fetchJadwal();
          this.$toasted.show("Jadwal berhasil diupdate", {
            type: "success",
            duration: 3000
          });
        }
      });
    },
    async fetchJadwal() {
      UserService.getJadwal().then(res => {
        if (res.status == 200) {
          this.jadwal_hadir = res.data[0].jadwal_hadir;
          this.jadwal_pulang = res.data[0].jadwal_pulang;
        }
      });
    }
  },
  mounted() {
    this.fetchJadwal();
  }
};
</script>
