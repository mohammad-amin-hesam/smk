import axios from "axios";
import { apiUrl } from "../config.json";
import { toast } from "react-toastify";

function init() {
  axios.defaults.baseURL = apiUrl;
  const jwtToken = localStorage.getItem("token");
  axios.defaults.headers.common.Authorization = `Bearer ${jwtToken}`;
  // axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
}

axios.interceptors.response.use(
  (res) => {
    const isOk = res && res.status >= 200 && res.status < 300;
    if (isOk && res.config.method === "post") {
      toast.success("عملیات با موفقیت انجام شد", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    return res;
  },
  (error) => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedError) {
      toast("خطایی رخ داده است");
    } else {
      if (error.response.status === 401) {
        // window.location = '/login'
      }
      // if (error.response.status === 401) {
      //   window.location.href = '/login'
      // }
    }
    return Promise.reject(error);
  }
);

init();

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};
