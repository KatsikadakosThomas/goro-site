
const menuToggleButton = props =>
{return (
    <>
    <style jsx>
            {`
            .toggle-button {
                height: 24px;
                width: 30px;
                background: transparent;
                border: none;
                cursor: pointer;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                padding: 0;
                box-sizing: border-box;
                }

                .toggle-button:focus {
                outline: none;
                }

                .toggle-button-line {
                width: 30px;
                height: 2px;
                background: black;
                }


            `}
            </style>

  <button className="toggle-button" onClick={props.click}>
    <div className="toggle-button-line" />
    <div className="toggle-button-line" />
    <div className="toggle-button-line" />
  </button>
  </>
);}

export default menuToggleButton;
