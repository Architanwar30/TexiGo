import { headers } from "next/headers";
import { NextResponse } from "next/server";
const Base_URL="https://api.mapbox.com/search/searchbox/v1/suggest"
export async function GET(request:any){

     const{searchParams}=new URL(request.url);
     const searchText=searchParams.get('q');
    //  const sessionToken = uuidv4()
 
     const res=await fetch(Base_URL+'?q='+searchText+'?language=en&proximity=-73.990593,40.740121&session_token=0159c0cb-dfff-4111-892f-dea66b104b1f&country=IN&access_token=pk.eyJ1IjoiZ29yaXNoZ3VwdGEiLCJhIjoiY20zNHE1aDliMDFycjJuc2YzZTlnc3l2bSJ9.j8MvfD8aUTVcTM2Uy7wQ8w',
     {
        headers:{
            "Content-Type": "application/json"

        }
     })

     const serachResult = await res.json();

    return NextResponse.json({serachResult})
}