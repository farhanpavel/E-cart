import React, { useEffect, useState } from 'react'
import { FaCheck } from "react-icons/fa";
type all={
    pass: {
        title: string;
        src: string;
        price: number;
    };
    totalTaker:(e:number)=>void;
    Increaser:(e:number)=>void;
    another:(e:string)=>void;
}


export default function Card(props:all) {
    const [isOn,setOn]=useState(true);
    const [count,setCount]=useState(0);
    const clicker=(e:React.MouseEvent<HTMLButtonElement>)=>{
      setOn(false); 
      // setCount(1);
       props.totalTaker(props.pass.price);
       props.Increaser(0);
       props.another(props.pass.title);
     }
    
    return (
   <div className='card mb-3' style={{width:"18rem"}}>
    <img src={props.pass.src} className='card-img-top' alt="" />
    <div className="card-body">
    <h5 className="card-title">{props.pass.title}</h5>
    <p className="card-text">{isOn?<span>{props.pass.price}$</span>:<span> {props.pass.price}$ <FaCheck /> Item is Added</span>}</p>
    <button className='btn btn-dark mb-5' onClick={clicker}>Add to Cart</button>
  </div>
    </div>
  )
}
