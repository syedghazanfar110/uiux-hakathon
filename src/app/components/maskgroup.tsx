
import Image from 'next/image';

const Maskgroup = () => {
  return (
    <div className='w-[1440px] h-[716.83px] t-[95.7px]'>
        <div>
            <Image
                src={"/assets/image1.png" }// Aapke public folder mein image ka path
                alt="Logo"  // Required alt 
                width={100} // Required width
                height={200} // Required height
                className="w-[1440px] h-[1007.93px] t-[-75px] "
                />
                </div>
      
    </div>
  )
}

export default Maskgroup
