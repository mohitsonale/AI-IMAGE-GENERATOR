import { assets } from "../assets/assets";

function Footer(){

    return(
        <div className="flex items-center justify-between gap-4 py-3 mt-20">

            <img src={assets.logo} alt="" width={150} />
            <p className="flex-1 pl-4 text-sm border-l  border-gray-400 text-gray-500 max-sm:hidden ">Copyright @MohitSonale.dev | All right reserved.</p>

            <div className="flex gap-2.5">
                <img src={assets.facebook_icon} alt="" width={35} className="hover:scale-120 duration-500 transition-all" />
                <img src={assets.twitter_icon} alt="" width={35} className="hover:scale-120 duration-500 transition-all" />
                <img src={assets.instagram_icon} alt="" width={35} className="hover:scale-120 duration-500 transition-all" />
            </div>

        </div>
    )

}

export default Footer;  