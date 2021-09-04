import Axios from "axios";

 const common_axios = Axios.create({
  baseURL: "http://3.109.176.19/api",
});

common_axios.interceptors.request.use(
  async (config) => {
    const token1 = await localStorage.getItem("token");
    const token = JSON.parse(token1);
    // console.log(token)
    if (token) {
      config.headers.common = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + token,
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default common_axios;
