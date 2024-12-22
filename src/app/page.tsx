import Image from "next/image";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Logo from "./components/navbar";

export default function Home() {
  return (
   <div>
    <Navbar />
    <Footer />
    <Logo />
   </div>
  );
}
