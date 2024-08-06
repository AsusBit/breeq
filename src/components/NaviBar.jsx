import cube from '../images/primary_main_nobg 6.png';
import logotext from '../images/primary_main_nobg 7.png';

export default function NavBar(){
    const navtext = 'hover:cursor-pointer'
    const navtext_active = 'hover:cursor-pointer shadow-drop-white '
    return(
        <div className="w-screen flex hover:shadow-lg duration-200 h-[5rem] ease-in-out">
            <img src={cube} className='w-[3rem] h-[3rem] m-3 mr-0'></img>
            <img src={logotext} className=' w-max h-[3rem] m-3 ml-0'></img>
            <div className=' absolute right-5  h-[5rem] justify-center items-center flex space-x-10 font-tajawal text-[1.4rem]  text-white'>
                <p className={navtext} >
                الإحصائيات
                </p>
                <p className={navtext}>
                تبرع
                </p>
                <p className={navtext_active}>
                الرئيسية
                </p>
            </div>
        </div>
    )
}