import Axios from "axios"
import { useDispatch } from "react-redux"
import { addIpLookup } from "../features/ipAddrSlice"

export const useGetLookupIpAddr = ()=>{
  const dispatch = useDispatch()
  const getLookupIpAddr = (ip)=>{
    dispatch(addIpLookup({
      loading :  true,
    }))
    Axios({
      method : 'GET',
      url : ` http://api.ipstack.com/${ip}`,
      params : {
        access_key : process.env.REACT_APP_API_KEY
      }
    }).then(res=>{
      dispatch(addIpLookup({
        loading :  false,
        ipResults : res.data
      }))
    }).catch(err=>{
      dispatch(addIpLookup({
        loading :  false
      }))
      alert(err)
    })
  }
  return{
    getLookupIpAddr
  }
}