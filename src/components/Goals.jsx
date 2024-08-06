import left from '../images/Group 48.png';
import middle from '../images/Group 47.png';
import right from '../images/Group 46.png';
export default function Goals(){
    const img_sty = 'w-[27rem]'
    return(
        <div className='flex items-center justify-center space-x-8 mt-[6rem]'>
        <img src={left} className={img_sty}/>
        <img src={middle} className={img_sty}/>
        <img src={right} className={img_sty}/>
        </div>
    )
}