import Image from 'next/image'
import HomeButton from './HomeButton';


const CaseCard = ({card,index}) => {
    return ( 
<>
<style jsx>
{`

.img{
    height:60%;
    width:100%;
    object-fit: cover;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
}

.cardMine{
    max-width:900px;
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

.img{
    width:60%
}


}


@media only screen and (max-width: 768px) {
    .cardMine {
    max-width:500px;
  }

  .img{
    border-top-left-radius: 16px;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 16px;
    width:100%;
}
.titles{
    width:100%;   
    margin-top:15px; 
    margin-bottom:25px;      
}



}

@media only screen and (max-width: 540px) {
    .cardMine {
    max-width:300px;
  }
}

`}
</style>

<div className="container d-flex flex-md-row  flex-column cardMine text-break mb-4 " >

        <img className='img' src={card.photo} alt={card.title}/>


        <div className='titles card-body d-flex flex-column justify-content-center '>
            <p className='small-info'>{card.type}</p>
            <h5>{card.title}</h5>
            <p>{card.subTitle}</p>
            
          
            <HomeButton text="View case study" index={index}></HomeButton>
           
        </div>

      

</div>
</>
     );
}
 
export default CaseCard;