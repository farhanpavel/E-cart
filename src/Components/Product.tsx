import React ,{useState,useEffect}from 'react'
import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import data from './Data';
type data2={
    title: string;
    src: string;
    price: number;
};
    
export default function Product() {
    const [user,setUser]=useState(data);
    const [filteredUser, setFilteredUser] = useState<data2[]>([]);
 
    const location=useLocation();
   useEffect(()=>{
    const filteredData: data2[] = [];
    location.state.forEach((e:string)=>{
        const value=user.filter((x)=>x.title===e);
        filteredData.push(...value);
    })
    setFilteredUser(filteredData);
    console.log(filteredData);
   },[user])
    let count = 0,count2=0;

    filteredUser.forEach((e) => {
    count += e.price;
    count2++;
    });

  return (
       <div>
      <div className='row m-0 border-bottom p-4 mb-3' >
        <div className='col-lg-10 col-7 col-md-9 col-sm-8'>
        <h5>Farhan Pavel</h5>
        </div>
        <div className='col-lg-2 col-5 col-md-3 col-sm-4'>
            {/* <div><p>Total Items:{count}</p></div>
            <div><h5>Total Price:{total}$ </h5></div> */}
            <button className='btn btn-dark'><NavLink  className={"text-white text-decoration-none"} to="/">View Product</NavLink></button>
        </div>
      </div>

        { 
           filteredUser.map((e)=>(
              <div>
                <div className='d-flex justify-content-around ms-lg-2 ms-md-1 ms-sm-1 ms-0'>
                <img className='w-25 border border-dark mb-3' src={e.src} alt="" />    
                <h4 className='d-block m-auto'>{e.title}</h4>
                <h5 className='d-block m-auto'>{e.price}$</h5>
                </div>

              </div>
            ))
        }
        {
            count!==0 && count2!== 0 && (
            <div className='d-flex justify-content-center mt-5 mb-4'>
                <div>
                <p>Total Items:{count2}</p>
                <h5>Total Price:{count}$ </h5>
                </div>
                </div>
            ) 
        }

    </div>
  )

}