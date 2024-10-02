import CarsCarousel from "@/components/Public/cars/CarsCarousel";
import HeroSection from "../components/layouts/HeroSection";
import AboutUs from "../components/Public/AboutUs";
import RentalProcess from "../components/Public/RentalProcess";
import CarVideoSection from "@/components/Public/CarVideoSection";
import ContactBlock from "@/components/Public/ContactBlock";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <AboutUs />
      <CarsCarousel />
      <RentalProcess />
      <CarVideoSection />
      <ContactBlock />
    </main>
  );
}
