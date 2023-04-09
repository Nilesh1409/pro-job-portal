import axios from "axios";

let token: any = localStorage.getItem("token");
// let parsedToken: any = token ? JSON.parse(token) : null;

const AxiosConfig = axios.create({
  baseURL: "https://pro-consultent-new-app-backend.onrender.com/api/",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export default AxiosConfig;
