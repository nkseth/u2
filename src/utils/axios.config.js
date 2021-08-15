import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://almond-tropical-cloudberry.glitch.me/",
});

axios.interceptors.request.use(
  async (config) => {
    const token1 = await localStorage.getItem("token");
    const token = JSON.parse(token1);
    // console.log(token)
    if (token) {
      config.headers.common = {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + token,
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
