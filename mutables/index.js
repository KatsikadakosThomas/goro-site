import Link from 'next/link';

export default class Mutables {
    
    //the name is the name that it will be displayed in the nav, url is the url that it will lead(if it need to link an external url)
    //Sample Object to copy paste
    //   {name:"",url:""},

    static nav=[
        {name:"Linkedin",url:"https://www.linkedin.com/in/gorodimitris/",type:"simple"},
        {name:"CV",url:"https://bit.ly/3thLEmv",type:"simple"},
        {name:"Work",url:"",type:"render",
        renderer:({link})=>{
            return(
                <div class="dropdown ">
                <a class="me-5 links mt-3" href="#"  id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  Work
                </a>
              
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    {this.caseStudy.map((caseStudy,idx)=>{
                        return<Link href={`/CaseStudy/${caseStudy.slug}`}><li key={caseStudy.slug} class="dropdown-item pe-auto" style={{cursor:"pointer"}}>{caseStudy.dropdown}</li></Link> 
                    })}
                </ul>
              </div>
            )
        }
        },
        {name:"gorodimitris@gmail.com",url:"mailto:tkatsika@gmail.com",type:"simple"},
    ]

    static caseStudy=[
        {type:"Strategy, UI/UX Design, Product Design - 12 Minute read",
        title:"Swipe Surveys app, where Research Meets Rewards",
        subTitle:"Bridging the Gap Between Data Collection and User Engagement",
        photo:"/Swipe_card.jpg",
        heroPhoto:"/Swipe-banner.jpg",
        slug:"swipe-case-study",
        dropdown:"Swipe Surveys app"
        },
       
        {type:"UI/UX DESIGN / STRATEGY",
        title:"Concierge services for airbnb apartments",
        subTitle:"Accommodation leveled up",
        photo:"/helios_guerst_card.jpg",
        heroPhoto:"/helios_banner.jpg",
        slug:"airbnb-apartments",
        dropdown:"Concierge services"
        },
        {type:"UI/UX DESIGN / STRATEGY",
        title:"Marketeers have access to high quality official assets for campaigns",
        subTitle:"Making a easy to use UI for marketeers",
        photo:"/asset_bank_card.jpg",
        heroPhoto:"/project1.jpg",
        slug:"Marketeers-high-quality-assets",
        dropdown:"Asset Bank"
        },
        
       
    ]

    static CS1VisualDesignPhotos=["ButtomNavMobile.jpg", "Buttons-1.jpg", "Buttons.jpg", "Character.jpg", "Dialogs.jpg", "ExpansionPanels.jpg", "Icons.jpg", "Steppers.jpg", "StyleSheet.jpg", "Tabs.jpg", "TextFields.jpg", "Toolsbars.jpg",
              ]
};