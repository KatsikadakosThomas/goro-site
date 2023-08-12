import Head from 'next/head'
import Image from 'next/image'
import Mutables from '../mutables'
import CaseCard from '../components/CaseCard'
import { useRouter } from 'next/router';

export default function Home() {
  
  const router = useRouter();



  return (
    <>
      <style jsx>
        {`
    .paragraph{
     max-width:60%;
     margin:0 10px 0 10px;
    }

    .border-bottom{
      border-bottom: 1px solid #EBEBEB;
    }

    @media only screen and (max-width: 768px) {
    .paragraph {
    max-width:100%;
  }
 
}
.mt-10{
    margin-top:100px;
  }

  .preFooter{
    max-width:500px;
    margin-bottom:100px;
  }
    `}
      </style>
      <Head>
        <title>Gkorovelis Dimitris Portofolio</title>
        <meta property="og:title" content="Gkorovelis Dimitris Portofolio" />
        
        <meta property="og:description" content="I am a Product Designer (Web) and I've led the design of digital products 
                                                and websites for businesses and large corporations.
                                                I believe that great design comes from great observation. So research and attention to detail 
                                                go hand-in-hand with my work."/>

        <meta property="og:type" content="website" />
        <meta property="og:url" content={router.asPath} />
        <meta property="og:image" content="/Ellipse 1.png" />
      </Head>

      <main>
        <section id="introduction" className='border-bottom'>

          <div className='container d-flex justify-content-center mt-5  pb-5 flex-column flex-md-row align-items-center'>
            <figure className='me-5 mb-0'>
              <Image src="/Ellipse 1.png" width={200} height={200} alt="Gkorovelis Dimitris"></Image>
            </figure>

            <article className='paragraph'>
              <div id="headline">
                <span className='s33 roboto-font'><b>Yeia sou!</b> <i className='s28'>&quot;Yah-soo&quot;</i> <b>Hello! I am Dimitris!</b> &#128075;</span>
              </div>

              <p className="p-color w300 roboto-font mt-3">
              With 6+ years as a Product Designer & UX Designer, I blend creativity and problem-solving to make technology accessible, meaningful, and memorable.
              </p>

              <p className="p-color w300 roboto-font">
               My expertise includes leading teams, conducting user research and testing, and designing systems that users love. Connect with me to create impact together!
              </p>

            </article>
          </div>
        </section>

        <section className='mt-5'>
          {Mutables.caseStudy.map((card, idx) => {
            return <CaseCard key={idx} card={card} index={idx} />
          })}

        </section>

        <section className='text-center mt-10 preFooter container'>
          <h3>Let&apos;vs meet for a coffee!</h3>
          <p className='small-info mt-3'> I settled in Copenhagen, Denmark 🇩🇰 and I&apos;am passionately involved in product design at PSQR. My mission is to introduce sustainability solutions to businesses, always with a user-centric approach. If you are nearby, let&apos;vs connect and discuss the impact of thoughtful design.<br/> Send me a message!</p>
          <p className='roboto-font mt-3'><b>UX Design is a lot more fun when everyone is included.</b> </p>
        </section>



      </main>
    </>
  )
}
