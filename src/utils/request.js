import axios from "axios";

const instance = axios.create({
  baseURL: "http://api.nlecloud.com",
});

export default instance;
