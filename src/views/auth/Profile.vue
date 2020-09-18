<template>
  <div class="col-md-10">
    <div class="card card-container">
      <img
        id="profile-img"
        src="../../assets/logounp.png"
        class="profile-img-card"
      />
      <p><strong>Name: </strong> {{ admin.name }}</p>
      <p><strong>Email: </strong> {{ admin.email }}</p>
      <p><strong>Phone: </strong> {{ admin.phone }}</p>
      <button @click="handleLogout" class="btn btn-danger">Logout</button>
    </div>
  </div>
</template>
<script>
import UserService from "../../services/user.service";
export default {
  name: "Profile",
  data() {
    return {
      admin: {}
    };
  },
  methods: {
    handleLogout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    }
  },
  mounted() {
    UserService.getCurrentAdmin().then(res => {
      this.admin = res.data;
    });
  }
};
</script>

<style scoped>
.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 20px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
</style>
