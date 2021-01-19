import React from 'react'
import { useSelector } from 'react-redux'
import { selectLookupIpBlocks } from '../../features/ipAddrSlice'

function LookupResult() {
  const {lookupIpResults} = useSelector(selectLookupIpBlocks)
  console.log(lookupIpResults)
  return (
    <div>
      
    </div>
  )
}

export default LookupResult
