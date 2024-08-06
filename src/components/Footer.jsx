import breeqlogo from '../images/primary_main.png';
export default function Footer(){
    const subp = ' font-tajawal text-white text-[1.5rem] hover:cursor-pointer hover:underline'
    return(
        <div className="w-full h-[22rem] bg-[#283466] flex items-center mt-[18rem]">
            <img className=' w-[18rem] ' src={breeqlogo}/>
            <div className=' absolute right-10' style={{direction: 'rtl'}}>
                <p className='font-cairo text-white text-[2.1rem] mb-6 hover:cursor-default'>
                الصفحات
                </p>
                <p className={subp}>
                الرئيسية
                </p>
                <p className={subp}>
                المساجد
                </p>
                <p className={subp}>
                الإحصائيات
                </p>
            </div>
        </div>
    )
}