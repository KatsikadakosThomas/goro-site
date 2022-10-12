import Mutables from "../mutables/index"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';



const Drawer = (props) => {
    const [show, setShow] = useState(false);

  const dropClick=()=>{
    setShow(!show)
  }

    return ( <>
    <style jsx>{`
    
        .drawer{
            background:white;
            position: fixed;
            top: 0;
            left: 0;
            width: 250px;
            height: 100%;
            z-index: 100000000;
            transform: translateX(-100%);
            transition: transform 0.3s ease-out;
        }

        .drawer.open {
            transform: translateX(0);
            }

        img{
            width:25px;
            height:25px;
            position:absolute;
            right:10px;
            top:10px;
        }
        @media screen and (min-width: 770px) {
        .drawer {
            display: none;
        }
        }

        
    `}</style>

    <div className={`drawer d-flex  flex-column  align-items-md-center ps-4 pt-5 ${props.show?"open":""}`}> 
        <img src={"/x.png"} alt="close" onClick={props.click}/>

         <a className='me-5 links mt-3' key={Mutables.nav[0].name+"a"} href={Mutables.nav[0].url}  target="_blank" rel="noreferrer">{Mutables.nav[0].name}</a>
         <a className='me-5 links mt-3' key={Mutables.nav[1].name+"a"} href={Mutables.nav[1].url}  target="_blank" rel="noreferrer">{Mutables.nav[1].name}</a>
         <span  className='me-5 links mt-3' key={Mutables.nav[2].name+"a"} onClick={dropClick}>{Mutables.nav[2].name}</span >
         {show&&<>
            <Link href={`/CaseStudy/airbnb-apartments`}><span className='me-5  mt-3'>Asset bank</span></Link>
            <Link href={`/CaseStudy/Marketeers-high-quality-assets`}><span className='me-5  mt-3'>Concierge services</span></Link></>}
         <a className='me-5 links mt-3' key={Mutables.nav[3].name+"a"} href={Mutables.nav[3].url}  target="_blank" rel="noreferrer">{Mutables.nav[3].name}</a>


       
</div>
    
    
    </> );
}
 
export default Drawer;