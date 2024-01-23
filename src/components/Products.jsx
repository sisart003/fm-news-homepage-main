import retro from '../assets/images/image-retro-pcs.jpg';
import laptops from '../assets/images/image-top-laptops.jpg';
import gaming from '../assets/images/image-gaming-growth.jpg';

const Products = () => {
  return (
    <>
        <div className="grid gap-y-6 mb-12 sm:col-span-6 sm:grid-cols-3 sm:gap-x-4 items-center">
            <div className="grid grid-cols-3 gap-4 items-center">
                <img src={retro} className="h-full" alt="" />
                <div className="col-span-2">
                    <h1 className="text-[26px] font-bold text-[#c5c6ce]">01</h1>
                    <h2 className="font-bold text-[18px]">Reviving Retro PCs</h2>
                    <p className="text-[#5d5f79] text-[14px]">What happens when old PCs are given modern upgrades?</p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 items-center">
                <img src={laptops} className="h-full" alt="" />
                <div className="col-span-2">
                    <h1 className="text-[26px] font-bold text-[#c5c6ce]">02</h1>
                    <h2 className="font-bold text-[18px]">Top 10 Laptops of 2022</h2>
                    <p className="text-[#5d5f79] text-[14px]">Our best picks for various needs and budgets.</p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 items-center">
                <img src={gaming} className="h-full" alt="" />
                <div className="col-span-2">
                    <h1 className="text-[26px] font-bold text-[#c5c6ce]">03</h1>
                    <h2 className="font-bold text-[18px]">The Growth of Gaming</h2>
                    <p className="text-[#5d5f79] text-[14px]">How the pandemic has sparked fresh opportunities.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Products