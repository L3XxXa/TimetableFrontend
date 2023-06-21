const addCookies = (key, value) => {
  const date = (new Date(Date.now() + 86400e10)).toUTCString();
  document.cookie = `${key}=${value}; expires=${date}`;
};

const getCookies = (key) => {
  const cookies = `; ${document.cookie}`;
  const parts = cookies.split(`; ${key}=`);
  if (parts.length === 2){
    return parts.pop().split(';').shift();
  }
};

const exportedFunctions = {
  addCookies,
  getCookies
};

export default exportedFunctions;