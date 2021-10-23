import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import CardsSection from "../components/CardsSection";
import ContactUs from "../components/ContactUs";
import FAQ from "../components/FAQ";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";
import Footer from "../components/Footer";
import ModalMenu from "../components/ModalMenu";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const handleScroll = (e) => {
    if (e.target.scrollingElement.scrollTop < 10) setScrolled(false);
    if (e.target.scrollingElement.scrollTop >= 10) setScrolled(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div>
      <Head>
        <title>Skater Bears</title>
        <meta name="description" content="Skater Bears NFTs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-full lg:h-[854px] relative    bg-black overflow-hidden">
        <Header showMenu={showMenu} setShowMenu={setShowMenu} scrolled={scrolled} />
        <div className="w-full relative z-[1]">
          <HeroSection />
        </div>

        <div className="absolute w-full h-full top-0">
          <Image
            src="/imgs/hero-back.png"
            layout="fill"
            objectFit="cover"
            alt="hero section"
          />
        </div>
        <div className="lg:hidden absolute w-full h-full top-0">
          <Image
            src="/imgs/hero.png"
            layout="fill"
            objectFit="cover"
            alt="hero section"
          />
        </div>
      </div>

      <CardsSection />
      <Team />
      <Roadmap />
      <FAQ />
      <ContactUs />
      <Footer />
      <ModalMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
}
