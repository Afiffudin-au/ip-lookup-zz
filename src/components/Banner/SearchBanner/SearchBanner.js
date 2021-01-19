import React, { useState } from 'react'
import { useGetLookupIpAddr } from '../../../useLookupIpAddr/useGetLookupIpAddr'
import CircularProgress from '@material-ui/core/CircularProgress';
import './SearchBanner.scss'
import { useSelector } from 'react-redux';
import { selectLookupIpBlocks } from '../../../features/ipAddrSlice';
function SearchBanner() {
  const {loading} = useSelector(selectLookupIpBlocks)
  const {getLookupIpAddr} = useGetLookupIpAddr()
  const [ipValue,setIpValue] = useState('')
  const handleIpLookup = (e)=>{
    e.preventDefault()
    if (ipValue.match(process.env.REACT_APP_IP_REGEX) === null) {
      return
    } 
    getLookupIpAddr(ipValue)
  }
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
