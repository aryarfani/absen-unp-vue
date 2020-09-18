<template>
  <div class="sidebar shadow">
    <div class="left-sidebar">
      <ul class="nav flex-column sidebar-nav">
        <li class="navbar-brand pb-0" id="brand">
          <router-link
            exact
            to="/"
            class="nav-link d-flex flex-column justify-content-center text-center pb-0"
          >
            <img class="img-fluid mx-auto" src="../assets/logounp.png" />
            <p>Absen UNP</p>
          </router-link>
        </li>
        <li class="nav-item divider pr-2">
          <hr />
        </li>
        <li class="nav-item mb-3">
          <router-link exact to="/" class="nav-link d-inline-flex">
            <span class="mr-3 material-icons">
              dashboard
            </span>
            Dashboard
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/kehadiran" class="nav-link d-inline-flex">
            <span class="mr-3 material-icons">
              storage
            </span>
            Kehadiran
          </router-link>
        </li>
        <li class="nav-item mt-3">
          <router-link to="/cuti" class="nav-link d-inline-flex" href="#">
            <span class="mr-3 material-icons">
              store_mall_directory
            </span>
            Cuti
          </router-link>
        </li>
        <li class="nav-item mt-3">
          <router-link to="/mahasiswa" class="nav-link d-inline-flex" href="#">
            <span class="mr-3 material-icons">
              group
            </span>
            Mahasiswa
          </router-link>
        </li>
        <li class="nav-item mt-3">
          <router-link to="/lokasi" class="nav-link d-inline-flex" href="#">
            <span class="mr-3 material-icons">
              map
            </span>
            Lokasi
          </router-link>
        </li>
        <li class="nav-item mt-3">
          <router-link to="/profile" class="nav-link d-inline-flex" href="#">
            <span class="mr-3 material-icons">
              account_circle
            </span>
            Profile
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
#brand span {
  font-size: 50px;
  transform: rotate(18deg);
  color: rgb(255, 255, 255);
}
#brand p {
  color: rgb(255, 255, 255);
}

img {
  width: 100px;
  height: auto;
}
hr {
  border: 1px solid rgba(255, 255, 255, 0.596);
}
.sidebar {
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  z-index: 100;
  width: 210px;
  padding: 10px 0 0 10px;
  background-color: #2f55c8f6;
  border-right: 1px solid #d3d3d3;
}

.left-sidebar {
  font-size: 14px;
  top: 0;
}

.sidebar-nav li .nav-link {
  color: rgba(255, 255, 255, 0.5);
  font-weight: 500;
}

.sidebar-nav li .nav-link:hover {
  color: rgb(255, 255, 255);
}

.sidebar-nav li .active {
  color: rgb(255, 255, 255);
}
</style>
