
import { Component } from 'react';
import Link from 'next/link';




class HomeButton extends Component {
    state = {  }
    
    render() { 
        return ( 
            <>
            <style jsx>
            {`
            .button{
                background-color:#4111C9;
                border-radius:22.5px;
                width:180px;
                height:43px;
                color:white;
                cursor:pointer; 
                padding:8px;
                border:2px solid #4111C9;
                transition:  background-color 300ms ease-out;
            }
            .button:hover{
                background-color:white;

                color:#4111C9;
            }

            .button:active{
                background-color:#4111C9;
                color:white;
            }

            `}
            </style>
            <Link href={`/CaseStudy/${this.props.slug}`}>
            <div className='button text-center'>{this.props.text} </div>
            </Link>
            </>
         );
    }
}
 
export default HomeButton;