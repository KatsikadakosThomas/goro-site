
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
                padding:10px
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