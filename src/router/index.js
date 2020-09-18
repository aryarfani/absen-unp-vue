import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home/Home.vue";

import Cuti from "@/views/cuti/Cuti.vue";

import Lokasi from "@/views/lokasi/Lokasi.vue";
import AddLokasi from "@/views/lokasi/AddLokasi.vue";

import Mahasiswa from "@/views/mahasiswa/Mahasiswa.vue";
import AddMahasiswas from "@/views/mahasiswa/AddMahasiswa.vue";
import EditMahasiswa from "@/views/mahasiswa/EditMahasiswa.vue";

import Kehadiran from "@/views/kehadiran/Kehadiran.vue";
import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";
import Profile from "@/views/auth/Profile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/cuti",
    name: "cuti",
    component: Cuti
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/lokasi",
    name: "lokasi",
    component: Lokasi
  },
  {
    path: "/kehadiran",
    name: "kehadiran",
    component: Kehadiran
  },
  {
    path: "/mahasiswa",
    name: "mahasiswa",
    component: Mahasiswa
  },

  {
    path: "/add-mahasiswa",
    name: "addMahasiswa",
    component: AddMahasiswas
  },
  {
    path: "/edit-mahasiswa",
    name: "editMahasiswa",
    component: EditMahasiswa
  },
  {
    path: "/add-lokasi",
    name: "addLokasi",
    component: AddLokasi
  }
];

const router = new VueRouter({
  mode: "history",
  linkActiveClass: "active",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, _, next) => {
  const publicPages = ["/login", "/register"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("token");

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next("/login");
  } else {
    next();
  }
});

export default router;
