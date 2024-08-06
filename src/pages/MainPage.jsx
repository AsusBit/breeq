import Divider from "../components/Divider";
import Footer from "../components/Footer";
import Goals from "../components/Goals";
import NavBar from "../components/NaviBar";
import TextBox from "../components/TextBox";

export default function MainPage(){
    return(
        <>  
            <NavBar/>
            <div className="flex justify-center shadow-drop-white items-center mt-[6rem] text-[3rem] font-cairo font-thin text-white">
            <p>
            فلتلهمك إنسانيتك دعماً و تبرعاً
            </p>
            </div>
            <TextBox/>
            <Divider/>
            <div className="flex justify-center shadow-drop-white items-center mt-[6rem] text-[3rem] font-cairo font-thin text-white">
                <p>
                اهدافنا
                </p>
            </div>
            <Goals/>
            <Footer/>

        </>
    )
}