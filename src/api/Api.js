import axios from "axios";
import cookies from "../cookies/Cookies";

const baseUrl = 'http://localhost:8080';
const auth = async (data) => {
  console.log(data);
  const url = new URL(baseUrl);
  url.pathname = "api/v1/auth/login"
  console.log(url.href)
  await axios({
    method: "post",
    url: url.href,
    headers: {
      "Content-Type": 'application/json',
    },
    data: data

  }).then(response => {
    console.log(response.data.type)
    cookies.addCookies("type", response.data.type)
    cookies.addCookies("accessToken", response.data.accessToken)
    cookies.addCookies("refreshToken", response.data.refreshToken)
    // Cookies.methods.addCookies("type" + response.type)
    // Cookies.methods.addCookies("accessToken" + response)
  }).catch(error => {
    console.log(error)
  })
};

const exportedFunctions = {
  auth,
};

export default exportedFunctions;

