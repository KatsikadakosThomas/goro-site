const CaseStudyCard = ({ title, info, text }) => {

    return (
      <div className='summaryContainer mt-5 mb-5'>
        <p className="small-info">{info}</p>
        <span className="s33 roboto-font">
          {title}
        </span >
        <p className='mt-3 small-info'>
          {text}
        </p>
        <style jsx>
          {`
          .summaryContainer
          {
                   width:760px;
                  margin:auto;
                  background-color:white;
                  border-radius:15px;
                  padding:40px 60px 40px 60px;
                  }
  
                  @media only screen and (max-width: 1030px) {
              .summaryContainer {
                width:560px;
              }
   
          }
              `}
        </style>
      </div>
    )
  }

  export default CaseStudyCard;