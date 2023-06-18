import axios from "axios";

const baseUrl = 'http://localhost:8080';
const auth = async (data) => {
  console.log(data);
  const url = new URL(baseUrl);
  url.pathname = "api/v1/auth/login"
  await axios({
    method: "post",
    url: url.href,
    headers: {
      "Content-Type": 'application/json',
      data: data
    }
  }).then(response => {
    console.log(response)
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

