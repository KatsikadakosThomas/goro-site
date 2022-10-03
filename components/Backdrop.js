

const backdrop = props => 
{return (
    <>
    <style jsx>
        {`
        
        .backdrop {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            /* background: rgba(0, 0, 0, 0.3); */
            background: grey;
            opacity:15%;
            z-index: 100000;
            }

        `}
    </style>


     <div className="backdrop" onClick={props.click} />
    
    </>
     
     )}

export default backdrop;
