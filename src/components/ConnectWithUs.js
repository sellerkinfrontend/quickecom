import React from 'react'

const ConnectWithUs = () => {
    return (
        <div className='xl:pt-10 mb-10 ' id='connect'>

            <div className='flex justify-center'>
                <div className='xl:text-5xl md:text-2xl  lg:text-3xl text-xl  font-bold  font-serif '>
                    Get in touch with us
                </div>
            </div>

            <div className='flex flex-col md:flex-row gap-6 md:mt-20 mt-5  lg:justify-between'>

                <div className='flex flex-col md:w-6/12 xl:w-auto items-center  '>
                    <div className='font-semibold relative xl:left-16 '>
                        <p>Mobile No- +91-9873294471</p>
                        <p>Email Id- ecommstoresolutions@gmail.com</p>
                    </div>
                </div>


                <div className='flex xl:mr-10 mx-10  ' >
                    <form action="https://api.web3forms.com/submit" method="POST" className='flex justify-center gap-3 flex-col font-serif xl:w-[800px] '>
                        <input type="hidden" name="access_key" value="5f80cfbb-43af-4fc5-88de-d7ca0ffb9f4b" />
                        <div className='flex  gap-2 '>

                            <input type="text" required name='name' placeholder='Enter Your Name' id='name' className='border-2 border-black rounded-md w-1/2 h-10 bg-white text-black xl:p-8 p-2' />

                            <input type="text" required name='name' placeholder='Enter Your Email id' id='email' className='border-2 border-black  w-1/2 h-10 rounded-md bg-white xl:p-8 p-2  text-black' />
                        </div>

                        <div className='flex flex-col gap-2'>

                            <input type="text" required name='mobile' placeholder='Enter Your Mobile No.' id='mobileno' className='border-2 border-black rounded-md  h-10  text-black bg-white xl:p-8 p-2' />
                        </div>

                        <div className='flex flex-col gap-2'>

                            <input type="message" name='desc' required placeholder='Give us a small brief about your project ' id='desc' className='border-2 border-black  rounded-md  h-10 bg-white xl:p-8 p-2 text-black' />
                        </div>

                        <button type='submit' className='flex self-center  border-2 border-black  w-full justify-center rounded-md font-bold h-10 items-center  p-6 text-2xl hover:bg-custom-color-1 '>Submit</button>
                    </form>
                </div>

            </div>


        </div>
    )
}

export default ConnectWithUs
