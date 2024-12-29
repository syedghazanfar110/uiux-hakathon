
import Image from 'next/image';

const Hero = ()  => {
  return (
    <div className="flex justify-center items-center h-[41px] w-[185px] t-29px left-54px space-5">
      <Image
        src={"/assets/logo.png"  }// Aapke public folder mein image ka path
        alt="Logo"
        width={100} // Required width
        height={200} // Required height
        className="h-[41px] w-[185px] t-29px left-54px space-5"
      />
    </div>
  )
}

export default Hero;