import axios from "axios";

const axiosApiIntances = axios.create({
  baseURL: "https://www.techinasia.com/wp-json/techinasia/2.0/",
});

export default axiosApiIntances;
