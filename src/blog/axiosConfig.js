import axios from "axios";

export default axios.create({
    baseURL: "http://Jae.restful.training/api/blog",
    params: {
        key: "0bb9db093be7e7d0584afc2b334b9763ae0e83f7",
    },
    headers: {
        Accept: "application/json",
    },
});