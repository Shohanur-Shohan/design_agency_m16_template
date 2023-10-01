
const Featured = () => {
    return (
       
    <div className="py-[50px] md:py-[100px] bg-[#F0FDF4]">
        <div className="max-w-[1200px] mx-auto px-6 m-auto text-gray-500 md:px-2">
            <div className="">
                <h1 className="text-[#20B15A] text-lg md:text-xl text-center lg:text-left">Featured Projects</h1>
                <h2 className="mt-4 text-2xl font-bold text-center text-gray-800 dark:text-white md:text-4xl lg:text-left">
                We provide the Perfect Solution <br className="sm:block" hidden />
                to your business growth
                </h2>
            </div>
            {/* hero */}
            <div className="w-full mt-7">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:items-center ">
                    <div className='grid justify-center lg:px-0'>
                        <img src="/images/featured/Mask0.png" alt="banner" />
                        <p className="mt-5 text-sm text-gray-600">App Design - June 20, 2022</p>
                        <h2 className="text-2xl font-bold text-black">App Redesign</h2>
                    </div>
                    {/* <!-- End Col --> */}

                    <div className='mt-8 lg:mt-0'>
                        <div className='flex flex-wrap justify-center mb-4'>
                            <div className="flex gap-3">
                                <div className="w-full sm:w-full md:w-1/2 lg:w-1/2">
                                   <img className='object-cover w-full  h-[180px] p-0 bg-center bg-cover rounded-md ' src="/images/featured/Mask1.png" alt='img'/> 
                                   <p className="mt-3 text-sm text-gray-600">App Design - June 20, 2022</p>
                                   <h2 className="text-lg font-bold text-black">Redesign channel website landng page</h2>
                                </div>
                                
                                <div className="w-full sm:w-full md:w-1/2 lg:w-1/2">
                                   <img className='object-cover w-full  h-[180px] p-0 bg-center bg-cover rounded-md' src="/images/featured/Mask1.png" alt='img'/> 
                                   <p className="mt-3 text-sm text-gray-600">App Design - June 20, 2022</p>
                                   <h2 className="text-lg font-bold text-black">Redesign channel website landng page</h2>
                                </div>  
                            </div>                       
                        </div>
                        <div className='flex flex-wrap justify-center mb-4'>
                            <div className="flex gap-3">
                                <div className="w-full sm:w-full md:w-1/2 lg:w-1/2">
                                   <img className='object-cover w-full  h-[180px] p-0 bg-center bg-cover rounded-md ' src="/images/featured/Mask1.png" alt='img'/> 
                                   <p className="mt-3 text-sm text-gray-600">App Design - June 20, 2022</p>
                                   <h2 className="text-lg font-bold text-black">Redesign channel website landng page</h2>
                                </div>
                                
                                <div className="w-full sm:w-full md:w-1/2 lg:w-1/2">
                                   <img className='object-cover w-full  h-[180px] p-0 bg-center bg-cover rounded-md' src="/images/featured/Mask1.png" alt='img'/> 
                                   <p className="mt-3 text-sm text-gray-600">App Design - June 20, 2022</p>
                                   <h2 className="text-lg font-bold text-black">Redesign channel website landng page</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Col --> */}
                </div>
            </div>
            {/* hero */}
        </div>
    </div>
                                          
    );
};

export default Featured;