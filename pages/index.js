import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
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
                I am a Product Designer (Web) and I&apos;ve led the design of digital products and websites for businesses and large corporations.
                I believe that great design comes from great observation. So research and attention to detail go hand-in-hand with my work.
              </p>

              <p className="p-color w300 roboto-font">
                I always loved two things, 🎨️ and 🖥️. After many years those things became a passion for design and technology. As a Visual and Interaction designer in ATOS, I contribute to a very skillful agile team of developers to make usable, accessibile and functional web products.
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
          <h3>Let’s meet for a coffee!</h3>
          <p className='small-info mt-3'> I am currently in Athens, Greece making users lives easier for Atos and my clients. Soon to relocate to Copenhagen, Denmark 🇩🇰 and expand my horizons.<br /> Will you be around? Text me.</p>
          <p className='roboto-font mt-3'><b>UX Design is a lot more fun when everyone is included.</b> </p>
        </section>



      </main>
    </>
  )
}
