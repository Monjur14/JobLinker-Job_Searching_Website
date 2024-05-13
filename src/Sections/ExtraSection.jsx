import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const ExtraSection = () => {
    useEffect(() => {
        AOS.init({
          disable: false,
          startEvent: 'DOMContentLoaded',
          initClassName: 'aos-init',
          animatedClassName: 'aos-animate',
          useClassNames: false,
          disableMutationObserver: false,
          debounceDelay: 50,
          throttleDelay: 99,
      
          offset: 120,
          delay: 0,
          duration: 1000,
          easing: 'ease',
          once: false,
          mirror: false,
          anchorPlacement: 'top-bottom',
        });
      }, []);
    return (
      <div className="w-full h-screen flex mt-24">
        <div className="basis-2/5 bg-[rgb(0,40,96)] relative">
        <div className=" absolute -right-40 2xl:-right-56 top-1/4 2xl:top-44 2xl:mt-20">
        <div className="w-96 h-96 2xl:w-[35rem] 2xl:h-[35rem] border border-gray-300 rounded-full flex justify-center items-center relative rd ">
                <div className="w-10 h-10 bg-orange-500 rounded-full absolute -right-5"></div>
                <div className="w-5 h-5 bg-pink-500 rounded-full absolute  -bottom-2"></div>
                <div className="w-8 h-8 bg-yellow-500 rounded-full absolute left-7 top-14 2xl:left-20"></div>
                <div className="h-72 w-72 2xl:h-[26rem] 2xl:w-[26rem] bg-[#eaf1fb] rounded-full flex justify-center items-center -z-10">
                    <div className="h-56 w-56 2xl:h-80 2xl:w-80 inline-block rounded-full bg-[#002860]">
                        
                    </div>
                </div>
            </div>
        </div>
        <img src="/src/assets/images/get-job-pic.png" alt=""  className="absolute top-24 w-96 -right-28 2xl:w-[34.4rem] 2xl:top-44 2xl:-right-40"/>
        </div>
        <div className="basis-3/5 bg-[#eaf1fb] pl-56 2xl:pl-80 flex flex-col justify-center">
            <div data-aos="zoom-in-left" className="max-w-[600px]">
            <h1 data-aos="zoom-in-left" className="text-indigo-700 text-xl 2xl:text-2xl">Get Jobs</h1>
            <h1 data-aos="zoom-in-left" className="text-[2.5rem] 2xl:text-[3.5rem] leading-tight font-semibold mb-10">Get World <span className="text-indigo-700">1500+</span> Talented People in one place</h1>
            <p data-aos="zoom-in-left" className="text-sm 2xl:text-lg">JobLinker is your trusted partner in navigating the vast landscape of career possibilities. Our platform connects you with the best and most preferred jobs in various industries, ensuring a seamless experience as you embark on your professional journe</p>
            <p data-aos="zoom-in-left" className="text-sm mt-5 mb-8 2xl:text-lg">Join our community of job seekers who are ready to take the next step in their careers. Sign up now and let JobLinker help you find the job of your dreams!</p>
            <button data-aos="zoom-in-left" className="w-44 text-white py-1 2xl:py-2 rounded-lg text-lg font-semibold cursor-pointer bg-indigo-700">About us</button>
            </div>
        </div>
      </div>
    )
  }
  
  export default ExtraSection
  