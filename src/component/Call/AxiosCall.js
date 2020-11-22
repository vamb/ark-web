import Axios from "axios";

const AxiosCall = {}

AxiosCall.postFun = () =>{
  console.log('postFun working')
  Axios.post('192.168.2.7:8080/agent/getAll')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}

export default AxiosCall