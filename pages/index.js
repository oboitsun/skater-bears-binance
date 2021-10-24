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
  const bears = [
    "/imgs/bear1.png",
    "/imgs/bear2.png",
    "/imgs/bear3.png",
    "/imgs/bear4.png",
    "/imgs/bear5.png",
    "/imgs/bear6.png",
    "/imgs/bear7.png",
    "/imgs/bear8.png",
    "/imgs/bear9.png",
    "/imgs/bear9.png",
    "/imgs/bear10.png",
  ];
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const handleScroll = (e) => {
    if (e.target.scrollingElement.scrollTop < 10) setScrolled(false);
    if (e.target.scrollingElement.scrollTop >= 10) setScrolled(true);
  };
  //scrolling listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  //connect wallet functions
  const [userAddress, setUserAddress] = useState("");
  const connectWallet = async (e) => {
    if (window) {
      // Canister Ids
      const nnsCanisterId = "qoctq-giaaa-aaaaa-aaaea-cai";

      // Whitelist
      const whitelist = [nnsCanisterId];

      // Make the request
      const isConnected =
        window &&
        (await window.ic.plug.requestConnect({
          whitelist,
        }));

      // Get the user principal id
      const principalId = window && (await window.ic.plug.agent.getPrincipal());

      setUserAddress(principalId.toText());

      console.log(`Plug's user principal Id is ${principalId}`);
    }
  };

  const connectStoic = async (StoicIdentity) => {
    if (window) {
      await StoicIdentity.load();
      let identity = await StoicIdentity.connect();
      setUserAddress(identity.getPrincipal().toText());
      console.log(identity.getPrincipal().toText());
    }
  };

  return (
    <div className=" relative overflow-hidden">
      <div id="top"></div>
      <Head>
        <title>Skater Bears</title>
        <meta name="description" content="Skater Bears NFTs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-full lg:h-[854px] relative    bg-black overflow-hidden">
        <Header
          connectStoic={connectStoic}
          connectWallet={connectWallet}
          userAddress={userAddress}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          scrolled={scrolled}
        />
        <div className="w-full relative z-[1]">
          <HeroSection
            connectStoic={connectStoic}
            connectWallet={connectWallet}
            userAddress={userAddress}
          />
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
      <Footer
        connectStoic={connectStoic}
        connectWallet={connectWallet}
        userAddress={userAddress}
      />
      <ModalMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      <div className="flex lg:w-[1920px]  absolute xl:bottom-0 lg:bottom-[-15px]  bottom-[140px] z-[1]">
        {bears.map((b, i) => (
          <div key={i} className="w-[10%] transform rotate-[-35deg]">
            <Image src={b} alt="bear NFT" layout="responsive" width={458} height={500} />
          </div>
        ))}
      </div>
    </div>
  );
}
