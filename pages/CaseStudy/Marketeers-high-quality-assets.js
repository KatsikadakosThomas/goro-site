import Head from 'next/head';
import Mutables from '../../mutables';
import { useRouter } from 'next/router';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import CaseStudyCard from "../../components/CaseStudyCard";
import Paragraph from "../../components/Paragraph";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';






const CaseStudy = () => {

  const router = useRouter();

  return (
    <>


      {/* ░█████╗░░██████╗░██████╗
          ██╔══██╗██╔════╝██╔════╝
          ██║░░╚═╝╚█████╗░╚█████╗░
          ██║░░██╗░╚═══██╗░╚═══██╗
          ╚█████╔╝██████╔╝██████╔╝
          ░╚════╝░╚═════╝░╚═════╝░ */}

      <style jsx>
        {`
              .headerPhoto{
                width:100%;
                height:547.75px;
                background-image:url(${Mutables.caseStudy[0].heroPhoto});
                background-position: center;
              }

              @media only screen and (max-width: 600px) {
         .headerPhoto {
          height:447.75px;
          background-position: right center;
            }
 
           }

             

              td{
                vertical-align:top;
                padding-top:14px;
                padding-bottom:14px; 
              }
              
              ul{
                padding-left: 1.1rem;
              }

              tr{
                border-bottom:solid 1px #E0E0E0;
              }

           
         
              #carousel{
                width:80vw !important;
                margin:auto;
              }
              
              #vector1{
            
                width: 100%;
                height:99.4%;
                top:0;
                left:0;
                z-index: -5;
                position: absolute;
              

                background: #6BBAEC;
                clip-path: polygon(0 0, 100% 0.5%, 100% 100%, 0% 100%);
              }

                #vector2{
              
              width: 100%;
              height:100%;
              z-index: -6;
              position: absolute;
              top:0;
              left:0;

              background: #69AC4E;
              clip-path: polygon(0 0.5%, 100% 0, 100% 99%, 0% 100%);
              }
              .vectorContainer1{
            position: relative;
            width: 100%;
    
          }

              #vector3{
            
            width: 100%;
            height:99.4%;
            top:0;
            left:0;
            z-index: -5;
            position: absolute;
          

            background: #6BBAEC;
            clip-path: polygon(0 0, 100% 0.5%, 100% 100%, 0% 100%);
          }

          #opportunities{
            padding-top:50px;
            padding-bottom:100px
          }

            #vector4{
          
          width: 100%;
          height:100%;
          z-index: -6;
          position: absolute;
          top:0;
          left:0;

          background: #69AC4E;
          clip-path: polygon(0 0.5%, 100% 0, 100% 99%, 0% 100%);
          }


        

          .vectorContainer2{
            position: relative;
            width: 100%;
            padding:50px 0px;
         
          }




          .designSystemPhoto{
           
          width:100%;
          object-fit: contain;
          }

          .designSystemDiv{
            padding:50px;
            background-color:white;
            overflow:auto;
            width:924px;
            margin:auto;
          }

          @media only screen and (max-width: 1030px) {
            .designSystemDiv {
              width:724px;
            }
 
        }
        @media only screen and (max-width: 765px) {
            .designSystemDiv {
              width:584px;
            }
 
        }
        @media only screen and (max-width: 600px) {
            .designSystemDiv {
              width:484px;
            }
 
        }
        @media only screen and (max-width: 495px) {
            .designSystemDiv {
              width:384px;
            }
 
        }

        @media only screen and (max-width: 395px) {
            .designSystemDiv {
              width:284px;
              padding:30px;
            }
 
        }



            `}
      </style>

  {/* ░░░░░██╗░██████╗██╗░░██╗
      ░░░░░██║██╔════╝╚██╗██╔╝
      ░░░░░██║╚█████╗░░╚███╔╝░
      ██╗░░██║░╚═══██╗░██╔██╗░
      ╚█████╔╝██████╔╝██╔╝╚██╗
      ░╚════╝░╚═════╝░╚═╝░░╚═╝ */}

      <Head>
        <title>{Mutables.caseStudy.subtitle}</title>
        <meta property="og:title" content={Mutables.caseStudy.subtitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={router.asPath} />
        <meta property="og:image" content="/Ellipse 1.png" />
      </Head>

      <header className="headerPhoto mb-5">
        <div className="titleContainer">
          <h1 className="w900 white">{Mutables.caseStudy[0].title}</h1>
          <h3 className="white">{Mutables.caseStudy[0].subTitle}</h3>
          <p className="w300 white">{Mutables.caseStudy[0].type}</p>
        </div>
      </header>

      <div id="tableContainer">
        <table>
          <tbody>
            <tr>
              <td className="firsttd">
                <b>Problem</b>
              </td>
              <td>
                Οbsolete asset bank platform platform <b>faces usability and functionality issues that reduces productivity</b>
              </td>
            </tr>
            <tr>
              <td className="firsttd">
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
              <td className="firsttd">
                <b> Ideate</b>
              </td>
              <td>
                Place search box where users need to see it and test effectiveness. Add autosuggest functionality and find if it increases productivity. Provide advanced search that includes all the main search factors and test if users can find the product they want faster. Create a male suited character that holds an annountment to help have angagement with announcements.
              </td>
            </tr>
            <tr>
              <td className="firsttd">
                <b> Role</b>
              </td>
              <td>
                Ui/UX design, Product design
              </td>
            </tr>
            <tr>
              <td className="firsttd">
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
        <p className="mt-3 small-info">
          We&apos;ve created an easy to use platform to distribute product images, videos and texts for use in marketing campaigns.
          This helps streamline the process of obtaining official and high quality digital elements a marketeer needs by making available all the necessary digital assets, easy to find and export.
        </p>
      </Paragraph>

      <div id="carousel">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          navigation
          slidesPerView={1}
          loop={true}
          onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide><img alt="Cosmote-Slide1" src="/Cosmote-Slide1.jpg" style={{ objectFit: "contain", width: "100%" }}></img></SwiperSlide>
          <SwiperSlide><img alt="Cosmote-Slide2" src="/Cosmote-Slide2.png" style={{ objectFit: "cover", width: "100%" }}></img></SwiperSlide>
          <SwiperSlide><img alt="Cosmote-Slide3" src="/Cosmote-Slide3.jpg" style={{ objectFit: "contain", width: "100%" }}></img></SwiperSlide>
          <SwiperSlide><img alt="Cosmote-Slide4" src="/Cosmote-Slide4.png" style={{ objectFit: "contain", width: "100%" }}></img></SwiperSlide>
        </Swiper>
      </div>

      <Paragraph title={"A new business arose"} info={"Competitive analysis"}>
        <p className="mt-3 small-info">
          This platform has evolved from a previously existing database which housed a lot of official mobile brands material for distribution to marketeers but it was confusing to use and unintuitive.
          Now it is user friendly and organized and could evolve into a marketplace or a bank for digital material of all sorts of brands ranging from small to big companies.
          It&apos;s competitors are google images and any search engine that provides access to publicly shared material. We made the difference by providing an easy and quick way to download and use high quality official material.
        </p>
      </Paragraph>

      <div className="vectorContainer1 mb-5">
    
          <div id="opportunities" className="Zindex">
          <div className="summaryContainer mt-5 mb-5">

            <p className="small-info white mb-1">Opportunities and Challenges</p>
            <span className="w700 s33 roboto white">
              Considering the strengths and weaknesses
            </span >
            <br />
            <p className="w700 s33 roboto white mt-5">
              Opportunities
            </p >
          </div>

          <CaseStudyCard title={"Opportunity #1"} info={"High quality assets"} text={"This platform can accommodate the need of high quality campaigns with wide range of reach supporting high budgets. This will attract corporations that have high standards on their deliverables."} />
          <CaseStudyCard title={"Opportunity #2"} info={"Quick campaign kick off"} text={"Having every asset at the reach of your fingertips creates a unique and optimized experience, enabling for frictionless delivery."} />
          <CaseStudyCard title={"Opportunity #3"} info={"Campaign cost efficiency "} text={"Some campaigns due to low budget deliver low quality assets. Now with a low cost and quick support there will be an opportunity to have a general increase in quality of every campaign without increasing the budget."} />
          <CaseStudyCard title={"Opportunity #4"} info={"Performance marketing"} text={"We've researched that with high quality assets campaigns hit higher numbers in the performance metrics. Helping achieve better scores the clients KPI's."} />
          <p className="w700 s33 roboto white mt-5 summaryContainer">
            Challenges
          </p >
          <CaseStudyCard title={"Challenge #1"} info={"Low level of adoption"} text={"The user base mostly consisted of 40+ y.o people and there was an adoption challenge for the product since new tools are hard to be incorporated into older employees."} />
          <CaseStudyCard title={"Challenge #1"} info={"Raw assets are hard to reach"} text={"Big tech companies are mostly hard to reach and this creates a challenge on the early acquisition of their assets in the first place."} />
          </div>

          <div id="vector1">
          
          </div>
          <div id="vector2"></div>
   
      </div>

      <Paragraph title={"Interviews & Surveys"} info={"We have contacted business managers and marketers"}>
        <p className="mt-3 small-info">
          We&apos;ve run interviews with representatives from the marketing industry, people from the business and marketeers. We&apos;ve tackled usability issues and in general we&apos;ve tried to give everyone a taste of the tool providing them with a prototype.
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



        <p className="mt-3 small-info">
          All the answers were revieved and then submited on an online document and the team started the ideation for the next phase. About 25 people were interviewed from various backgrounds but mostly from the same industry.
        </p>
      </Paragraph>
      <br />


      <Paragraph title={"Understanding the user"} info={"Gaining the end-user's perspective"}>
        <p className="mt-3 small-info ">
          We created personas that have goals and characteristics representing the needs of the many.
        </p>

      </Paragraph>
      <div style={{ margin: "auto", textAlign: "center" }}>
        <img className="uncontainedImages mb-4" src="/Cosmote-Persona-Pic01.jpg" alt="persona1" />
        <img className="uncontainedImages" src="/Cosmote-Persona-Pic02.png" alt="persona2" />
      </div>



      <div className="vectorContainer2 mb-5 mt-5">
       

          <div className="summaryContainer mt-5 mb-5">

            <p className="small-info white mb-1">Wireframe, Prototype</p>
            <span className="w700 s33 roboto white">
              The roadmap to the end product
            </span >
            <br />
            <p className="w700 s33 roboto white mt-5">
              Paper prototypes
            </p >
            <p className="mt-3 small-info white">
              Aiming to facilitate fast brainstorming sessions, targeting the essentials with the team we relied on paper prototypes to express the main look and feel of the app.
            </p>

          </div>


          <div style={{ margin: "auto", textAlign: "center" }}>
            <img className="uncontainedImages" src="/paperprotoype.jpg" alt="persona2" />
          </div>

          <div className="summaryContainer mt-5 mb-5">
            <p className="w700 s33 roboto white mt-5">
              Visual design
            </p >
            <p className="mt-3 small-info white">
              A design system was created with all the necessary components for the platform to support functional & internal consistency, reducing building time, allowing room for innovation and to have a strong brand.
            </p>
          </div>



          <div className="designSystemDiv mb-5">
            {Mutables.CS1VisualDesignPhotos.map((img, idx) => {
              return <img key={idx} className="designSystemPhoto mb-5 " src={`/designSystem/${img}`} alt={img} />
            })}
          </div>



          <div id="vector3"> </div>
        <div id="vector4"></div>

      </div>
      <Paragraph title={"Making a new tool"} info={"CONCLUSION"}>
        <p className="mt-3 small-info">Design such a tool has it&apos;s challenges. We faced some negative comments at the beginning, 
          because the market hadn&apos;t used a similar tools before. 
          The employees were used to an outdated platform performing day to day tasks not supporting the extra features needed
           and not getting the desired value for it. Now with our business proposition we deliver the resources to do quick and 
           efficient work adding quality on the end result.</p>

           <p className="mt-3 small-info">
           A successful user experience is based on how many people like your app.
            Develop a strategy to focus on efficient methods and planning, then identify the best solution to meet your goals.
             A lot of companies want to create a good design. This is not as easy as it sounds.
              You need to define what good design is and analyze your product thoroughly. 
              </p>
      </Paragraph>

      <Paragraph title={"What I could do differently?"}>
        <ul>
          <li className="color484848">
         <b> More user research </b>
          </li>
          <li className="color484848">
          <b> Have the platform be more accessible</b>
          </li >
          <li className="color484848">
          <b> More iterations and more tests of the end result</b>
          </li>
        </ul>

      </Paragraph>

      <Paragraph title={"Disclaimer"}>
            <p className="mt-3 small-info">This project was done for <a style={{textDecoration:"underline"}} href="https://www.white-space.gr/" target="_blank" rel="noreferrer">Whitespace</a> which has the all the rights of the project.</p>
      </Paragraph>

    </>

  );
}

export default CaseStudy;
