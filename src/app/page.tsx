import Image from "next/image";
import AboutUs from '@/components/AboutUs';
import Events from '@/app/events/EventsSection';
import Resources from '@/components/Resources';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <div className="sm:min-h-screen bg-[#310D51]">
        <Header />
        <section className="pb-10 py-5 sm:px-10">
          <div className="flex flex-col md:flex-row justify-between text-white">
            <div className="content pl-5 flex-1">
              <h1 className="text-7xl md:text-8xl my-10 w-60 font-normal">PURPLE CORNER</h1>
              <div className="text-xl mt-5 sm:w-4/5 pb-10">Purple Corner is where feminism stays curious, questions its own power, and dreams worlds beyond oppression.
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center">
              <Image src="/images/bg-photo-3.jpg" alt="Background photo" width={400} height={200} 
                className="max-w-[300px] lg:max-w-[400px] max-h-[400px] overflow-hidden object-cover object-top filter hue-rotate-18 saturate-100" />

              <a 
                href="https://buy.stripe.com/7sYbJ24LdgnygzCgElbZe00"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl px-8 mt-10 py-4 font-semibold tracking-wide mb-4 bg-[#E6A4EF] hover:bg-[#D488E4] hover:scale-105 text-[#0A0A0A] text-nowrap rounded-2xl transform transition-all duration-300"
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
