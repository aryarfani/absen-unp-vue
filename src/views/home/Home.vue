<template>
  <div class="pl-2 mt-3">
    <h1>Dashboard</h1>

    <!-- Menu Card -->
    <div class="mt-4 row">
      <div class="col-md-6 mb-3 col-xl-3">
        <div class="kartu border-primary rounded shadow">
          <div class="kartu-body row pl-4">
            <div class="col py-2">
              <h4>Kehadiran</h4>
              <p>{{ kehadiran || "-" }}</p>
            </div>
            <div class="col align-self-center">
              <span class="material-icons">
                storage
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-3 col-xl-3">
        <div class="kartu border-primary rounded shadow">
          <div class="kartu-body row pl-4">
            <div class="col py-2">
              <h4>Cuti</h4>
              <p>{{ cuti || "-" }}</p>
            </div>
            <div class="col align-self-center">
              <span class="material-icons">
                store_mall_directory
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-3 col-xl-3">
        <div class="kartu border-primary rounded shadow">
          <div class="kartu-body row pl-4">
            <div class="col py-2">
              <h4>Mahasiswa</h4>
              <p>{{ mahasiswa || "-" }}</p>
            </div>
            <div class="col align-self-center">
              <span class="material-icons">
                group
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-3 col-xl-3">
        <div class="kartu border-primary rounded shadow">
          <div class="kartu-body row pl-4">
            <div class="col py-2">
              <h4>Lokasi</h4>
              <p>{{ lokasi || "-" }}</p>
            </div>
            <div class="col align-self-center">
              <span class="material-icons">
                map
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Menu Card -->

    <div class="container logo mt-5">
      <img src="@/assets/dashboard.svg" />
    </div>
  </div>
</template>

<script>
import UserService from "../../services/user.service";
export default {
  title: "Dashboard",
  data() {
    return {
      lokasi: "",
      mahasiswa: "",
      cuti: "",
      kehadiran: ""
    };
  },
  methods: {
    async getData() {
      let dataLokasi = await UserService.getLocation();
      let dataMahasiswa = await UserService.getMahasiswa();
      let dataCuti = await UserService.getCuti();
      let dataKehadiran = await UserService.getKehadiran();

      this.lokasi = dataLokasi.data.length;
      this.mahasiswa = dataMahasiswa.data.length;
      this.cuti = dataCuti.data.length;
      this.kehadiran = dataKehadiran.data.length;
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style scoped>
.kartu {
  border-left: 0.25rem solid #4e73df !important;
}
.material-icons {
  font-size: 40px !important;
  color: #dddfeb !important;
}

.logo {
  width: 45vw;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
