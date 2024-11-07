"use client"

import CarsList from '@/data/CarsList'
import Image from 'next/image'
import React,{ useState } from 'react'

function Cars() {
    const [selectedCar, setSelectedCar] = useState<number | null>(null);
    return (
      <div className="mt-3">
        <h2 className="font-semibold">Select Car</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CarsList.map((item, index) => (
            <div
              key={index}
              className={`m-2 p-2 border-[2px] rounded-md hover:border-gray-500 cursor-pointer ${
                index === selectedCar ? 'border-gray-500' : ''
              }`}
              onClick={() => setSelectedCar(index)}
            >
              <div className="relative w-full" style={{ height: '100px', overflow: 'hidden' }}>
              <Image
                src={item.image}
                alt={item.name}
                // width={75}  
                // height={100}
                layout="fill"
                objectFit="contain"
                className="w-full"
              />
              </div>
              <h2 className="text-[12px] text-white">
                {item.name}
                <span className="float-right font-medium text-gray-500">
                  {item.charges * 230} &#8377;
                </span>
              </h2>
            </div>
          ))}
        </div>
      </div>
    );
  }


export default Cars
