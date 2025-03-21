"use client";
import { UserLocationContext } from '@/context/UserLocationContext';
import React, { useContext,useEffect,useState } from 'react'
import {Map,Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';

function MapBoxMap() {

    // const{userLocation,setUserLocation}=useContext(UserLocationContext)
  return (
    <div className='p-5'>
        <h2 className='test-[20px] font-semibold'>Map</h2>
        <div className='rounded-lg overflow-hidden'>
        
        {/* {userLocation?  */}
        <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        initialViewState={{
        // longitude: userLocation?.lng,
        // latitude: userLocation?.lat,
        longitude: 77.2090,
        latitude:  28.6139,
        zoom: 14
      }}
      style={{width: '100%', height: 650,borderRadius:10}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker longitude={77.2090}
        latitude={28.6139} 
        anchor="bottom" >
        <img src="map_gps_navigation_icon.png" 
        className='w-10 h-10'/>
        </Marker> 
        </Map>
    </div> 
    </div>
  )
}

export default MapBoxMap
