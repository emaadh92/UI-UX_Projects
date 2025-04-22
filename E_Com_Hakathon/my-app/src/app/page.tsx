import Gallery from "@/components/Gallery";
import HeroSection from "@/components/HeroSec";
// import Gallery from "@/components/Items";
import Products from "@/components/ourProduct";
import OurRange from "@/components/Range";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <OurRange/>
      <Products />
      <Gallery/>
    </div>
  );
}
