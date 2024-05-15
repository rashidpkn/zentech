import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { Link } from 'react-router-dom'
import googlePlay from '../../assets/img/footer/google-play.png'
import appStore from '../../assets/img/footer/app-store.png'


export default function Footer() {

  const links = {
    application : [
      {link:'/',title:'Intelligent Agreement Management'},
      {link:'/',title:'IAM Core'},
      {link:'/',title:'IAM for Customer Experience'},
      {link:'/',title:'IAM for Sales'},
      {link:'/',title:'All IAM Applications'},
    ],
    pricing:[
      {link:'/',title:'eSignature Plans'},
      {link:'/',title:'Real Estate Plans'},
      {link:'/',title:'API Plans'},
    ],
    support:[
      {link:'/',title:'Support Center'},
      {link:'/',title:'Customer Success'},
      {link:'/',title:'Community'},
      {link:'/',title:'Trust Portal'},
    ],
    resources:[
      {link:'/',title:'Resource Center'},
      {link:'/',title:'Blogs'},
      {link:'/',title:'Customer Stories'},
      {link:'/',title:'Events'},
      {link:'/',title:'Webinars'},
      {link:'/',title:'Docusign University'},
      {link:'/',title:'Legality Guide'},
      {link:'/',title:'Trust Center & System Status'},
    ],
    company:[
      {link:'/',title:'About Us'},
      {link:'/',title:'Product Releases'},
      {link:'/',title:'Docusign Momentum'},
      {link:'/',title:'Careers'},
      {link:'/',title:'Leadership'},
      {link:'/',title:'News Center'},
      {link:'/',title:'Investor Relations'},
      {link:'/',title:'Contact Us'},
      {link:'/',title:'Accessibility'},
    ],
    product:[
      {link:'/',title:'eSignature'},
      {link:'/',title:'Contract Lifecycle Management'},
      {link:'/',title:'Identify'},
      {link:'/',title:'Document Generation'},
      {link:'/',title:'Web Forms'},
      {link:'/',title:'All Products'},
    ],
    industries:[
      {link:'/',title:'Financial Services'},
      {link:'/',title:'Insurance'},
      {link:'/',title:'Real Estate'},
      {link:'/',title:'Government'},
    ],
    developers:[
      {link:'/',title:'Developer Center'},
      {link:'/',title:'Free Developer Account'},
      {link:'/',title:'API Overview'},
      {link:'/',title:'Open Source'},
    ],
    businessSize:[
      {link:'/',title:'Enterprise'},
      {link:'/',title:'Small Business'},
      {link:'/',title:'Individuals'},
    ],
    partners:[
      {link:'/',title:'Partner Portal'},
      {link:'/',title:'Partner Login'},
      {link:'/',title:'ISV Embedded eSignature'},
    ]
  }


  return (
    <footer className='py-5 bg-[#f8f3f0] text-[#47385e]'>
        <div className="container mx-auto px-5">
          <div className="py-5 grid grid-cols-2 lg:grid-cols-5 gap-10">
           <FooterLinks heading='COMPANY'  links={links.company}/>
           <FooterLinks heading='RESOURCES'  links={links.resources}/>
           <FooterLinks heading='PRODUCTS'  links={links.product}/>
           <FooterLinks heading='APPLICATIONS'  links={links.application}/>
           <FooterLinks heading='SUPPORT'  links={links.support}/>
           <FooterLinks heading='INDUSTRIES'  links={links.industries}/>
           <FooterLinks heading='DEVELOPERS'  links={links.developers}/>
           <FooterLinks heading='PARTNERS'  links={links.partners}/>
           <FooterLinks heading='PRICING'  links={links.pricing}/>
           <FooterLinks heading='BUSINESS SIZE'  links={links.businessSize}/>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center py-5 gap-5">
            <div className="flex flex-col lg:flex-row gap-5 items-center">
              <select name="" id="" className='border bg-transparent h-12 w-36 px-2 border-black/30' aria-label="State">
                <option value="IN">IN</option>
                <option value="US">US</option>
                <option value="UK">UK</option>
                <option value="UAE">UAE</option>
              </select>

          <div className="flex gap-5">
            <Icon className='cursor-pointer' icon={'ic:sharp-facebook'} width={30} height={30} />
            <Icon className='cursor-pointer' icon={'pajamas:twitter'} width={24} height={24}  />
            <Icon className='cursor-pointer' icon={'mdi:youtube'} width={30} height={30}  />
            <Icon className='cursor-pointer' icon={'mdi:linkedin'} width={30} height={30}  />
          </div>
    
            </div>
            <div className="flex gap-5">
              <img src={googlePlay} width={150} alt="" />
              <img src={appStore} width={150} alt="" />
              
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center py-5 text-xs gap-5 text-center lg:text-left">
              <ul className='flex text-xs gap-5 flex-col lg:flex-row'>
                <li className='hover:underline cursor-pointer'>Terms of Use</li>
                <li className='hover:underline cursor-pointer'>Privacy Notice</li>
                <li className='hover:underline cursor-pointer'>Notice to California Residents</li>
                <li className='hover:underline cursor-pointer'>Cookies Settings</li>
                <li className='hover:underline cursor-pointer'>Intellectual Property</li>
                <li className='hover:underline cursor-pointer'>odern Slavery Act Statement</li>
              </ul>

            <p className='hover:underline cursor-pointer'>© Docusign, Inc. 2024</p>

          </div>

        </div>
    </footer>
  )
}

const FooterLinks = ({heading='',links=[]}) =>{
  return(
    <div className=''>
        <h4 className='font-medium'>{heading}</h4>
        <ul className='mt-5 space-y-1'>
          {links.map(link=><li key={link.title}>
            <Link to={link.link} title={link.title} className='font-medium text-sm hover:underline'>{link.title}</Link>
          </li>)}
        </ul>
    </div>
  )
}