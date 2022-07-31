import { useState } from 'react';



const Footer = () => {
  return (
    <>
      <style jsx>
        {`

            .footer-Box{
              width:100%;
              min-height:80px;
              background-color:white;
              border-top: 1px solid #EBEBEB;
              {/* position: absolute;
              bottom: 0; */}
  
            }

            `}
      </style>

      <footer className='footer-Box d-flex align-item-center mt-5'>
        <div className='container d-flex align-items-center'>


          <p className='size15 w400 mb-0'>Gkorovelis Dimitris ©</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;