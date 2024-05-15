import React from 'react'
import { Link } from 'react-router-dom'

export default function Screen3() {
  return (
    <section className='container mx-auto flex flex-col lg:flex-row justify-center items-center gap-y-10 gap-x-24 py-[5%] px-5'>
            <img width={400} className='rounded-xl' src="/assets/img/home/leading-it-solutions.webp" alt="It’s time to modernize your agreement process" />
            <div className="space-y-4 max-w-lg w-full text-lg text-center lg:text-left text-[#47385e]">
                <h2 className='text-4xl'>Zentech IT Solutions <br /> is the leading IT solutions <br /> provider in Perinthalmanna.</h2>
                <p className=''>In the vibrant town of Perinthalmanna, Zentech IT solutions firm stands as a beacon of innovation and reliability.</p>
                <p className=''>With a team of skilled professionals dedicated to staying ahead of technological trends, we deliver tailored solutions to meet the diverse needs of businesses.</p>
                <p className=''>Our commitment to customer satisfaction and continuous improvement has earned us the trust and loyalty of clients, solidifying our position as the foremost provider of IT services in the region.</p>
                <div className="flex flex-col lg:flex-row items-center gap-4">
                    <button className='bg-[#5422ff] hover:bg-[#26065d] duration-500 text-white px-5 py-3 rounded-md'>Why Choose Us</button>
                    <Link to={'/'} className='text-[#6834ff]'>Make a free appointment</Link>
                </div>
            </div>
    </section>
  )
}
