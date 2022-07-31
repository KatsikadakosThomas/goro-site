
import { Component } from 'react';




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

            <div className='button text-center'>{this.props.text} </div>
            </>
         );
    }
}
 
export default HomeButton;