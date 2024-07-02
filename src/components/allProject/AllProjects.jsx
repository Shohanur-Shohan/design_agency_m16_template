
const AllProjects = () => {
    return (
    <section className="pt-[30px] max-w-[1200px] mx-auto pb-10 lg:pt-[100px] lg:pb-[30px]">

      <div className="px-4 mb-[40px]">
        <h1 className="text-[#20B15A] text-lg md:text-xl text-center  lg:text-left">All Projects</h1>
        <h2 className="mt-4 text-2xl font-bold text-center text-gray-800 md:text-4xl lg:text-left">Better Agency/SEO Solution At  <br className="sm:block" />Your Fingertips</h2>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* <!-- Card --> */}
          <div className="flex flex-col items-center justify-center p-5 transition-all duration-300 border border-gray-200 group h-fit hover:border-transparent hover:shadow-lg rounded-xl ">
            <div className='mt-8 lg:mt-0'>
              <div className='flex flex-wrap mb-4'>
                  <div className="flex gap-3">
                      <img className='object-cover w-full h-[auto] p-0 bg-center bg-cover rounded-md shadow-lg' src="/images/projects/img1.png" alt='img'/>  
                  </div>                       
              </div>
            </div>
          </div>
          {/* <!-- End Card --> */}
          {/* <!-- Card --> */}
          <div className="flex flex-col items-center justify-center p-5 transition-all duration-300 border border-gray-200 group h-fit hover:border-transparent hover:shadow-lg rounded-xl ">
            <div className='mt-8 lg:mt-0'>
              <div className='flex flex-wrap mb-4'>
                  <div className="flex gap-3">
                      <img className='object-cover w-full h-[auto] p-0 bg-center bg-cover rounded-md shadow-lg' src="/images/projects/img2.png" alt='img'/>  
                  </div>                       
              </div>
            </div>
          </div>
          {/* <!-- End Card --> */}
          {/* <!-- Card --> */}
          <div className="flex flex-col items-center justify-center p-5 transition-all duration-300 border border-gray-200 group h-fit hover:border-transparent hover:shadow-lg rounded-xl ">
            <div className='mt-8 lg:mt-0'>
              <div className='flex flex-wrap mb-4'>
                  <div className="flex gap-3">
                      <img className='object-cover w-full h-[auto] p-0 bg-center bg-cover rounded-md shadow-lg' src="/images/projects/img3.png" alt='img'/>  
                  </div>                       
              </div>
            </div>
          </div>
          {/* <!-- End Card --> */}
          {/* <!-- Card --> */}
          <div className="flex flex-col items-center justify-center p-5 transition-all duration-300 border border-gray-200 group h-fit hover:border-transparent hover:shadow-lg rounded-xl ">
            <div className='mt-8 lg:mt-0'>
              <div className='flex flex-wrap mb-4'>
                  <div className="flex gap-3">
                      <img className='object-cover w-full h-[auto] p-0 bg-center bg-cover rounded-md shadow-lg' src="/images/projects/img4.png" alt='img'/>  
                  </div>                       
              </div>
            </div>
          </div>
          {/* <!-- End Card --> */}
          {/* <!-- Card --> */}
          <div className="flex flex-col items-center justify-center p-5 transition-all duration-300 border border-gray-200 group h-fit hover:border-transparent hover:shadow-lg rounded-xl ">
            <div className='mt-8 lg:mt-0'>
              <div className='flex flex-wrap mb-4'>
                  <div className="flex gap-3">
                      <img className='object-cover w-full h-[auto] p-0 bg-center bg-cover rounded-md shadow-lg' src="/images/projects/img5.png" alt='img'/>  
                  </div>                       
              </div>
            </div>
          </div>
          {/* <!-- End Card --> */}
          {/* <!-- Card --> */}
          <div className="flex flex-col items-center justify-center p-5 transition-all duration-300 border border-gray-200 group h-fit hover:border-transparent hover:shadow-lg rounded-xl ">
            <div className='mt-8 lg:mt-0'>
              <div className='flex flex-wrap mb-4'>
                  <div className="flex gap-3">
                      <img className='object-cover w-full h-[auto] p-0 bg-center bg-cover rounded-md shadow-lg' src="/images/projects/img6.png" alt='img'/>  
                  </div>                       
              </div>
            </div>
          </div>
          {/* <!-- End Card --> */}
      </div>
    </section>   

    );
};

export default AllProjects;