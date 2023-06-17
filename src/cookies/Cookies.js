export default {
  name: this,
  methods: {
    addCookies(key, value){
      const date = (new Date(Date.now() + 86400e10)).toUTCString();
      console.log(`Adding cookie ${key} value=${value} expiring ${date}`);
      document.cookie = `${key}=${value}; expires=${date}`;
      console.log(`Added cookie ${key}`);
    },
    getCookies(key){
      const cookies = `; ${document.cookie}`;
      const parts = cookies.split(`; ${key}=`);
      if (parts.length === 2){
        return parts.pop().split(';').shift();
      }
    },
  }
}