import React from 'react'

import underline from '../assets/Vector 37.svg'
import question from "../assets/Group 184.svg"
import question1 from "../assets/Group 185.svg"
const Faq = () => {
    return (
        <div id='faqs' className='mt-10 xl:mt-16'>
            <div className='font-sans font-bold xl:text-5xl md:text-2xl lg:text-3xl hidden md:flex flex-col justify-center items-center gap-3 '>
                <p> Frequently Asked <span className='text-custom-color-1'>Questions</span></p>
                <img src={underline} alt="img loading" className='xl:w-6/12 md:w-5/12 ' />
            </div>
            <div className='font-sans font-bold text-3xl flex md:hidden flex-col justify-center items-center gap-3'>
                <p> Frequently Asked </p>
                <p> <span className='text-custom-color-1'>Questions</span></p>

            </div>
            <div className='hidden md:block'>
                <img src={question} alt="" className='absolute left-20 md:w-[90px] ' />
            </div>
            <div className='hidden md:block relative'>
                <img src={question1} alt="" className='absolute md:right-8 xl:right-12 xl:-top-6 md:w-[150px] md:-top-4' />
            </div>
            <div className='mb-10 font-serif'>
                <div className='flex flex-col  w-10/12 md:w-7/12 mx-auto p-4  rounded-xl bg-custom-color-2 shadow-lg mt-10'>
                    <p className='mb-2 font-medium'>Would I be able to connect my domain with the shopify website ?</p>
                    <p>Yes, Absolutely, you would be able to connect your domain with the shopify website </p>
                </div>

                <div className='flex flex-col  w-10/12 md:w-7/12 mx-auto p-4  rounded-xl bg-custom-color-2 shadow-lg mt-10'>
                    <p className='mb-2 font-medium'> What are the benefits of using Shopify ?</p>
                    <p>Easy to use - Shopify is very user friendly  </p>
                    <p className='mt-2'>Great Designs - Shopify offers many professional and modern themes that you can use for your online store </p>
                    <p className='mt-2'>Affordable - Shopify is one of the most affordable ecommerce platforms on the market. With plans starting at just $29 per month plus you don’t need to worry about additional bandwidth or hosting costs since all of that is included in your monthly plan. </p>
                    <p className='mt-2'>Excellent Support - Shopify offers excellent support and helps resources if you ever have any questions or need assistance with your store.</p>
                </div>
                <div className='flex flex-col  w-10/12 md:w-7/12 mx-auto p-4  rounded-xl bg-custom-color-2 shadow-lg mt-10'>
                    <p className='mb-2 font-medium'>Do you make the Shopify Store Mobile Friendly ?</p>
                    <p>Yes, all the shopify stores we develop are mobile-friendly by default</p>
                </div>
                <div className='flex flex-col  w-10/12 md:w-7/12 mx-auto p-4  rounded-xl bg-custom-color-2 shadow-lg mt-10'>
                    <p className='mb-2 font-medium'> Can you integrate Third Party apps and tools into my shopify store ?</p>
                    <p>Yes, we can integrate third party apps and tools in your shopify store</p>
                </div>
                <div className='flex flex-col  w-10/12 md:w-7/12 mx-auto p-4  rounded-xl bg-custom-color-2 shadow-lg mt-10'>
                    <p className='mb-2 font-medium'>Do I need any technical skills to manage my shopify website ?</p>
                    <p>No, You don’t need any technical skills to manage your shopify website </p>
                </div>
                <div className='flex flex-col  w-10/12 md:w-7/12 mx-auto p-4  rounded-xl bg-custom-color-2 shadow-lg mt-10'>
                    <p className='mb-2 font-medium'> How will I keep a check on the progress of my shopify website development project ?</p>
                    <p>The dedicated developer will be assigned to your shopify store development will keep you informed about the progress through emails and chats  </p>
                </div>
                <div className='flex flex-col  w-10/12 md:w-7/12 mx-auto p-4  rounded-xl bg-custom-color-2 shadow-lg mt-10'>
                    <p className='mb-2 font-medium'>How long does it take to complete the shopify standard website ?</p>
                    <p>We can deliver the Shopify standard website in 7 -21 days </p>
                </div>
                <div className='flex flex-col  w-10/12 md:w-7/12 mx-auto p-4  rounded-xl bg-custom-color-2 shadow-lg mt-10'>
                    <p className='mb-2 font-medium'> Can I reach out to you for minor changes for my shopify store ?</p>
                    <p>Yes, Absolutely, you can reach out to us for minor changes</p>
                </div>
                <div className='flex flex-col  w-10/12 md:w-7/12 mx-auto p-4  rounded-xl bg-custom-color-2 shadow-lg mt-10'>
                    <p className='mb-2 font-medium'> How do I know if Shopify is the right platform for my business ?</p>
                    <p>Shopify is the right platform for ecommerce businesses, Moreover, it provides you the ecosystem.</p>
                </div>
                <div className='flex flex-col  w-10/12 md:w-7/12 mx-auto p-4  rounded-xl bg-custom-color-2 shadow-lg mt-10'>
                    <p className='mb-2 font-medium'> Do you offer post development Services ?</p>
                    <p>Yes, We do provide Shopify post- development maintenance and support services </p>
                </div>

            </div>
            

        </div>
    )
}

export default Faq
