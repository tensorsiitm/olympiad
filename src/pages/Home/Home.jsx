import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lenis from "lenis";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { hasLenis, scrollToId, setLenis } from "../../lib/scroll";
import Hero from "./Hero";
import Format from "./Format";
import Prizes from "./Prizes";
import Schools from "./Schools";
import Syllabus from "./Syllabus";
import FAQ from "./FAQ";
import Register from "./Register";
import About from "./About";
import Contact from "./Contact";

gsap.registerPlugin(ScrollTrigger);

/* Smooth scroll + reveal animations. Content is fully visible without this,
   and nothing runs when the visitor prefers reduced motion. */
function useMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ lerp: 0.1 });
    setLenis(lenis);
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // In-page links go through Lenis
    const onClick = (e) => {
      if (e.defaultPrevented || !hasLenis()) return;
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href").slice(1);
      if (!id || !document.getElementById(id)) return;
      e.preventDefault();
      scrollToId(id);
    };
    document.addEventListener("click", onClick);

    const ctx = gsap.context(() => {
      // Hero items play in sequence on load
      gsap.from(".hero .reveal", {
        opacity: 0, y: 28, duration: 0.9, ease: "power3.out", stagger: 0.1, clearProps: "all",
      });

      // Everything else reveals as it scrolls in, in small batches so grids ripple
      const rest = gsap.utils.toArray(".reveal").filter((el) => !el.closest(".hero"));
      gsap.set(rest, { opacity: 0, y: 32 });
      ScrollTrigger.batch(rest, {
        start: "top 90%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.09, clearProps: "opacity,transform" }),
      });
    });

    // If fonts/images shift layout, keep trigger positions honest
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      document.removeEventListener("click", onClick);
      ctx.revert();
      gsap.ticker.remove(tick);
      lenis.destroy();
      setLenis(null);
    };
  }, []);
}

function Home() {
  useMotion();

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Format />
        <Prizes />
        <Schools />
        <Syllabus />
        <FAQ />
        <Register />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Home;
