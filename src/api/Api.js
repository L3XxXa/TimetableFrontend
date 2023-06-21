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
    cookies.addCookies("type", response.data.type)
    cookies.addCookies("accessToken", response.data.accessToken)
    cookies.addCookies("refreshToken", response.data.refreshToken)
    cookies.addCookies("login", data.login)
  }).catch(error => {
    throw error
  })
  await getRoles(data.login)
};

const getFaculties = async ()=> {
  console.log("Trying to get faculties")
  const accessToken = cookies.getCookies("accessToken")
  const type = cookies.getCookies("type")
  const url = new URL(baseUrl);
  let returnData
  url.pathname = "api/v1/faculty"
  await axios.get(url.href, {
    headers: {
      "Content-Type": 'application/json',
      "Authorization": `${type} ${accessToken}`
    },
  }).then(response => {
    returnData = response
  }).catch(error => {
    console.log(error)
    if (error.response.status === 403){
      refreshToken()
      getFaculties()
    }
  })
  return returnData
};

const getSpecializations = async (facultyId)=> {
  console.log("Trying to get specializations")
  const accessToken = cookies.getCookies("accessToken")
  const type = cookies.getCookies("type")
  const url = new URL(baseUrl);
  let returnData = []
  url.pathname = "api/v1/faculty"
  await axios.get(url.href, {
    headers: {
      "Content-Type": 'application/json',
      "Authorization": `${type} ${accessToken}`
    },
  }).then(response => {
    console.log(`id ${facultyId}`)
    response.data.forEach(faculty => {
      if (faculty.facultyId.toString() === facultyId){
        faculty.specializations.forEach(spec => {
          returnData.push({label: spec.name, value: spec.specializationId})
        })
      }
    })
  }).catch(error => {
    console.log(error)
    if (error.response.status === 403){
      refreshToken()
      getFaculties()
    }
  })
  return returnData
};

const getRoles = async (data)=> {
  console.log(data)
  console.log("Trying to get role for user")
  const accessToken = cookies.getCookies("accessToken")
  const type = cookies.getCookies("type")
  const url = new URL(baseUrl);
  url.pathname = "api/v1/roles"
  await axios.get(url.href, {
    headers: {
      "Content-Type": 'application/json',
      "Authorization": `${type} ${accessToken}`
    },
    params:{
      "login": data
    }
  }).then(response => {
    cookies.addCookies("role", response.data[0])
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

const addSpecialization = async (data, facultyId) => {
  console.log("Trying to add new specialization...")
  console.log(data)
  const accessToken = cookies.getCookies("accessToken")
  const type = cookies.getCookies("type")
  const url = new URL(baseUrl);
  url.pathname = `api/v1/faculty/${facultyId}/specialization`
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
      addSpecialization(data, facultyId)
    }
    console.log(error)
    throw error
  })
};

const addStudyYear = async (data, specializationId) => {
  console.log("Trying to add new study year...")
  console.log(data)
  const accessToken = cookies.getCookies("accessToken")
  const type = cookies.getCookies("type")
  const url = new URL(baseUrl);
  url.pathname = `api/v1/specialization/${specializationId}/studyYear`
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
      addStudyYear(data)
    }
    console.log(error)
    throw error
  })
};

const addFaculty = async(data) => {
  console.log("adding faculty")
  const accessToken = cookies.getCookies("accessToken")
  const type = cookies.getCookies("type")
  const url = new URL(baseUrl);
  url.pathname = "api/v1/faculty"
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
      addFaculty(data)
    }
    console.log(error)
    throw error
  })
}



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
  addRoom,
  getRoles,
  addFaculty,
  getFaculties,
  addSpecialization,
  getSpecializations,
  addStudyYear
};

export default exportedFunctions;

