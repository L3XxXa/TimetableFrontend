export default {
  name: 'Api',
  data(){
    return{
      url: 'http://localhost:8080'
    }
  },
  methods:{
    auth(data){
      console.log(data);

    }
  }
}