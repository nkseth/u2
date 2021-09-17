import common_axios from "../../utils/axios.config";

class HomepageDataService {
  getAll() {
    return common_axios.get("/category-subgrps");
  }

  get(id) {
    return common_axios.get(`/categories/${id}`);
  }

  create(data) {
    return common_axios.post("/categories", data);
  }

  update(id, data) {
    return common_axios.put(`/categories/${id}`, data);
  }

  delete(id) {
    return common_axios.delete(`/categories/${id}`);
  }

  deleteAll() {
    return common_axios.delete(`/categories`);
  }

  findByTitle(title) {
    return common_axios.get(`/categories?title=${title}`);
  }

  getSection1Sliders(){
    return common_axios.get('/sliders')
  }
}

export default new HomepageDataService();