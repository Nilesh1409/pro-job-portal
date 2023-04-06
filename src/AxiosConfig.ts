import axios from "axios";

let token:any = localStorage.getItem('token')
// let parsedToken: any = token ? JSON.parse(token) : null;

const AxiosConfig = axios.create({
    baseURL: "http://localhost:8080/api/",
    headers: {
		Accept: 'application/json',
    Authorization: `Bearer ${token}`,
	},
});

export default AxiosConfig;
