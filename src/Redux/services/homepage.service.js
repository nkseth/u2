import axios from "../../utils/axios.config";

class HomepageDataService {
  getAll() {
    return axios.get("/category-subgrps");
  }

  get(id) {
    return axios.get(`/categories/${id}`);
  }

  create(data) {
    return axios.post("/categories", data);
  }

  update(id, data) {
    return axios.put(`/categories/${id}`, data);
  }

  delete(id) {
    return axios.delete(`/categories/${id}`);
  }

  deleteAll() {
    return axios.delete(`/categories`);
  }

  findByTitle(title) {
    return axios.get(`/categories?title=${title}`);
  }
}

export default new HomepageDataService();