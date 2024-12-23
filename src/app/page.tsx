import Image from "next/image";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Logo from "./components/navbar";
import Hero from "./components/hero";

export default function Home() {
  return (
   <div>
    <Navbar />
    <Footer />
    <Hero />
   </div>
  );
}
