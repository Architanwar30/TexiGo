
import styleTest from "../css/test.module.css";
import Booking from "@/components/Booking/Booking";


export default function Test(){
    return(
        <div className={styleTest.body}>
            <div className={styleTest.grid}>
                <div> 
                    <Booking/>
                </div>
                <div className={styleTest.map}>
                    Map
                </div>
            </div>

        </div>
    )
}