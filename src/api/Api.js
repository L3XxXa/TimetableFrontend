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
  }).catch(error => {
    console.log(error)
  })
};

const refreshToken = async () => {
  console.log("Trying to get new JWT")
  const type = cookies.getCookies("type")
  const accessToken = cookies.getCookies("accessToken")
  const refreshToken = cookies.getCookies("refreshToken")
  const url = new URL(baseUrl);
  url.pathname = "api/v1/auth/token"
  await axios({
    method: "post",
    url: url.href,
    headers: {
      "Content-Type": 'application/json',
      "Authorization": `${type} ${accessToken}`
    },
    data: {
      "refreshToken": refreshToken
    }
  }).then(response => {
    console.log(response.data.type)
    cookies.addCookies("type", response.data.type)
    cookies.addCookies("accessToken", response.data.accessToken)
  }).catch(error => {
    console.log(error)
  })
};

// 403 прилетает - обновляем токен

const addUser = async (data) => {
  console.log("Trying to add new user...")
  console.log(data)
  const accessToken = cookies.getCookies("accessToken")
  const type = cookies.getCookies("type")
  const url = new URL(baseUrl);
  url.pathname = "api/v1/auth/register/admin"
  await axios({
    method: "post",
    url: url.href,
    headers: {
      "Content-Type": 'application/json',
      "Authorization": `${type} ${accessToken}`
    },
    data: data
  }).then(response => {
    console.log("response: " + response)
  }).catch(error => {
    if(error.response.status === 403){
      refreshToken()
      addUser(data)
    }
    console.log(error)
    throw error
  })
};

const addRoom = async (data) => {
  console.log("Trying to add new room...")
  console.log(data)
  const accessToken = cookies.getCookies("accessToken")
  const type = cookies.getCookies("type")
  const url = new URL(baseUrl);
  url.pathname = "api/v1/room"
  await axios({
    method: "post",
    url: url.href,
    headers: {
      "Content-Type": 'application/json',
      "Authorization": `${type} ${accessToken}`
    },
    data: data
  }).then(response => {
    console.log("response: " + response)
  }).catch(error => {
    if(error.response.status === 403){
      refreshToken()
      addUser(data)
    }
    console.log(error)
    throw error
  })
};

const exportedFunctions = {
  auth,
  refreshToken,
  addUser,
  addRoom
};

export default exportedFunctions;

