import { LogoImg } from "../Utils/Images"



const Header=()=>{
    return(
        <div className="absolute px-28 py-2 bg-gradient-to-b from-black z-20"> 
           <img className="w-48"  src={LogoImg} alt="logo" />
        </div>
    )
}

export default Header