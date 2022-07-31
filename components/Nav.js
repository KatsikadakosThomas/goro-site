import { useState } from 'react';
import Mutables from "./../mutables/index"


const Nav = () => {
  return (

    <>
      <style jsx>
        {`

            .Nav-Box{
              width:100%;
              min-height:80px;
              background-color:white;
              border-bottom: 1px solid #EBEBEB;
            }

            .links{
              margin-bottom:0;
              cursor:pointer;
              text-decoration: underline;
              text-decoration-color: #C93BFF;
            }

            .links:hover{
              color:#4a4a4a;
              text-decoration-color: #bc0dff;
              transform: scale(1.01);
            }

            .logo{
              font-family:Inter;
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
              transition: background-position 275ms ease;
            }

            .logo:hover{
              cursor:pointer;
              transform: scale(1.06);
              background-position: 0 100%;
            }

            `}
      </style>

      <header className='Nav-Box d-flex inter-font'>

        {/* inner container */}
        <div className="container p-3 d-flex  justify-content-between align-items-md-center flex-column flex-md-row" >

          <div className='d-flex align-items-md-center flex-column logo'>

            <p className='s15 w700 mb-0'>Gorovelis Dimitris</p>
            <p className='s15 w400 mb-0'>Product Designer</p>
          </div>

          <nav className='d-flex justify-content-between flex-column flex-md-row align-items-md-center mt-md-0 mt-5'>
            {Mutables.nav.map((navItem) => {
              return <p className='me-5 links mt-md-0 mt-3' key={navItem.name}>{navItem.name}</p>
            })}
          </nav>

        </div>
      </header>

    </>


  );
}

export default Nav;