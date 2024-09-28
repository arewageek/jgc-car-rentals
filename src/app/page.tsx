import Image from "next/image";
import HeroSection from "../components/layouts/HeroSection";
import AboutUs from "../components/Public/AboutUs";
import { CgArrowLongDown } from "react-icons/cg";
import CarsSlide from "../components/Public/CarsSlide";
import RentalProcess from "../components/Public/RentalProcess";
import CarVideoSection from "@/components/Public/CarVideoSection";
import Partners from "@/components/Public/Partners";
import ContactBlock from "@/components/Public/ContactBlock";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <AboutUs />
      {/* <CarsSlide /> */}
      <RentalProcess />
      <CarVideoSection />
      {/* <Partners /> */}
      <ContactBlock />
    </main>
  );
}
