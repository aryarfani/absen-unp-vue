import axios from "axios";
import authHeader from "./auth-header";

class UserService {
  getCuti() {
    return axios.get("/admin/cuti", { headers: authHeader() });
  }
  confirmCuti(id) {
    return axios.post(`/admin/cuti/${id}`, { headers: authHeader() });
  }
  getMahasiswa() {
    return axios.get("/admin/user", { headers: authHeader() });
  }
  getLocation() {
    return axios.get("/admin/location", { headers: authHeader() });
  }
  getKehadiran() {
    return axios.get("/admin/kehadiran", { headers: authHeader() });
  }
  getCurrentAdmin() {
    return axios.get("/admin", { headers: authHeader() });
  }
  addLocation(data) {
    return axios.post("/admin/location", data, {
      headers: authHeader(),
      "Content-Type": "multipart/form-data"
    });
  }
  deleteLocation(id) {
    return axios.delete("/admin/location/" + id, {
      headers: authHeader(),
      "Content-Type": "multipart/form-data"
    });
  }
}

export default new UserService();
