import React, { useState } from 'react'
import data from './Data'
import Card from './Card';
import { type } from 'os';
import { NavLink } from 'react-router-dom';
type data={
title: string;
src: string;
price: number;
}

export default function Home() {
  const [user,setUser]=useState<data[]>(data); 
  const [total,setTotal]=useState(0); 
  const [count,setCount]=useState(0); 
  const [pass,setPass]=useState<string[]>([]);
  const totalTaker=(e:number)=>{
    setTotal(total+e);
  }  
  const Increaser=(e:number)=>{
    setCount(1+count);
  }
  const passer=(e:string)=>{
    setPass([...pass,e]);
    console.log(pass);
  }
  
  return (
    <div>
      <div className='row m-0 border-bottom p-2 mb-3' >
        <div className='col-lg-10 col-7 col-md-9 col-sm-8'>
        <h5>Farhan Pavel</h5>
        </div>
        <div className='col-lg-2 col-5 col-md-3 col-sm-4'>
            <div><p>Total Items:{count}</p></div>
            <div><h5>Total Price:{total}$ </h5></div>
            <button className='btn btn-dark'><NavLink state={pass} className={"text-white text-decoration-none"} to="/addcart">View Cart</NavLink></button>
        </div>
      </div>
        <section className='row m-0 '>
        {
           user.map((e)=>(
            <div className='col-lg-3 col-sm-6 col-md-6'>
               <Card pass={e} totalTaker={totalTaker} Increaser={Increaser} another={passer} />
            </div>
           ))
        }
        </section>
    </div>
  )
}
