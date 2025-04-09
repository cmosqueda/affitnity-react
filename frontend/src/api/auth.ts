import axios from "axios";

// set auth axios instance
const AUTH_AXIOS = axios.create({
  baseURL: "http://localhost:8000",
});

// auth api -> login and register
// default url login -> /users/login/
// default url register -> /users/register/

const authApi = async (url: string, data: { [key: string]: any }) => {
  try {
    const res = await AUTH_AXIOS.post(url, data);
    console.log(res.data);
    return res;
  } catch (err: any) {
    console.error(err.message);
    throw err;
  }
};

export { authApi };
