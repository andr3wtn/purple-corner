import Image from "next/image";
import AboutUs from '@/components/AboutUs';
import Events from '@/components/EventsSection';
import Resources from '@/components/Resources';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <div className="sm:min-h-screen bg-[#310D51]">
        <Header />
        <section className="pb-10 px-5 sm:px-10">
          <div className="flex flex-col md:flex-row justify-between text-white">
            <div className="content pl-5 flex-2">
              <h1 className="text-6xl md:text-8xl my-10 w-60 font-normal">PURPLE CORNER</h1>
              <div className="text-xl sm:w-4/5 pb-10">Purple Corner is a feminist society dedicated to critically examining how
              feminism has been shaped, who it serves, and who it excludes, reclaiming it as an evolving, self-reflective practice.
                We create an intentional space for dialogue, safety, and collective imagining, committed to building worlds beyond
                the limits imposed by oppressive systems.
              </div>
            </div>
            <div className="flex-1 flex justify-center items-end">
              <a 
                href="https://buy.stripe.com/7sYbJ24LdgnygzCgElbZe00"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl px-8 py-4 font-semibold tracking-wide mb-4 bg-[#E6A4EF] hover:bg-[#D488E4] hover:scale-105 text-[#0A0A0A] rounded-2xl transform transition-all duration-300"
              >
                Join Our Mailing List
              </a>
            </div>
          </div>
        </section>
      </div>



      <AboutUs />

      <Events />

      <Resources />

      <Footer id="footer" />
    </>
    
  );
}
