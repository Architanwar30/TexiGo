import Booking from "@/components/Booking/Booking";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className=''> 
          <Booking/>
        </div>
        <div className='col-span-2 bg-gray-500'>
          Map
        </div>
      
      
      </div>  
    </div>
  );
}

