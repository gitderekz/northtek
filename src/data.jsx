import { IoCallOutline,IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaYoutube,FaInstagram } from "react-icons/fa";
import { CiLinkedin ,CiFacebook} from "react-icons/ci";
import { profile1,profile2, profile3,profile4,profile5,profile6,profile7,profile8,profile9,profile10,profile11,profile12,
        //  panel,turbine,batteries, 
         softwares,networking,cameras,ipphones,electromechanical,irrigation,general,
         project1,project2,project3,project4,project5,project6,project7,project8,
         member1, member2, member3, member4,member5,member6,member7,member8,member9,member10,member11,member12} from "./assets";

export const navTabs = [
    {name:"Home",id:'header'},
    {name:"About Us",id:'about'},
    {name:"Services",id:'services'},
    {name:"Clients",id:'team'},
    // {name:"Projects",id:'project'},
    {name:"Partners",id:'testimonial'},
    {name:"FAQ",id:'faq'},
    {name:"Contact",id:'contact'},
];

export const services = [
  {
    name:"WATER PUMPS AND SPARE PARTS",
    image:softwares,
    description:`We supply and install high quality water pumps from leading 
                suppliers worldwide, these pumps are known for reliability`,
  },
  {
    name:"SOLAR PUMPING",
    image:networking,
    description:`As professional solar water pump system supplier and installer, 
                we offer a comprehensive range of photovoltaic 
                water pumping systems, including solar water well pump system, 
                solar submersible water pump system...`,
  },
  {
    name:"BOREHOLE SERVICES",
    image:cameras,
    description:`We provide high quality and trusted borehole services, whether it is 
              Hydrological survey, borehole drilling, Borehole flushing or pump 
              test we get you covered`,
  },
  {
    name:"WATER TREATMENT AND SPARE PARTS",
    image:ipphones,
    description:`We provide high quality, trusted and reliable products, Spare parts 
              (e.g filters) and services in the field of water treatment (both clean 
              and waste water management/ Domestic and industrial).`,
  },
  {
    name:"ELECTROMECHANICAL WORKS",
    image:electromechanical,
    description:`As experts in the industry, we serve our clients 
              in different projects as Electromechanical contractor, we are trusted and 
              reliable partner in the said field and ready to handle your project professionally`,
  },
  {
    name:"IRRIGATION",
    image:irrigation,
    description:`provide various irrigation systems (Sprinklers, Drip, Centre pivot and 
              all others) to our clients so as to ensure proper growth of the crops when 
              natural water sources and rain are not sufficient to provide plant water 
              demand and in areas where rainfall is irregular or dry times or drought is expected`,
  },
  {
    name:"GENERAL SUPPLIES",
    image:general,
    description:`We supply of different tools and equipment’s for industrial, agricultural, 
              domestic, mining and other variety of use. Whether you require mechanical, 
              electrical spare parts and tools or pipes, fittings and plumbing equipment 
              we can save you with great products from local and worldwide leading 
              manufacturers in the industry.`,
  },
]

export const teams = [
  {
    name:"Bank Of Tanzania",
    title:"",
    profile:profile1,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Mkulanzi",
    title:"",
    profile:profile2,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Matongo Gold Mine",
    title:"",
    profile:profile3,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"RUWASA",
    title:"",
    profile:profile4,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Morogoro",
    title:"",
    profile:profile5,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"TARI",
    title:"",
    profile:profile6,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Lindi",
    title:"",
    profile:profile7,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Tanesco",
    title:"",
    profile:profile8,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"JUDICIARY",
    title:"",
    profile:profile9,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"MANAWASA",
    title:"",
    profile:profile10,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"FORTUNA",
    title:"",
    profile:profile11,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"NYAMINYWILI",
    title:"",
    profile:profile12,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
]
export const projects = [
  {
    title:"Boreholes",
    image:project1,
    category:"Boreholes",
    description:`We provide high quality and trusted borehole services, whether it is 
              Hydrological survey, borehole drilling, Borehole flushing or pump 
              test we get you covered`,
  },
  {
    title:"Water Pumping",
    image:project2,
    category:"Water Pumping",
    description:`We supply and install high quality water pumps from leading 
                suppliers worldwide, these pumps are known for reliability`,
  },
  {
    title:"Irrigation",
    image:project3,
    category:"Irrigation",
    description:`provide various irrigation systems (Sprinklers, Drip, Centre pivot and 
              all others) to our clients so as to ensure proper growth of the crops when 
              natural water sources and rain are not sufficient to provide plant water 
              demand and in areas where rainfall is irregular or dry times or drought is expected`,
  },
  {
    title:"Solar Pumping",
    image:project4,
    category:"Solar Pumping",
    description:`As professional solar water pump system supplier and installer, 
                we offer a comprehensive range of photovoltaic 
                water pumping systems, including solar water well pump system, 
                solar submersible water pump system...`,
  },
  {
    title:"Water Treatment",
    image:project5,
    category:"Water Treatment",
    description:`We provide high quality, trusted and reliable products, Spare parts 
              (e.g filters) and services in the field of water treatment (both clean 
              and waste water management/ Domestic and industrial).`,
  },
];

export const faq = [
  {
    title:"How do you ensure water solutions are safe and clean?",
    description:`
       We use tested engineering methods, proper filtration systems, and water quality assessments to ensure all water solutions meet safety standards and are sustainable long-term.
    `,
  },
  {
    title:"What types of energy solutions do you provide?",
    description:`
       We specialize in
      Solar power systems,
      Backup energy solutions,
      Energy-efficient system design.
      All solutions are designed to be cost-effective and environmentally friendly.
    `,
  },
  {
    title:"How are your services different from other providers?",
    description:`
       We don’t just complete projects we
      listen to client needs,
      Meet agreed deadlines,
      Deliver durable, long-lasting solutions and
      provide ongoing support after installation
    `,
  },
  {
    title:"Are your solutions affordable?",
    description:`
       Affordability is central to our mission. We design cost-effective solutions without compromising quality, ensuring accessibility for communities and organizations.
    `,
  },
]

export const testimonial = [
  {
    image:member1,
    name:'PEDROLLO',
    review:` ...`
  },
  {
    image:member2,
    name:'GRUNDFOS',
    review:` ....`
  },
  {
    image:member3,
    name:'LOWARA',
    review:` ...`
  },
  {
    image:member4,
    name:'WILO',
    review:` ...`
  },
  {
    image:member5,
    name:'CAPRARI',
    review:` ...`
  },
  {
    image:member6,
    name:'DAYLIFF',
    review:` ...`
  },
  {
    image:member7,
    name:'SHIMGE',
    review:` ...`
  },
  {
    image:member8,
    name:'KSB',
    review:` ...`
  },
  {
    image:member9,
    name:'PURITY',
    review:` ...`
  },
  {
    image:member10,
    name:'YUZUAK',
    review:` ...`
  },
  {
    image:member11,
    name:'EBARA',
    review:` ...`
  },
  {
    image:member12,
    name:'MICNO',
    review:` ...`
  }

];

export const contacts = [
  {
    name:"Email",
    value:"info@northtek.co.tz",
    icon:<MdOutlineAlternateEmail />,
  },
  {
    name:"Phone Number",
    value:"+255 652 235 255",
    icon:<IoCallOutline/>,
  },
  {
    name:"Address",
    value:"P.O BOX 1718, Mwanza Tanzania",
    icon:<IoLocationOutline/>,
  },
]

export const footer = [
    {
      name:"Explore",
      routes:[
        {name:"Home",id:'header'},
        {name:"About Us",id:'about'},
        {name:"Services",id:'services'},
        {name:"Partners",id:'testimonial'},
        {name:"Project",id:'project'},
        {name:"Clients",id:'team'},
        {name:"FAQ",id:'faq'},
        {name:"Contact",id:'contact'},
      ]
    },
    {
        name:"Gallery",
        routes:[
          {name:"Privacy Policy"},
          {name:"Terms and Conditions"},
          {name:"Cookie Policy"},
        ]
      },
]


