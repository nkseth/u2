// import axios from "../../utils/axios.config";

import axios from "axios";

class DesignerHomePageDataService {
  topCategories(slug) {
    return axios.get("/category-subgrps", slug);
  }

  getTrending(params) {
    return axios.post(`/themeOption`, params);
  }

  popularCategory() {
    return axios.get(`/banners/designer_home/designer_group_1`);
  }

  suitWear() {
    return axios.post(`/themeOption`, {
      dashboard_type: "designer_home",
      content_type: "womens-fashion",
      group_name: "suit_wear",
    });
  }

  topDesigner() {
    return axios.post(`/themeOption/`, {
      dashboard_type: "designer_home",
      content_type: "womens-fashion",
      group_name: "top_designer",
    });
  }

  topSeasonOffers() {
    return axios.get("/banners/designer_home/designer_group_2", {
      "1st": "designer_home",
      "2and": "designer_group_2",
    });
  }

  handMadeClothes() {
    return axios.post(`/themeOption/`, {
      dashboard_type: "designer_home",
      content_type: "mens-fashion",
      group_name: "hand_made_cloth",
    });
  }
}

export default new DesignerHomePageDataService();
