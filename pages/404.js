import Link from 'next/link';
import { useRouter } from 'next/router'

const error = () => {

    return (
         <div className="d-flex flex-row justify-content-center align-items-center" >

            <div style={{margin:"400px 0px",textAlign:"center"}}>
            <h1 className="error404">Error 404 Page not found</h1>
            <Link href={`/`}>
            <h5 style={{color:"#6e00ff",cursor:"pointer"}}>Lets go to the homepage shall we?</h5>
            </Link>
            </div>

        </div>
     );
}
 
export default error;