import axios from "axios";

class AuthService {
  login(user) {
    return axios
      .post("/admin/login", {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.access_token) {
          localStorage.setItem(
            "token",
            JSON.stringify(response.data.access_token)
          );
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("token");
    return axios.post("/admin/logout");
  }

  register(user) {
    return axios.post("/admin/register", {
      name: user.name,
      email: user.email,
      phone: user.phone,
      password: user.password
    });
  }
}

export default new AuthService();
