
import Contact from "./contact/page";
import Gallery from "./Component/Gallery/gallery";

import HeroSec from "./Component/HeroSec/hero";
import HomeContent from "./Component/Home/home";
import Footer from "./Footer/footer";
import About from "./about/page";

export default function Home() {
  return (
    <main>
      <HeroSec/>
      <HomeContent/>
      <Gallery/>
      <About/>
      <Contact/>
      
    </main>
  );
}
