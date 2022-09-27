import Link from 'next/link';

export default class Mutables {
    
    //the name is the name that it will be displayed in the nav, url is the url that it will lead(if it need to link an external url)
    //Sample Object to copy paste
    //   {name:"",url:""},

    static nav=[
        {name:"Linkedin",url:"https://www.linkedin.com/in/gorodimitris/",type:"simple"},
        {name:"CV",url:"",type:"simple"},
        {name:"Work",url:"",type:"render",
        renderer:({link})=>{
            return(
                <div class="dropdown">
                <a class="me-5 links mt-md-0 mt-3" href="#"  id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  Work
                </a>
              
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    {this.caseStudy.map((caseStudy,idx)=>{
                        return<Link href={`/CaseStudy/${caseStudy.slug}`}><li key={caseStudy.slug} class="dropdown-item pe-auto" style={{cursor:"pointer"}}>{`Case Study ${idx+1}`}</li></Link> 
                    })}
                </ul>
              </div>
            )
        }
        },
        {name:"gorodimitris@gmail.com",url:"mailto:tkatsika@gmail.com",type:"simple"},
    ]

    static caseStudy=[
        {type:"UI/UX DESIGN / STRATEGY",
        title:"Marketeers have access to high quality official assets for campaigns",
        subTitle:"Making a easy to use UI for marketeers",
        photo:"/Frame190.png",
        heroPhoto:"/Frame153.jpg",
        slug:"Marketeers-high-quality-assets"
        },
        {type:"UI/UX DESIGN / STRATEGY",
        title:"Concierge services for airbnb apartments",
        subTitle:"Accommodation leveled up",
        photo:"/Frame193.png",
        heroPhoto:"/Frame154.jpg",
        slug:"airbnb-apartments"
        }
    ]

    static CS1VisualDesignPhotos=["ButtomNavMobile.jpg", "Buttons-1.jpg", "Buttons.jpg", "Character.jpg", "Dialogs.jpg", "ExpansionPanels.jpg", "Icons.jpg", "Steppers.jpg", "StyleSheet.jpg", "Tabs.jpg", "TextFields.jpg", "Toolsbars.jpg",
              ]
};