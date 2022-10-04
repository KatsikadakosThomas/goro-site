const CaseStudyCard = ({ title, info, text }) => {

    return (
      <div className='cardContainer mt-5 mb-5'>
        <p className="small-info">{info}</p>
        <span className="title roboto-font">
          {title}
        </span >
        <p className='mt-3 small-info'>
          {text}
        </p>
        <style jsx>
          {`

          .title{
            font-size:33px;
          }

          .cardContainer
          {
                   width:760px;
                  margin:auto;
                  background-color:white;
                  border-radius:15px;
                  padding:40px 60px 40px 60px;
                  }
  
                  @media only screen and (max-width: 1030px) {
              .cardContainer {
                width:560px;
              }
              @media only screen and (max-width: 785px) {
              .cardContainer {
                  width:460px;
                }

            }

            @media only screen and (max-width: 480px) {
              .cardContainer {
                  width:360px;
                }

            }
            @media only screen and (max-width: 380px) {
              .cardContainer {
                padding:30px 20px 30px 20px;
                  width:260px;
                }

                .title{
            font-size:28px;
            }

            }
   
          }
              `}
        </style>
      </div>
    )
  }

  export default CaseStudyCard;