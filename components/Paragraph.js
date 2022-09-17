

const Paragraph = ({ title, info, children }) => {

    return (
      <div className='summaryContainer mt-5 mb-5'>
        <p className="small-info">{info}</p>
        <span className="s33 roboto-font">
          {title}
        </span >
        {children}
      </div>
    )
  }

  export default Paragraph