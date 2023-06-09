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

const getTeachers = async ()=> {
  const accessToken = cookies.getCookies("accessToken")
  const type = cookies.getCookies("type")
  const url = new URL(baseUrl);
  let returnData = []
  url.pathname = "api/v1/teacher"
  await axios.get(url.href, {
    headers: {
      "Content-Type": 'application/json',
      "Authorization": `${type} ${accessToken}`
    },
  }).then(response => {
    response.data.forEach(d => {
      returnData.push({label: d.name, value: d.teacherId})
    })
  }).catch(error => {
    if (error.response.status === 403){
      refreshToken()
      getTeachers()
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
      getSpecializations(facultyId)
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
      getStudyYears(facultyId, specializationId)
    }
  })
  return returnData
};

const getGroups = async (facultyId, specializationId, studyYearId)=> {
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
              if (year.studyYearId.toString() === studyYearId){
                year.groups.forEach(group => {
                  console.log(group)
                  returnData.push({label: group.number, value: group.groupId})
                })
              }
            })
          }
        })
      }
    })
  }).catch(error => {
    if (error.response.status === 403){
      refreshToken()
      getGroups(facultyId, specializationId, studyYearId)
    }
  })
  return returnData
};

const getGroupsByFaculty = async(facultyName) => {
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
    response.data.forEach(d => {
      if (d.name === facultyName){
        d.specializations.forEach(spec => {
          spec.studyYears.forEach(year => {
            year.groups.forEach(group => {
              returnData.push({
                group: group.number,
                year: year.year
              })
            })
          })
        })
      }
    })
  }).catch(error => {
    if (error.response.status === 403){
      refreshToken()
      getGroupsByFaculty(facultyName)
    }
  })
  return returnData
}

const getSubjects = async (facultyId, specializationId, studyYearId)=> {
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
              if (year.studyYearId.toString() === studyYearId){
                year.subjects.forEach(subject => {
                  console.log(subject)
                  returnData.push({label: subject.name, value: subject.subjectId})
                })
              }
            })
          }
        })
      }
    })
  }).catch(error => {
    if (error.response.status === 403){
      refreshToken()
      getGroups(facultyId, specializationId, studyYearId)
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

const generateAlgo = async ()=> {
  const accessToken = cookies.getCookies("accessToken")
  const type = cookies.getCookies("type")
  const url = new URL(baseUrl);
  url.pathname = "api/v321/generate"
  await axios.get(url.href, {
    headers: {
      "Content-Type": 'application/json',
      "Authorization": `${type} ${accessToken}`
    },
  }).then(response => {
  }).catch(error => {
    console.log(error)
  })
};

const getTimetableByGroup = async (group)=> {
  let returnData
  const accessToken = cookies.getCookies("accessToken")
  const type = cookies.getCookies("type")
  const url = new URL(baseUrl);
  url.pathname = "api/v1/timetable/"
  await axios.get(url.href, {
    headers: {
      "Content-Type": 'application/json',
      "Authorization": `${type} ${accessToken}`
    },
    params: {
      group: group
    }
  }).then(response => {
    returnData = response.data
  }).catch(error => {
    console.log(error)
  })
  return returnData
};

const getTimetableByTeacher = async (teacher)=> {
  let returnData
  const accessToken = cookies.getCookies("accessToken")
  const type = cookies.getCookies("type")
  const url = new URL(baseUrl);
  url.pathname = "api/v1/timetable/"
  await axios.get(url.href, {
    headers: {
      "Content-Type": 'application/json',
      "Authorization": `${type} ${accessToken}`
    },
    params: {
      teacher: teacher
    }
  }).then(response => {
    returnData = response.data
  }).catch(error => {
    console.log(error)
  })
  return returnData
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
      addStudyYear(data, specializationId)
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
      addGroup(data, studyYearId)
    }
    throw error
  })
};

const addSubject = async (data, studyYearId) => {
  const accessToken = cookies.getCookies("accessToken")
  const type = cookies.getCookies("type")
  const url = new URL(baseUrl);
  url.pathname = `api/v1/studyYear/${studyYearId}/subject`
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
      addSubject(data, studyYearId)
    }
    throw error
  })
};

const addLesson = async (data, subjectId) => {
  const accessToken = cookies.getCookies("accessToken")
  const type = cookies.getCookies("type")
  const url = new URL(baseUrl);
  url.pathname = `api/v1/subject/${subjectId}/lesson`
  await axios({
    method: "post",
    url: url.href,
    headers: {
      "Content-Type": 'application/json',
      "Authorization": `${type} ${accessToken}`
    },
    data: data
  }).then(response => {
    addTeacherToLesson(data.teacher, response.data.lessonId)
  }).catch(error => {
    if(error.response.status === 403){
      refreshToken()
      addLesson(data, subjectId)
    }
    throw error
  })
};

const addTeacherToLesson = async (teacherId, lessonId) => {
  const accessToken = cookies.getCookies("accessToken")
  const type = cookies.getCookies("type")
  const url = new URL(baseUrl);
  url.pathname = `api/v1/teacher/${teacherId}/lessons/${lessonId}`
  await axios({
    method: "post",
    url: url.href,
    headers: {
      "Content-Type": 'application/json',
      "Authorization": `${type} ${accessToken}`
    },
  }).then(response => {
  }).catch(error => {
    if(error.response.status === 403){
      refreshToken()
      addTeacherToLesson(teacherId, lessonId)
    }
    throw error
  })
};

const addStudent = async (data, groupId) => {
  const accessToken = cookies.getCookies("accessToken")
  const type = cookies.getCookies("type")
  const url = new URL(baseUrl);
  url.pathname = `api/v1/group/${groupId}/student`
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
      addStudent(data)
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

const addTeacher = async(data) => {
  const accessToken = cookies.getCookies("accessToken")
  const type = cookies.getCookies("type")
  const url = new URL(baseUrl);
  url.pathname = "api/v1/teacher"
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
      addTeacher(data)
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
  addGroup,
  getGroups,
  addStudent,
  addSubject,
  getSubjects,
  addLesson,
  addTeacher,
  getTeachers,
  getGroupsByFaculty,
  generateAlgo,
  getTimetableByGroup,
  getTimetableByTeacher
};

export default exportedFunctions;