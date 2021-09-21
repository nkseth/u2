import common_axios from "../../utils/axios.config";

class DesignerHomePageDataService {
  topCategories(slug) {
    return common_axios.get("/category-subgrps", slug);
  }

  getTrending() {
    return common_axios.post(`/themeOption`, {
      dashboard_type: "designer_home",
      content_type: "all",
      group_name: "trending_categories",
    });
  }

  popularCategory() {
    return common_axios.get(`/banners/designer_home/designer_group_1`);
  }

  suitWear(type) {
    return common_axios.post(`/themeOption`, {
      dashboard_type: "designer_home",
      content_type: "all",
      group_name: "suit_wear",
    });
  }

  topDesigner() {
    return common_axios.post(`/themeOptionDesigner`);
  }

  topSeasonOffers() {
    return common_axios.get("/banners/designer_home/designer_group_2");
  }

  handMadeClothes(type) {
    return common_axios.post(`/themeOption`, {
      dashboard_type: "designer_home",
      content_type: "all",
      group_name: "hand_made_cloth",
    });
  }
}

export default new DesignerHomePageDataService();
