import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className='h-[calc(100vh-160px)] hero-bg text-white text-center'>
            <div className="container mx-auto flex flex-col justify-center items-center gap-[5%]  py-[5%] px-5 h-full">
                <h1 className='text-3xl lg:text-5xl '>Boost Your Online <br /> Visibility Effortlessly.</h1>
                <p className='text-lg lg:text-xl'>In today's digital landscape, achieving online success is paramount for businesses. <br /> In Perintalmanna, Zentech IT Solutions emerges as the beacon of excellence, <br /> offering unparalleled SEO and IT solutions tailored to elevate your online presence.</p>

                  <p className='text-sm'>Zentech IT Solutions is a leading provider of comprehensive IT services, including SEO solutions, web development, <br /> software solutions, and digital marketing services.  With years of experience and a team of skilled professionals,  <br />Zentech has established itself as a trusted partner for businesses seeking innovative technology solutions.</p>  
              

                
            </div>
    </section>
  )
}
