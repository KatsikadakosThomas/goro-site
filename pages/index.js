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
                <span className='s33 roboto-font color484848'><b>Yeia sou! /&apos;ʝe̞.a &apos;su/ - Hello! I am Dimitris! </b> &#128075;</span>
              </div>

              <p className="p-color w300 roboto-font mt-3">
              With over <b className='w700 color484848'>7 years</b> of experience as a<b className='w700 color484848'> Product Designer & UI/UX Designer</b>, I blend creativity and problem-solving to make technology accessible, meaningful, and memorable.
              </p>

              <p className="p-color w300 roboto-font">
               
My expertise includes leading teams, conducting user research with testing, and designing systems that users love. I am dedicated to creating impact and I believe that together, we can achieve great things. Let&apos;s  <a className='linkStyle' href="https://www.linkedin.com/in/gorodimitris/" target='_blank'>connect</a> or  <a className='linkStyle' href="mailto:gorodimitris@gmail.com" target='_blank'> start a conversation</a> about how we can create impact together!
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
          <h3>Ready to Create Something Amazing?</h3>
          <p className='small-info mt-3'> Living in the picturesque Copenhagen, Denmark 🇩🇰, I am actively engaged in digital product design at <a className='linkStyle' href="https://psqr.eu/" target="_blank">PSQR</a>, with a commitment to integrating sustainability and a user-centric approach into the heart of businesses.

</p>
          <p className='small-info mt-3'>No matter where you are, I am always open to connect and discuss the transformative potential of mindful design in the world of technology. </p>

          <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginBottom:"3px"}}>
<path d="M3 8L8.44992 11.6333C9.73295 12.4886 10.3745 12.9163 11.0678 13.0825C11.6806 13.2293 12.3194 13.2293 12.9322 13.0825C13.6255 12.9163 14.2671 12.4886 15.5501 11.6333L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="#3366CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> <a className='linkStyle' href="mailto:gorodimitris@gmail.com" target='_blank'>Send a message!</a>,


<p className='roboto-font mt-3 color484848'><b>Together, we can create digital products that not only solve problems but also contribute to a better world.</b> </p>
        </section>

          


      </main>
    </>
  )
}
