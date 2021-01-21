import React from 'react'
import { useSelector } from 'react-redux'
import { selectLookupIpBlocks } from '../../features/ipAddrSlice'
import './LookupResult.scss'
function LookupResult() {
  const {lookupIpResults} = useSelector(selectLookupIpBlocks)
  return (
    <div className="LookupResult">
      {
        lookupIpResults.length !== 0 &&  
      <table>
        <tbody>
          <tr>
            <td>city</td>
            <td>{lookupIpResults.city}</td>
          </tr>
          <tr>
            <td>continent code</td>
            <td>{lookupIpResults.continent_code}</td>
          </tr>
          <tr>
            <td>continent name</td>
            <td>{lookupIpResults.continent_name}</td>
          </tr>
          <tr>
            <td>country code</td>
            <td>{lookupIpResults.country_code}</td>
          </tr>
          <tr>
            <td>country name</td>
            <td>{lookupIpResults.country_name}</td>
          </tr>
          <tr>
            <td>ip</td>
            <td>{lookupIpResults.ip}</td>
          </tr>
          <tr>
            <td>latitude</td>
            <td>{lookupIpResults.latitude}</td>
          </tr>
          <tr>
            <td>city</td>
            <td>{lookupIpResults.city}</td>
          </tr>
          <tr>
            <td>capital</td>
            <td>{lookupIpResults.location.capital}
            <img className="flag" src={lookupIpResults.location.country_flag} alt=""/>
            </td>
          </tr>
          <tr>
            <td>languages</td>
            <td>
              {
              lookupIpResults?.location?.languages?.map((item,index)=>(
                <p key={index}>
                  {
                    item.name
                  }
                </p>      
                ))
              }
            </td>
          </tr>
          <tr>
            <td>longitude</td>
            <td>{lookupIpResults.longitude}</td>
          </tr>
          <tr>
            <td>region code</td>
            <td>{lookupIpResults.region_code}</td>
          </tr>
          <tr>
            <td>region name</td>
            <td>{lookupIpResults.region_name}</td>
          </tr>
          <tr>
            <td>type</td>
            <td>{lookupIpResults.type}</td>
          </tr>
          <tr>
            <td>zip</td>
            <td>{lookupIpResults.zip}</td>
          </tr>
        </tbody>
      </table>
      }
    </div>
  )
}

export default LookupResult
