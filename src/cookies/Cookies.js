const addCookies = (key, value) => {
  const date = (new Date(Date.now() + 86400e10)).toUTCString();
  console.log(`Adding cookie ${key} value=${value} expiring ${date}`);
  document.cookie = `${key}=${value}; expires=${date}`;
  console.log(`Added cookie ${key}`);
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