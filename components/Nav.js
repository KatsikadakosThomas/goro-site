import React, { useState, useEffect } from 'react';
import Mutables from "./../mutables/index";
import Link from "next/link";
import Burger from "./Burger";

const Nav = (props) => {

  const [show, setShow] = useState("show");
  const [lastScrollY, setLastScrollY] = useState(0);


  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      console.log(window.scrollY);
      if (window.scrollY > lastScrollY&window.scrollY>200) { // if scroll down hide the navbar
        setShow("hide"); 
      } else { // if scroll up show the navbar
        setShow("show");  
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);
  


  
  return (

    <>
      <style jsx>
        {`

            .Nav-Box{
              width:100%;
              min-height:80px;
              background-color:white;
              border-bottom: 1px solid #EBEBEB;
              position:sticky;
              top:0px;
              z-index:4000;
              
            }

            .hide{
              animation: 0.5s fadeIn;
              animation-fill-mode: forwards;            
            }
            @keyframes fadeIn {
              0% {
                opacity: 1;
              }
              100% {
                visibility: hidden;
                opacity: 0;
              }
            }

            @keyframes fadeOut {
              0% {
                opacity: 0;
              }
              100% {
                visibility: visible;
                opacity: 1;
              }
            }
            .show{
              animation: 0.5s fadeOut;
              animation-fill-mode: forwards;  
            }

            .logo{
              font-family: 'Inter', sans-serif;
              font-style:normal;
              position: relative;
              display: inline-block;
              overflow: hidden;
              
              background: linear-gradient(to right, #C93BFF, #C93BFF 50%, black 50%);
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-size: 200% 100%;
              background-position: 100%; 
              transform: scale(1);
              transition: transform 100ms ease, background-position 275ms ease;


            }

            .logo:hover{
              cursor:pointer;
              transform: scale(1.06);
              background-position: 0 100%;
        
            }

            @media screen and (min-width: 771px) {
              .toggle-btn {
                display: none;
              }
            }
            @media screen and (max-width: 770px) {
              .toolbar-navigation-items {
                display: none !important;
              }
            }

            `}
      </style>

      <header className={`Nav-Box d-flex inter-font ${show}`}>

        {/* inner container */}
        <div className="container p-3 d-flex  justify-content-between align-items-md-center flex-row" >

       

            <Link href="/">
          <div className='d-flex align-items-md-center flex-column logo'>

            <p className='s15 w700 mb-0'>Gorovelis Dimitris</p>
            <p className='s15 w400 mb-0'>Product Designer</p>
          </div>
          </Link>

          <div className="toggle-btn mt-2 me-3">
    
      <Burger click={props.Click} />
      </div>
          <nav className='d-flex justify-content-between flex-row align-items-md-center mt-md-0 mt-5 toolbar-navigation-items'>
            {Mutables.nav.map((navItem) => {
             return navItem.type==="simple"?
             <a className='me-5 links mt-md-0 mt-3' key={navItem.name+"a"} href={navItem.url}  target="_blank" rel="noreferrer">{navItem.name}</a>
            :navItem.renderer({})
          
        
            })}
          </nav>

        </div>
      </header>

    </>


  );
}

export default Nav;