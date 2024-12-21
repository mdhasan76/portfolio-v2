import AboutMe from "@/components/AboutMe";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
