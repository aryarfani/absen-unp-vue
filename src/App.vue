<template>
  <div id="app">
    <Sidebar v-if="!hide" />
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
export default {
  components: {
    Sidebar
  },
  computed: {
    hide() {
      return this.$route.path === "/login" || this.$route.path === "/register";
    }
  }
};
</script>
// Global Style Only
<style>
.main {
  position: relative;
  margin-left: 210px;
}
img {
  width: 60px;
  height: 60px;
  object-fit: cover;
}

.table {
  width: 1%;
}

@media only screen and (max-width: 768px) {
  /* .table {
    white-space: nowrap;
  } */

  .sidebar {
    display: none;
  }

  .main {
    margin-left: 0;
  }
}
</style>
