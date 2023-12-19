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
          background-position: 20% center;
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
                height:99%;
                top:0;
                left:0;
                z-index: -5;
                position: absolute;
              

                background: #6BBAEC;
                clip-path: polygon(0 0, 100% 3%, 100% 100%, 0% 100%);
              }

                #vector2{
              
              width: 100%;
              height:100%;
              z-index: -6;
              position: absolute;
              top:0;
              left:0;

              background: #69AC4E;
              clip-path: polygon(0 2%, 100% 0, 100% 98%, 0% 100%);
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
            z-index: 5;
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
          z-index: 3;
          position: absolute;
          top:0;
          left:0;

          background: #69AC4E;
          clip-path: polygon(0 0.5%, 100% 0, 100% 99%, 0% 100%);
          }


        

          .vectorContainer2{
            position: relative;
            width: 100%;
            height: 6404px;
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
        video {
  width:100%;

}
.videoContainer{
  max-width:600px;

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
          <h1 className="w900 white dropShadow">{Mutables.caseStudy[0].title}</h1>
          <h3 className="white dropShadow">{Mutables.caseStudy[0].subTitle}</h3>
          <p className="w300 white dropShadow">{Mutables.caseStudy[0].type}</p>
        </div>
      </header>

      <div id="tableContainer">
        <table>
          <tbody>
            <tr>
              <td className="firsttd">
                <b>Industry</b>
              </td>
              <td>
              Qualitative Research on Business User Experience
              </td>
            </tr>
            <tr>
              <td className="firsttd">
                <b> Client</b>
              </td>
              <td>
              Customer Trend
              </td>
            </tr>
      
            <tr>
              <td className="firsttd">
                <b> Role</b>
              </td>
              <td>
              Strategy, UI/UX Design, Product Design
              </td>
            </tr>
            <tr>
              <td className="firsttd">
                <b>  Project time</b>
              </td>
              <td>
                4 Months
              </td>
            </tr>


          </tbody>
        </table>
      </div>

      <Paragraph title={"Enhancing Business experience through end user insights"} info={"Summary"}>
        <p className="mt-3 small-info">
        This project focused on creating a seamless experience for end users , leveraging human-centered design principles. By deeply understanding user needs and behaviour, we developed a platform that is intuitive, efficient, and engaging. Our approach involved creating responsive, minimalistic designs that are easy to navigate, making the user&apos;s interaction with the application effortless and enjoyable.
        </p>
      </Paragraph>

      <div className='videoContainer'  style={{ margin: "auto", textAlign: "center" }}>
<video  src="/swipe_video.mp4" controls loop autoPlay muted ></video>
  </div>
  <div style={{width:"100%",marginTop:"90px"}}></div>

      <div  style={{ margin: "auto", textAlign: "center"}}>
        <img className="uncontainedImages mb-4" src="/swipe_photo_1.jpg" alt="PaperPrototype" />
      </div>


      <Paragraph title={"Navigating Business UX Landscape"} info={"COMPETITIVE ANALYSIS"}>
        <p className="mt-3 small-info">
        In today&apos;s competitive business environment, user experience is a key differentiator. Our research revealed that businesses are increasingly investing in UX to enhance usability and customer satisfaction.
         We identified key trends such as intuitive interfaces and streamlined processes that our solution embodies, setting a new standard in business UX.
        </p>
      </Paragraph>

      <div style={{backgroundColor:"#F8F4F3",padding:"50px 0px"}}>
        <Paragraph title={"How is works"} info={"USER JOURNEY"}>
          <p className="mt-3 small-info">
          Our process begins with understanding user actions required, integrating the app to facilitate these tasks. This creates a cohesive journey from initial engagement to task completion."
          </p>
        </Paragraph>
        <div style={{ margin: "auto", textAlign: "center" }}>
        <img className="uncontainedImages mb-4" src="/swipe_photo_2.jpg" alt="HeliosGuest-Journeymap1" />
      </div>
      </div>


      <Paragraph title={"Looking through the eyes of our user"} info={"EMPATHISE STEP"}>
        <p className="mt-3 small-info ">
        Our persona is the person we see as the our future user of the app. I&apos;ve made some research and after some private interviews i&apos;ve created the profile of a typical guest.
        </p>
      </Paragraph>

      <div style={{ margin: "auto", textAlign: "center" }}>
        <img className="uncontainedImages mb-4" src="/swipe_photo_3.jpg" alt="HeliosGuest-Persona-Pic01" />
      </div>
      <div style={{ margin: "auto", textAlign: "center" }}>
        <img className="uncontainedImages mb-4" src="/swipe_photo_4.jpg" alt="HeliosGuest-Persona-Pic01" />
      </div>
      <div className="mt-5" style={{backgroundColor:"#C6CFD6",padding:"50px 0px"}}>

        <Paragraph info={"PROTOTYPE"} title={"Innovative Prototyping for User Engagement"} />

        <Paragraph title={"Visual design"}>
      <p className="mt-3 small-info">
      Aesthetic and Functional Design Approach
        </p>
        </Paragraph>


        <div  style={{ margin: "auto", textAlign: "center" }}>
        <img className="uncontainedImages mb-4" src="/swipe_long.webp" alt="visualDesign" />
      </div>

      <Paragraph title={"User testing session"}>
      <p className="mt-3 small-info">
      We run a user testing session with 10 participants to get valuable insights.
        </p>
        </Paragraph>
        <div  style={{ margin: "auto", textAlign: "center",borderRadius:"50px" }}>
        <img className="uncontainedImages mb-4" style={{borderRadius:"16px"}} src="/User_Testing_Pic_04.jpg" alt="HeliosGuest-Visualdesign" />
      </div> <div  style={{ margin: "auto", textAlign: "center",borderRadius:"50px" }}>
        <img className="uncontainedImages mb-4" style={{borderRadius:"36px"}} src="/User_Testing_Pic_03.jpg" alt="HeliosGuest-Visualdesign" />
      </div>
      <div  style={{ margin: "auto", textAlign: "center",borderRadius:"50px" }}>
        <img className="uncontainedImages mb-4" style={{borderRadius:"16px"}} src="/User_Testing_Pic_02.jpg" alt="HeliosGuest-Visualdesign" />
      </div>
     
        <div  style={{ margin: "auto", textAlign: "center",borderRadius:"50px" }}>
        <img className="uncontainedImages mb-4" style={{borderRadius:"16px"}} src="/User_Testing_Pic_01.jpg" alt="HeliosGuest-Visualdesign" />
      </div>
  
   


      </div>

      <Paragraph title={"Aesthetic and Functional Design Approach"} info={"CONCLUSION"}>
        <p className="mt-3 small-info">This project underscored the importance of aligning user experience with business objectives. 
        Our design not only met user expectations but also facilitated business processes, making the application a tool for both efficiency and satisfaction.</p>

        <p className="mt-3 small-info">
       User feedback was integral to our design process. It helped us refine our approach, 
       ensuring that the final product resonated with both our team and the users.
        </p>
        <p className="mt-3 small-info">
        Collaboration and stakeholder engagement were key in our process. We believe in a collective effort to define the best product experience, which is guided by the needs and choices of our users.
        </p>
      </Paragraph>

      <Paragraph title={"What I could do differently?"}>
        <ul>
          <li className="color484848">
            <b>Explore more advanced AI integration.</b>
          </li>
          <li className="color484848">
            <b> Incorporate more real-time user feedback during development.</b>
          </li >
        </ul>

      </Paragraph>

      <Paragraph title={"Disclaimer"}>
        <p className="mt-3 small-info">This is a personal freelance project for Customer trend.</p>
      </Paragraph>

    </>

  );
}

export default CaseStudy;
