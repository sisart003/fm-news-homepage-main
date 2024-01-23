import mobile from '../assets/images/image-web-3-mobile.jpg';
import desktop from '../assets/images/image-web-3-desktop.jpg'

const Main = () => {
  return (
    <>
        <div className="mb-16 sm:col-span-4 md:col-span-4">
        <img src={mobile} className="mb-6 md:hidden" alt="" />
        <img src={desktop} className="mb-6 hidden md:block" alt="" />
            <h1 className="text-[40px] pr-4 font-extrabold font-['Inter'] leading-none mb-6">The Bright Future of Web 3.0?</h1>
            <div>
            <p className="text-[#5d5f79] text-[15px] leading-relaxed mb-4">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                But is it really fulfilling its promise?</p><br />
            <a href="#" className="px-6 py-4 bg-[#f15e50] text-white tracking-[0.4rem] font-bold text-[14px] hover:bg-[#00001a]">READ MORE</a>
            </div>
        </div>
    </>
  )
}

export default Main