import axios from "axios";
import Cookies from "../cookies/Cookies";

export default {
  name: 'Api',
  data(){
    return{
      url: 'http://localhost:8080'
    }
  },
  methods:{
    async auth(data){
      console.log(data);
      const url = new URL(this.url);
      url.pathname = "api/v1/auth/login"
      await axios({
        method: "post",
        url: url.href,
        headers:{
          "Content-Type": 'application/json',
          data: data
        }
      }).then(response=> {
        console.log(response)
        // Cookies.methods.addCookies("type" + response.type)
        // Cookies.methods.addCookies("accessToken" + response)
      }).catch(error => {
        console.log(error)
      })
    }
  }
}