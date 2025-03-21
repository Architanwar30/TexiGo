"use client"

import React, { useEffect, useState } from 'react'
import AutocompleteAddress from './AutocompleteAddress'
import Cars from './Cars'
import Cards from './Cards'
import { useRouter } from 'next/navigation'

function Booking() {
    // const screenHeight=window.innerHeight*0.72;
    const router:any=useRouter()
    
    return (
    <div className='p-5'>

        <h2 className='text-[20px] font-semibold'>Booking</h2>
        <div className='pt-0 border=[1px] p-5 rounded-md '>
            <AutocompleteAddress/>
            <Cars/>
            <Cards/>
            <button className='w-full bg-gray-500
            p-1 rounded-md mt-4'
            onClick={()=>router.push('/payment')}>
                Book
            </button>
        </div>
    </div>
  )
}

export default Booking
