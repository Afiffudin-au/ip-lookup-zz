import Axios from 'axios'

export const useGetReqIpAddr = ()=>{
  const GetReqIpAddr = ()=>{
    Axios({
      method : 'GET',
      url : `http://api.ipstack.com/check`,
      params : {
        access_key : process.env.REACT_APP_API_KEY
      }
    }).then(res=>{
      console.log(res.data)
    }).catch(err=>{
      alert(err)
    })
  }
  return{
    GetReqIpAddr
  }
}