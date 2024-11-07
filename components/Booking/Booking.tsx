"use client"

import React, { useEffect, useState } from 'react'
import AutocompleteAddress from './AutocompleteAddress'
import Cars from './Cars'

function Booking() {
    // const screenHeight=window.innerHeight*0.72;
    
    return (
    <div className='p-5'>

        <h2 className='text-[20px] font-semibold'>Booking</h2>
        <div className='pt-0 border=[1px] p-5 rounded-md '>
            <AutocompleteAddress/>
            <Cars/>
        </div>
    </div>
  )
}

export default Booking
