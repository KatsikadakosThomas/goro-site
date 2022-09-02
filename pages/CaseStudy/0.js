import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Mutables from '../../mutables'
import { useRouter } from 'next/router';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Paragraph = ({ title, info, children }) => {

  return (
    <div className='summaryContainer mt-5 mb-5'>
      <p className="small-info">{info}</p>
      <span className="s33 roboto-font">
        {title}
      </span >
      {children}
      <style jsx>
        {`
        .summaryContainer
        {
          width:760px;
                margin:auto;
                }
            `}
      </style>
    </div>
  )
}

const CaseCard = ({ title, info, text }) => {

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
            `}
      </style>
    </div>
  )
}


const CaseStudy = () => {

  const router = useRouter();

  return (
    <>
      <style jsx>
        {`
              .heroPhoto{
                width:100%;
                height:547.75px;
  
              }

              #tableContainer{
                width:934px;
                margin:auto; 
              }

              td{
                vertical-align:top;
                padding-top:14px;
                padding-bottom:14px; 
              }
              
              .firsttd{
                white-space: nowrap;
                padding-right: 100px;
              

              }
              ul{
                padding-left: 1.1rem;
              }

              tr{
                border-bottom:solid 1px #E0E0E0;
              }

              .summaryContainer{
                width:760px;
                margin:auto;
              }
         
              #carousel{
                width:80vw !important;
                margin:auto;
              }
              
              #vector1{
            
                width: 100%;
                top:0;
                left:0;
                z-index: 5;
                position: absolute;
              

                background: #6BBAEC;
                clip-path: polygon(0 0, 100% 3%, 100% 100%, 0% 100%);
              }

                #vector2{
              
              width: 100%;
              height:2325px;
              z-index: 3;
              position: absolute;
              top:0;
              left:0;

              background: #69AC4E;
              clip-path: polygon(0 2%, 100% 0, 100% 98%, 0% 100%);
              }

              #vector3{
            
            width: 100%;
            top:0;
            left:0;
            z-index: 5;
            position: absolute;
          

            background: #6BBAEC;
            clip-path: polygon(0 0, 100% 0.5%, 100% 100%, 0% 100%);
          }

            #vector4{
          
          width: 100%;
          height:8190px;
          z-index: 3;
          position: absolute;
          top:0;
          left:0;

          background: #69AC4E;
          clip-path: polygon(0 0.5%, 100% 0, 100% 99%, 0% 100%);
          }


          .vectorContainer{
            position: relative;
            width: 100%;
            height: 2290px;
          }

          .persona{
            width:924px;

          }
          .designSystemPhoto{
           
          width:initial;
          object-fit: contain;
          }

          .designSystemDiv{
            padding:50px;
            background-color:white;
            overflow:auto;
            width:760px;
            margin:auto;
          }

            `}
      </style>

      <Head>
        <title>{Mutables.caseStudy.subtitle}</title>
        <meta property="og:title" content={Mutables.caseStudy.subtitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={router.asPath} />
        <meta property="og:image" content="/Ellipse 1.png" />
      </Head>

      <header className='imgContainer mb-5'>
        <img className="heroPhoto" src={Mutables.caseStudy[0].heroPhoto}></img>
      </header>

      <div id="tableContainer">
        <table>
          <tbody>
            <tr>
              <td className='firsttd'>
                <b>Problem</b>
              </td>
              <td>
                Οbsolete asset bank platform platform <b>faces usability and functionality issues that reduces productivity</b>
              </td>
            </tr>
            <tr>
              <td className='firsttd'>
                <b> Define</b>
              </td>
              <td>
                <ul>
                  <li>
                    Users find the old platform obsolete and <b> hard to operate</b> for their day to day tasks
                  </li>
                  <li>
                    <b> Lack of announcements</b> about new products
                  </li>
                  <li>
                    New employees find it<b> difficult to operate the platform</b>
                  </li>
                  <li>
                    Search <b>uses old techlogy which is slow </b>and <b>lacks option for advanced searches</b>
                  </li>

                </ul>

              </td>
            </tr>
            <tr>
              <td className='firsttd'>
                <b> Ideate</b>
              </td>
              <td>
                Place search box where users need to see it and test effectiveness. Add autosuggest functionality and find if it increases productivity. Provide advanced search that includes all the main search factors and test if users can find the product they want faster. Create a male suited character that holds an annountment to help have angagement with announcements.
              </td>
            </tr>
            <tr>
              <td className='firsttd'>
                <b> Role</b>
              </td>
              <td>
                Ui/UX design, Product design
              </td>
            </tr>
            <tr>
              <td className='firsttd'>
                <b>  Project time</b>
              </td>
              <td>
                3 months
              </td>
            </tr>


          </tbody>
        </table>
      </div>

      <Paragraph title={"Summary"} info={"High quality asset bank in the making"}>
        <p className='mt-3 small-info'>
          We’ve created an easy to use platform to distribute product images, videos and texts for use in marketing campaigns.
          This helps streamline the process of obtaining official and high quality digital elements a marketeer needs by making available all the necessary digital assets, easy to find and export.
        </p>
      </Paragraph>

      <div id="carousel">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide><img src="/Cosmote-Slide1.jpg" style={{ objectFit: "contain", width: "100%" }}></img></SwiperSlide>
          <SwiperSlide><img src="/cosmote2.png" style={{ objectFit: "cover", width: "100%" }}></img></SwiperSlide>
          <SwiperSlide><img src="/Cosmote-Slide1.jpg"></img></SwiperSlide>
          <SwiperSlide><img src="/Cosmote-Slide1.jpg"></img></SwiperSlide>
        </Swiper>
      </div>

      <Paragraph title={"A new business arose"} info={"Competitive analysis"}>
        <p className='mt-3 small-info'>
          This platform has evolved from a previously existing database which housed a lot of official mobile brands material for distribution to marketeers but it was confusing to use and unintuitive.
          Now it is user friendly and organized and could evolve into a marketplace or a bank for digital material of all sorts of brands ranging from small to big companies.
          It’s competitors are google images and any search engine that provides access to publicly shared material. We made the difference by providing an easy and quick way to download and use high quality official material.
        </p>
      </Paragraph>

      <div className='vectorContainer mb-5'>
        <div id="vector1">

          <div className='summaryContainer mt-5 mb-5'>

            <p className="small-info white mb-1">Opportunities and Challenges</p>
            <span className="w700 s33 roboto white">
              Considering the strengths and weaknesses
            </span >
            <br />
            <p className="w700 s33 roboto white mt-5">
              Opportunities
            </p >
          </div>

          <CaseCard title={"Opportunity #1"} info={"High quality assets"} text={"This platform can accommodate the need of high quality campaigns with wide range of reach supporting high budgets. This will attract corporations that have high standards on their deliverables."} />
          <CaseCard title={"Opportunity #2"} info={"Quick campaign kick off"} text={"Having every asset at the reach of your fingertips creates a unique and optimized experience, enabling for frictionless delivery."} />
          <CaseCard title={"Opportunity #3"} info={"Campaign cost efficiency "} text={"Some campaigns due to low budget deliver low quality assets. Now with a low cost and quick support there will be an opportunity to have a general increase in quality of every campaign without increasing the budget."} />
          <CaseCard title={"Opportunity #4"} info={"Performance marketing"} text={"We’ve researched that with high quality assets campaigns hit higher numbers in the performance metrics. Helping achieve better scores the clients KPI’s."} />
          <p className="w700 s33 roboto white mt-5 summaryContainer">
            Challenges
          </p >
          <CaseCard title={"Challenge #1"} info={"Low level of adoption"} text={"The user base mostly consisted of 40+ y.o people and there was an adoption challenge for the product since new tools are hard to be incorporated into older employees."} />
          <CaseCard title={"Challenge #1"} info={"Raw assets are hard to reach"} text={"Big tech companies are mostly hard to reach and this creates a challenge on the early acquisition of their assets in the first place."} />

        </div>
        <div id="vector2"></div>
      </div>

      <Paragraph title={"Interviews & Surveys"} info={"We’ve contacted business managers and marketers"}>
        <p className='mt-3 small-info'>
          We’ve run interviews with representatives from the marketing industry, people from the business and marketeers. We’ve tackled usability issues and in general we’ve tried to give everyone a taste of the tool providing them with a prototype.
        </p>
        <h2>Goals</h2>
        <ul>
          <li>Can they acquire the desired outcome?</li>
          <li> Will it be useful for them and their colleagues?</li>
          <li> Do they use tools like that in their processes?</li>
          <li> What obstacles do they face while kicking off a campaign?</li>
          <li> Can our solution support and enhance their work?</li>
        </ul>
        Goals



        <p className='mt-3 small-info'>
          All the answers were revieved and then submited on an online document and the team started the ideation for the next phase. About 25 people were interviewed from various backgrounds but mostly from the same industry.
        </p>
      </Paragraph>
          <br/>


      <Paragraph title={"Understanding the user"} info={"Gaining the end-user’s perspective"}>
        <p className='mt-3 small-info '>
        We created personas that have goals and characteristics representing the needs of the many.
        </p>
      
      </Paragraph>
      <div style={{margin:"auto",textAlign:"center" }}>
      <img className="persona mb-4" src="/Cosmote-Persona-Pic01.jpg" alt="persona1"/>
      <img className="persona" src="/Cosmote-Persona-Pic02.png" alt="persona2"/>
      </div>
  


      <div className='vectorContainer mb-5 mt-5'>
        <div id="vector3">

          <div className='summaryContainer mt-5 mb-5'>

            <p className="small-info white mb-1">Wireframe, Prototype</p>
            <span className="w700 s33 roboto white">
            The roadmap to the end product
            </span >
            <br />
            <p className="w700 s33 roboto white mt-5">
            Paper prototypes
            </p >
            <p className='mt-3 small-info white'>
            Aiming to facilitate fast brainstorming sessions, targeting the essentials with the team we relied on paper prototypes to express the main look and feel of the app.
        </p>
        <img className="persona " src="/paperprotoype.jpg" alt="persona2"/>
        <p className="w700 s33 roboto white mt-5">
        Visual design
            </p >
            <p className='mt-3 small-info white'>
            A design system was created with all the necessary components for the platform to support functional & internal consistency, reducing building time, allowing room for innovation and to have a strong brand.
        </p>

          </div>

         <div className='designSystemDiv mb-5'>
         {Mutables.CS1VisualDesignPhotos.map((img,idx)=>{
            return <img  key={idx} className="designSystemPhoto " src={`/designSystem/${img}`} alt={img}/>
          })}
         </div>
      
   

        </div>
        <div id="vector4"></div>
       
      </div>
      <div>433</div>
      
    </>

  );
}

export default CaseStudy;
