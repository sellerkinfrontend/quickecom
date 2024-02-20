import React from 'react'
import './process.css'
import underline from '../assets/Vector 37.svg'
const Process = () => {
    return (
        <div className='md:mt-32 mt-24'>
            <div className='xl:text-5xl md:text-4xl text-3xl hidden md:flex flex-col gap-3 text-custom-color-1 justify-center items-center'>
                <p>Project Lifecycle with DEVORT Framework </p>
                <img src={underline} alt="" className='hidden md:block xl:w-8/12 md:w-10/12 lg:w-9/12' />
            </div>
            <div className=' text-3xl flex md:hidden flex-col gap-3 text-custom-color-1 justify-center items-center font-semibold font-sans'>
                <p>Project Lifecycle with </p>
                <p>DEVORT Framework </p>
                
            </div>
            <div className='line mt-28 hidden md:block'>

            </div>
            <div className='flex  flex-col mt-16 lg:mt-10'>
                
                <div className='flex flex-col md:flex-row  justify-end relative md:right-6 lg:right-12'>
                    <div className='text-xl  font-semibold flex justify-center  relative xl:left-80 md:left-48 lg:left-60'>
                        <p>Step -1 </p>
                    </div>

                    <div className='bg-white md:w-5/12 xl:h-[180px] md:h-[250px] lg:h-[220px] border-2 border-custom-color-1 flex flex-col justify-center items-center rounded-3xl shadow-lg  md:p-5 p-3 mt-2 w-10/12 md:mt-10 mx-auto md:mx-0'>
                        <p className='xl:text-3xl md:text-2xl text-lg font-semibold'>Get the Requirement from the Client</p>
                        <div className='mt-2'>
                            <p> Our expert team collaborates with clients in extensive discussions, refining and finalizing project requirements to ensure alignment with the project scope and goals.

                            </p>
                        </div>

                    </div>


                </div>


                <div className='flex flex-col md:flex-row justify-start relative md:right-10 mt-10  md:mt-5 '>
                    <div className='text-xl  font-semibold flex justify-center relative xl:left-80 md:left-48 lg:left-60'>
                        <p>Step -2 </p>
                    </div>

                    <div className='bg-white md:w-5/12 xl:h-[180px] md:h-[250px] lg:h-[220px] border-2 border-custom-color-1 flex flex-col justify-center items-center rounded-3xl shadow-lg md:p-5 p-3 mt-2 w-10/12 md:mt-10 mx-auto md:mx-0'>
                        <p className='xl:text-3xl md:text-2xl text-lg font-semibold'>Setting up a Roadmap</p>
                        <div className='mt-2'>
                            <p>   Crafting a comprehensive roadmap, we outline crucial milestones, development phases, and timelines. As a bonus, we offer a complimentary Shopify theme, valued at approximately $200 USD (Rs 16,500/- INR). </p>
                        </div>

                    </div>


                </div>
                <div className='flex flex-col md:flex-row justify-end  relative md:right-6 mt-10 md:mt-4  lg:right-12 '>
                    <div className='text-xl  font-semibold flex justify-center  relative xl:left-80 md:left-48 lg:left-60'>
                        <p>Step -3 </p>
                    </div>

                    <div className='bg-white md:w-5/12 xl:h-[180px] md:h-[230px] lg:h-[200px] border-2 border-custom-color-1 flex-col flex justify-center items-center rounded-3xl shadow-lg md:p-5 p-3 mt-2 w-10/12 md:mt-10 mx-auto md:mx-0'>
                        <p className='xl:text-3xl md:text-2xl text-lg font-semibold'>Development</p>
                        <div className='mt-2'>
                            <p>   Assigned based on your needs, a dedicated developer initiates the project, employing custom coding to shape your Shopify store according to unique specifications and ensure a seamless development process.


                            </p>
                        </div>
                    </div>


                </div>
                <div className='flex flex-col md:flex-row justify-start relative md:right-10 lg:right-12 md:mt-5 mt-10'>
                    <div className='text-xl  font-semibold flex justify-center  relative xl:left-80 md:left-48 lg:left-60'>
                        <p>Step -4 </p>
                    </div>

                    <div className='bg-white md:w-5/12 xl:h-[160px] md:h-[180px] lg:h-[170px] border-2 border-custom-color-1 flex flex-col justify-center items-center rounded-3xl shadow-lg md:p-5 p-3 mt-2 w-10/12  md:mt-10 mx-auto md:mx-0'>
                        <p className='xl:text-3xl md:text-2xl text-lg font-semibold'> Testing</p>
                        <div className='mt-2'>
                            <p>
                                Conducting rigorous testing across development stages, we ensure thorough evaluation of functionality, performance and user experience

                            </p>
                        </div>
                    </div>


                </div>
                <div className='flex flex-col md:flex-row justify-end relative md:right-6 md:mt-5 mt-10 lg:right-12'>
                    <div className='text-xl  font-semibold flex justify-center  relative xl:left-80 md:left-48 lg:left-60'>
                        <p>Step -5 </p>
                    </div>

                    <div className='bg-white md:w-5/12 xl:h-[200px] md:h-[320px] lg:h-[280px] flex border-2 border-custom-color-1 flex-col justify-center items-center rounded-3xl shadow-lg md:p-5 p-2 mt-2 w-10/12 md:mt-10 mx-auto md:mx-0'>
                        <p className='xl:text-3xl md:text-2xl text-lg font-semibold'> Deployment</p>
                        <div className='mt-2 px-5'>
                            <p>
                                In the deployment phase, we strategically transition the Shopify store from development to a live environment, minimizing downtime and ensuring a seamless launch. Our careful management ensures a smooth deployment, marking the final stage of delivering a high-performing online store.
                            </p>
                        </div>
                    </div>


                </div>


            </div>

        </div>
    )
}

export default Process
