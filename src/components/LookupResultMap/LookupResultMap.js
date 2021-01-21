import React, { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { withStyles } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import { useSelector } from 'react-redux';
import { selectLookupIpBlocks } from '../../features/ipAddrSlice';
function LookupResultMap() {
  const {lookupIpResults} = useSelector(selectLookupIpBlocks)
  const [viewport,setViewport] = useState({
    latitude: lookupIpResults.latitude,
    longitude: lookupIpResults.longitude,
    width : '100%',
    height : '600px',
    zoom :0
  })
  const LightTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 12,
    },
    arrow: {
      color: 'white',
    },
  }))(Tooltip);
  return (
    <div className="lookupResultMap">
      {
         lookupIpResults.length !== 0 && 
      <ReactMapGL   
         {...viewport}
         mapboxApiAccessToken={process.env.REACT_APP_TOKEN_MAP_BOX}
         mapStyle='mapbox://styles/afiffudin/ckk68izin0gyd18ns6cpbwt5g'
         onViewportChange={viewport=>{
           setViewport(viewport)
         }}
         >
         <Marker latitude={lookupIpResults.latitude} longitude={lookupIpResults.longitude} anchor="bottom">
           <LightTooltip title="Location" arrow>
             <LocationOnIcon style={{fontSize : '40px',color : 'white'}}/>
           </LightTooltip>
         </Marker>
       </ReactMapGL> 
      }
    </div>
  )
}

export default LookupResultMap
