
import Image from 'next/image';

const Hero = ()  => {
  return (
    <div className="flex justify-center items-center h-[41px] w-[185px] t-29px left-54px space-x-5">
      <Image
        src={"/assets/logo.png" }// Aapke public folder mein image ka path
        alt="Logo"
        width={100} // Required width
        height={200} // Required height
        className="h-[505px] w-[1440px] t-29px left-54px"
      />
    </div>
  )
}

export default Hero;