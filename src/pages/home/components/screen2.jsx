import React from 'react'
import { Link } from 'react-router-dom'
import { path } from '../../../router/path'

export default function Screen2() {
  return (
    <section className='container mx-auto text-center lg:text-left'>
      <h2 className='text-center text-4xl py-5 font-medium text-[#47385e]'>Our Services</h2>
        <div className="grid lg:grid-cols-2 gap-5  px-5">
            <img src="/assets/img/home/web-development.webp" className='rounded-lg max-h-[500px] h-full w-full object-cover object-top' alt="Zentech It Solutions Web Development" />
            <div className="flex flex-col justify-center items-center lg:items-start gap-5">
                <h2 className='text-3xl'>Web Development</h2>
                <p className='text-[#756e85]'>In the vibrant digital landscape of Perinthalmanna, one name stands out as the beacon of excellence in web development – Zentech IT Solutions. Renowned for its innovative solutions, unmatched expertise, and unwavering commitment to client satisfaction, Zentech has carved a niche for itself as the go-to destination for all web development needs in the region.</p>
                <Link to={path.root} className='px-6 py-3 bg-[#071d49] rounded-lg text-white'>View All</Link>
            </div>

            <div className="flex flex-col justify-center items-center lg:items-start gap-5">
                <h2 className='text-3xl'>Search Engine Optimization</h2>
                <p className='text-[#756e85]'>In the ever-evolving digital landscape, where visibility can make or break a business, having a reliable SEO agency by your side is paramount. Introducing Zentech IT Solutions, your ultimate partner for conquering the digital realm in Perinthalmanna and beyond.</p>
                <Link to={path.root} className='px-6 py-3 bg-[#071d49] rounded-lg text-white'>View All</Link>
            </div>
            <img src="/assets/img/home/seo.webp" className='rounded-lg max-h-[500px] h-full w-full object-cover object-top' alt="Zentech IT Solutions Search Engine Optimization" />


            <img src="/assets/img/home/local-seo.webp" className='rounded-lg max-h-[500px] h-full w-full object-cover object-top' alt="Zentech IT Solutions Search Engine Optimization" />
            <div className="flex flex-col justify-center items-center lg:items-start gap-5">
                <h2 className='text-3xl'>Local SEO</h2>
                <p className='text-[#756e85]'>In the digital age, establishing a robust online presence is paramount for businesses to thrive, especially in local markets. Perinthalmanna, a bustling town in Kerala, India, is witnessing a surge in businesses harnessing the power of the internet to attract local customers. Amidst the myriad of options, one name stands out – Zentech IT Solutions, hailed as the premier local SEO agency in Perinthalmanna. Let's delve into what sets Zentech apart and why it's the go-to choice for businesses aiming to dominate the local market.</p>
                <Link to={path.root} className='px-6 py-3 bg-[#071d49] rounded-lg text-white'>View All</Link>
            </div>

            <div className="flex flex-col justify-center items-center lg:items-start gap-5">
                <h2 className='text-3xl'>Branding</h2>
                <p className='text-[#756e85]'>
                Elevate Your Brand with the Best Branding Agency in Perinthalmanna: Zentech IT Solutions <br />

In the bustling town of Perinthalmanna, where businesses strive to stand out amidst fierce competition, finding the right branding agency is paramount. Look no further than Zentech IT Solutions, the beacon of innovation and creativity in the realm of branding.
                </p>
                <Link to={path.root} className='px-6 py-3 bg-[#071d49] rounded-lg text-white'>View All</Link>
            </div>
            <img src="/assets/img/home/branding.webp" className='rounded-lg max-h-[500px] h-full w-full object-cover object-top' alt="Zentech IT Solutions Branding" />


        </div>
    </section>
  )
}
