import axios from "axios";
import cookies from "../cookies/Cookies";

const baseUrl = 'http://localhost:8080';
const auth = async (data) => {
  const url = new URL(baseUrl);
  url.pathname = "api/v1/auth/login"
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
    if (error.response.status === 403){
      refreshToken()
      getFaculties()
    }
  })
  return returnData
};

const getSpecializations = async (facultyId)=> {
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
    response.data.forEach(faculty => {
      if (faculty.facultyId.toString() === facultyId){
        faculty.specializations.forEach(spec => {
          returnData.push({label: spec.name, value: spec.specializationId})
        })
      }
    })
  }).catch(error => {
    if (error.response.status === 403){
      refreshToken()
      getFaculties()
    }
  })
  return returnData
};

const getStudyYears = async (facultyId, specializationId)=> {
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
    response.data.forEach(faculty => {
      if (faculty.facultyId.toString() === facultyId){
        faculty.specializations.forEach(spec => {
          if (spec.specializationId.toString() === specializationId){
            spec.studyYears.forEach(year => {
              console.log(year)
              returnData.push({label: year.year, value: year.studyYearId})
            })
          }
        })
      }
    })
  }).catch(error => {
    if (error.response.status === 403){
      refreshToken()
      getFaculties()
    }
  })
  return returnData
};

const getRoles = async (data)=> {
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
  })
};

const refreshToken = async () => {
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
    cookies.addCookies("type", response.data.type)
    cookies.addCookies("accessToken", response.data.accessToken)
  }).catch(error => {
  })
};


// 403 прилетает - обновляем токен

const addUser = async (data) => {
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
  }).catch(error => {
    if(error.response.status === 403){
      refreshToken()
      addUser(data)
    }
    throw error
  })
};

const addSpecialization = async (data, facultyId) => {
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
  }).catch(error => {
    if(error.response.status === 403){
      refreshToken()
      addSpecialization(data, facultyId)
    }
    throw error
  })
};
const addStudyYear = async (data, specializationId) => {
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
  }).catch(error => {
    if(error.response.status === 403){
      refreshToken()
      addStudyYear(data)
    }
    throw error
  })
};

const addGroup = async (data, studyYearId) => {
  const accessToken = cookies.getCookies("accessToken")
  const type = cookies.getCookies("type")
  const url = new URL(baseUrl);
  url.pathname = `api/v1/studyYear/${studyYearId}/group`
  await axios({
    method: "post",
    url: url.href,
    headers: {
      "Content-Type": 'application/json',
      "Authorization": `${type} ${accessToken}`
    },
    data: data
  }).then(response => {
  }).catch(error => {
    if(error.response.status === 403){
      refreshToken()
      addGroup(data)
    }
    throw error
  })
};

const addFaculty = async(data) => {
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
  }).catch(error => {
    if(error.response.status === 403){
      refreshToken()
      addFaculty(data)
    }
    throw error
  })
}



const addRoom = async (data) => {
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
  }).catch(error => {
    if(error.response.status === 403){
      refreshToken()
      addUser(data)
    }
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
  addStudyYear,
  getStudyYears,
  addGroup
};

export default exportedFunctions;

