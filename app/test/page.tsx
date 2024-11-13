"use client";
import MapBoxMap from "@/components/Map/MapBoxMap";
import styleTest from "../css/test.module.css";
import Booking from "@/components/Booking/Booking";
import { useEffect, useState } from "react";
import Image from "next/image";
import { UserLocationContext } from "@/context/UserLocationContext";


export default function Test(){

    const [userLocation,setUserLocation] = useState<any>();

    useEffect(()=>{
        getUserLocation();
    },[])
    const getUserLocation=()=>{
        navigator.geolocation.getCurrentPosition(function(pos){
            setUserLocation({
                lat:pos.coords.latitude,
                lng:pos.coords.longitude
    
              })
        })
    }
    return(
        <div className={styleTest.body}>
            <UserLocationContext.Provider value={{userLocation,setUserLocation}}>
            <div className={styleTest.grid}>
                <div> 
                    <Booking/>
                </div>
                <div className={styleTest.map}>
                    <div>
                    <MapBoxMap/>
                    </div>
                </div>
            </div>
            </UserLocationContext.Provider>

        </div>
    )
}