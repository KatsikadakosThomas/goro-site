import React, { useState, useEffect } from 'react';
import Nav from "./Nav"
import Footer from "./Footer"
import Backdrop from "./Backdrop"
import Drawer from "./Drawer"


const Layout = ({children}) => {

  const [burgerShow, setBurgerShow] = useState(false);


  const drawerToggleClickHandler = () => {

    setBurgerShow(!burgerShow)
   };
 
   const backDropClickHandler = () => {

     setBurgerShow(false);
   };

    return (<>
        <Drawer show={burgerShow} click={backDropClickHandler}/>
        {burgerShow===true?<Backdrop click={backDropClickHandler}/>:null}
        <Nav Click={drawerToggleClickHandler}></Nav>
        {children}
        <Footer></Footer>
        </>
        
      );
}
 
export default Layout;