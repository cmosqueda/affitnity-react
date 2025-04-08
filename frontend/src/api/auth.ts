import axios from "axios";

// set auth api
const AUTH_AXIOS = axios.create({
  baseURL: "http://localhost:8000",
});

// default url login -> /users/login/

// login API
const loginApi = async (url: string = "/users/login/", data: { [key: string]: any }) => {
  try {
    const res = await AUTH_AXIOS.post(url, data);
    console.log(res.data);
    return res;
  } catch (err: any) {
    console.error(err.message);
    throw err;
  }
};

// default url register -> /users/register/

// register API
const registerApi = async (url: string = "/users/register/", data: { [key: string]: any }) => {
  try {
    const res = await AUTH_AXIOS.post(url, data);
    console.log(res.data);
    return res;
  } catch (err: any) {
    console.error(err.message);
    throw err;
  }
};

export { loginApi, registerApi };
