import Image from 'next/image'
import HomeButton from './HomeButton';


const CaseCard = ({card,index}) => {
    return ( 
<>
<style jsx>
{`

.img{
    height:100%;
    width:100%;
    object-fit: cover;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
}
.cardContainer{
    width:70%;
    height:100%;
}

.cardMine{
    max-width:900px;
    height:366px;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.12);
    border-radius: 16px;
    padding-left:0;
    padding-right:0;
}
.titles{
    width:50%;
    padding:0 20px 0 20px
}

@media only screen and (max-width: 921px) {
    .cardMine {
    max-width:700px;
  }




}


@media only screen and (max-width: 768px) {
    .cardMine {
    max-width:80vw;
    max-height:966px;
    height:auto;
  }
  .cardContainer{
    width:100%;
    height:60%;
}

  .img{
    border-top-left-radius: 16px;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 16px;  
}
.titles{
    width:100%;   
    margin-top:15px; 
    margin-bottom:25px;      
}



}



`}
</style>

<div className="container d-flex flex-md-row  flex-column cardMine text-break mb-4 " >

        <div className="cardContainer">
        <img className='img' src={card.photo} alt={card.title}/>
        </div>

        <div className='titles card-body d-flex flex-column justify-content-center '>
            <p className='small-info'>{card.type}</p>
            <h5>{card.title}</h5>
            <p>{card.subTitle}</p>
            
          
            <HomeButton text="View case study" slug={card.slug}></HomeButton>
           
        </div>

      

</div>
</>
     );
}
 
export default CaseCard;