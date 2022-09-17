import {userState} from "react"
import Nav from "./Nav"
import Footer from "./Footer"

const Layout = ({children}) => {
    return (<>
        <Nav></Nav>
        {children}
        <Footer></Footer>
        </>
        
      );
}
 
export default Layout;