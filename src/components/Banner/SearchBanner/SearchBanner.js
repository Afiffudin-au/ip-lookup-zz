import React, { useEffect, useRef, useState } from 'react'
import { useGetLookupIpAddr } from '../../../useLookupIpAddr/useGetLookupIpAddr'
import CircularProgress from '@material-ui/core/CircularProgress';
import './SearchBanner.scss'
import { useSelector } from 'react-redux';
import { selectLookupIpBlocks } from '../../../features/ipAddrSlice';
function SearchBanner() {
  const {loading} = useSelector(selectLookupIpBlocks)
  const {getLookupIpAddr} = useGetLookupIpAddr()
  const [ipValue,setIpValue] = useState('')
  const refGetLookupIpAddr = useRef(getLookupIpAddr)
  const ipValidation = ()=>{
    const splitIP = ipValue.split('.')
    if(splitIP[splitIP.length - 1] > 255){
      return
    }
    if (ipValue.match(process.env.REACT_APP_REGEX.toString()) === null) {
      return
    }
    return true
  }
  const handleIpLookup = (e)=>{
    e.preventDefault()
    if(ipValidation() === true){
      getLookupIpAddr(ipValue)
    }
  }
  useEffect(()=>{
   if(ipValidation() === true){
     refGetLookupIpAddr.current(ipValue)
   }
  },[ipValue])
  return (
    <form className="SearchBanner">
      <input onChange={(e)=>setIpValue(e.target.value)} className="banner_search_ip" type="text" placeholder="IP"/>
      {
        loading && <CircularProgress/>
      }
      <button style={{display : 'none'}} onClick={handleIpLookup}>Lookup</button>
    </form>
  )
}

export default SearchBanner
