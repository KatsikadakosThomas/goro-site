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
                background-image:url(${Mutables.caseStudy[1].heroPhoto});
                background-position: center;
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

        #tableContainer{
          width:934px;
          margin:auto; 
        }

        @media only screen and (max-width: 1030px) {
          #tableContainer {
              width:730px;
            }
 
        }
        @media only screen and (max-width: 785px) {
          #tableContainer {
              width:530px;
            }
 
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
          <h1 className="w900 white">{Mutables.caseStudy[1].title}</h1>
          <h3 className="white">{Mutables.caseStudy[1].subTitle}</h3>
          <p className="w300 white">{Mutables.caseStudy[1].type}</p>
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
                Need way to automate check-in, sell products and help appartments visitors on airbnb appartments before they arrive
              </td>
            </tr>
            <tr>
              <td className="firsttd">
                <b> Define</b>
              </td>
              <td>
                <ul>
                  <li>
                    <b>Check in</b> with physical presence of the host  <b> is very time consuming</b>
                  </li>
                  <li>
                    <b> Lack of a way to sell services</b> like laundry, order cleaning, order breakfast or a book taxi
                  </li>
                  <li>
                    Visitors don&apos;t have a quick way to<b> call greek emergency numbers</b>
                  </li>
                  <li>
                    House appliances are hard to operate and<b>printed manuals are not available</b>
                  </li>

                </ul>

              </td>
            </tr>
            <tr>
              <td className="firsttd">
                <b> Ideate</b>
              </td>
              <td>
                Add right after check in the option for online check in.
                Include a marketplace with services and everyday products all available for purchace before arrival.
                Have a persistent button in the home screen with quick call functionality to fire dept. police or ambulance.
                Include pdfs inside the platform with all the user manuals and guides on how to use house appliances.
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

      <Paragraph title={"Summary"} info={"HELP TOURISTS ACHIEVE A MORE ENJOYABLE EXPERIENCE DURING THEIR STAY"}>
        <p className="mt-3 small-info">
          This companion app was created with a view to enhance the stay of tourists booking short term stay in Greece by providing concierge services.
          With a connection to individual apartments with specific services available to each one of them the user can gain access to smart features,
          early check in, market items and direct communication with the host.
        </p>
      </Paragraph>

      <div id="carousel">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          navigation
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide><img alt="Helios _guest_slide_1" src="/Helios_guest_slide_1.jpg" style={{ objectFit: "contain", width: "100%" }}></img></SwiperSlide>
          <SwiperSlide><img alt="Helios _guest_slide_2" src="/Helios_guest_slide_2.jpg" style={{ objectFit: "cover", width: "100%" }}></img></SwiperSlide>
        </Swiper>
      </div>

      <Paragraph title={"The competition was on the rise"} info={"COMPETITIVE ANALYSIS"}>
        <p className="mt-3 small-info">
          Tourism in Greece is on the rise and concierge services happen to be one of most investing sectors that can help hosts stand out.
          Villas and hotels that I came across with in my research were providing car services, contactless check in and many more conveniences.
          With this solution we&apos;ve created a central point of reference for all necessary interactions.
        </p>
      </Paragraph>

      <div style={{backgroundColor:"#F8F4F3",padding:"50px 0px"}}>
        <Paragraph title={"How is works"} info={"USER JOURNEY"}>
          <p className="mt-3 small-info">
            We&apos;ve written down the actions needed to make a reservation and in which point the app is engaged.
            This served as an access point to every available service for the visitors before and after their arrival.
          </p>
        </Paragraph>
        <div style={{ margin: "auto", textAlign: "center" }}>
        <img className="uncontainedImages mb-4" src="/HeliosGuest-Journeymap1.png" alt="HeliosGuest-Journeymap1" />
      </div>
      </div>


      <Paragraph title={"Looking through the eyes of our user"} info={"EMPATHISE STEP"}>
        <p className="mt-3 small-info ">
        Our persona is the person we see as the our future user of the app. 
        I&apos;ve made some research and after some private interviews i&apos;ve created the profile of a typical guest.
        </p>
      </Paragraph>

      <div style={{ margin: "auto", textAlign: "center" }}>
        <img className="uncontainedImages mb-4" src="/HeliosGuest-Persona-Pic01.jpg" alt="HeliosGuest-Persona-Pic01" />
      </div>

      <div className="mt-5" style={{backgroundColor:"#F0B263",padding:"50px 0px"}}>

        <Paragraph info={"WIREFRAME, PROTOTYPE"} title={"Creating the app structure from the beginning"} />


        <Paragraph title={"Paper prototypes"}>
      <p className="mt-3 small-info">
        Aiming to facilitate fast brainstorming sessions we relied on paper prototypes to express the main structure and use of the app.
        </p>
        </Paragraph>

        <div  style={{ margin: "auto", textAlign: "center" }}>
        <img className="uncontainedImages mb-4" src="/PaperPrototype.jpg" alt="PaperPrototype" />
      </div>

      <Paragraph title={"Visual design"}>
      <p className="mt-3 small-info">
      Design template ware created with all the necessary components for the platform.
        </p>
        </Paragraph>

        <div  style={{ margin: "auto", textAlign: "center" }}>
        <img className="uncontainedImages mb-4" src="/HeliosGuest-Visualdesign.jpg" alt="HeliosGuest-Visualdesign" />
      </div>


      </div>

      <Paragraph title={"Combining smart devices and services"} info={"CONCLUSION"}>
        <p className="mt-3 small-info">Design such a tool has it&apos;s challenges. We faced some negative comments at the beginning,
        Smart devices and appartments services have an impact on a visitors stay. They can increase or, in case they are mishandled, decrease the quality of one&apos;s stay. 
        With this app we try to make the experience personalised and more direct. We wanted to make the most of it.</p>

        <p className="mt-3 small-info">
        We&apos;ve contacted visitors and some gave us feedback. It impacted the design process.
         We took their opinion and combined it with the business goals. 
         The end result was something that both satisfied the team, and the visitors.
        </p>
        <p className="mt-3 small-info">
        My process is a very collaborative one. I believe that the best product experience is one that we all come together to define. 
        Our role in the end is to educate, listen, and make things better,
         but ultimately, it&apos;s up to the stakeholders/client to make good choices for the project&apos;s direction and need. 
         Note that we don&apos;t approach every project with all of these components every time. This framework has worked well for me and my clients, 
         but not every client needs it.
        </p>
      </Paragraph>

      <Paragraph title={"What I could do differently?"}>
        <ul>
          <li className="color484848">
            <b>Take a personal exprerience of whole stay in the apartment</b>
          </li>
          <li className="color484848">
            <b> Interview more people</b>
          </li >
          <li className="color484848">
            <b>Create a design library for consistency, reducing building time and a way to create room for innovation</b>
          </li>
        </ul>

      </Paragraph>

      <Paragraph title={"Disclaimer"}>
        <p className="mt-3 small-info">This is a personal freelance project for Smart Cozy Suites.</p>
      </Paragraph>

    </>

  );
}

export default CaseStudy;
