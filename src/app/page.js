import About from "@/components/about";
import Activities from "@/components/activities";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Nav from "@/components/nav";
import Objectives from "@/components/objectives";
import Planning from "@/components/planning";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Objectives />
      <Activities />
      <Planning />
      <Contact />
      <Footer />
    </>
  );
}
