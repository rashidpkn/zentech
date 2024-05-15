import React from 'react'

export default function Header() {
  return (
    <header className=' hidden lg:block sticky top-0'>
            <div className="upper  py-2 px-5 bg-[#26065d] text-white text-xs">
                <div className="container  mx-auto flex justify-between items-center">
                    <p><span className='bg-[#cbc2ff] rounded-lg p-1 text-black'>New</span> Introducing our exclusive SEO offer! Enjoy our new price of ₹1200 per keyword per month, down from ₹1500.</p>
                    <ul className='flex gap-5'>
                        <li> +91 9562745975</li>
                        <li>Support</li>
                        
                    </ul>
                </div>
            </div>
            <div className="lower bg-white  px-5">
                <div className="container mx-auto flex justify-between items-center">
                    
                    <div className=" flex items-center gap-5">
                        <img src="" width={123} height={26} alt="" />
                        <nav className="flex gap-3 text-[#5b4e71] text-sm font-medium">
                            <div className=""><button className='py-6 hover:border-b border-[#26065d]'>About Us</button> </div>
                            <div className=""><button className='py-6 hover:border-b border-[#26065d]'>Contact Us</button> </div>
                            <div className=""><button className='py-6 hover:border-b border-[#26065d]'>Blog</button> </div>
                            <div className=""><button className='py-6 hover:border-b border-[#26065d]'>Plans & Pricing</button> </div>
                        </nav>
                    </div>
                    <div className="flex gap-5 text-sm font-medium items-center">
                        <p className='text-[#5422ff]'>WHY CHOOSE US</p>
                        
                        <button className='bg-[#5422ff] hover:bg-[#26065d] duration-500 text-white px-5 py-3 rounded-md'>MAKE A FREE APPOINTMENT</button>
                    </div>

                </div>
            </div>
    </header>
  )
}
