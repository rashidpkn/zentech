import React from 'react'
import { Link } from 'react-router-dom'

export default function Screen4() {
  return (
    <section className='#faf6f5 py-5'>
            <div className="container mx-auto py-[5%] px-5 space-y-10">
                    <h3 className='text-4xl text-center lg:text-left'>Zentech Emerges as Perinthalmanna's Premier IT Solution</h3>
                    <p className='text-2xl text-[#130032BF] text-center lg:text-left'>Zentech offers top-notch IT solutions, boosting efficiency for businesses in Perinthalmanna <br /> with tailored services and expert support.</p>

                    <div className="grid grid-cols-2 lg:grid-cols-4  gap-10">
    {[1,2,3,4,5,6,7,8,].map(e=>(

                        <div className="space-y-5 " key={e}>
                            <img className='rounded-md'  src="https://images.ctfassets.net/0jnmtsdzg6p5/7LrypGfM1BdddpRfwGZrze/3a9135c9a49064c815ad7289b052772a/woman-smiling-and-presenting.png" alt="Zentech IT solutions" title='Zentech IT Solutions' />
                            <h3 className='font-semibold'>IAM Core</h3>
                            <p className='text-sm text-[#130032BF]'>Built for organizations and industries of all sizes. Save time and get the most value from every agreement.</p>
                            <b className='text-[#130032BF] block'>Available May 2024</b>
                            <button className='text-[#473b67] '>Explore More</button>
                        </div>
))}
</div>

<h3 className='text-4xl text-center lg:text-left'> Top SEO Agency in Perinthalmanna: Zentech</h3>
                    <p className='text-2xl text-[#130032BF] text-center lg:text-left'>
                    Zentech is recognized as the leading SEO agency in Perinthalmanna, <br /> offering expert services for optimal online visibility and success.</p>
</div>
    <div className="max-w-3xl mx-5 md:mx-auto flex flex-col lg:flex-row justify-between items-center border px-10 py-5 rounded-md gap-5 ">
            <p className='text-2xl text-center lg:text-left'> Unlock the power of digitalization for your business with Zentech IT Solutions!</p>
            <button className='text-[#7c4bff] border-[#7c4bff] border px-4 py-2 whitespace-nowrap rounded-lg'>Contact Us</button>
    </div>

    </section>
  )
}
