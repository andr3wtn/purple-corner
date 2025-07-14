import Image from "next/image";
import AboutUs from '@/components/AboutUs';
import Events from '@/components/Events';
import Resources from '@/components/Resources';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <header className=" top-0 z-50 bg-[#310D51] px-10 pt-5 flex justify-between">
        <Image alt="light background logo" src="/images/logo_light.svg" width={90} height={90} className="rounded-full" />
        <Navigation />
      </header>

      <section className="bg-[#310D51] min-h-screen px-10">
        <div className="flex justify-between text-white">
          <div className="content pl-5 flex-2">
            <h1 className="text-6xl md:text-8xl my-10 w-60 font-normal">PURPLE CORNER</h1>
            <div className="text-lg w-4/5 pb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>
          </div>
          <div className="flex-1">
            <button 
              type="button" 
              className="text-3xl px-4 py-2 mb-4 bg-[#BC9ED9] text-[#310D51] rounded-xl"
            >Buy Our Membership</button>
          </div>
        </div>

        

      </section>


      <AboutUs />

      <Events />

      <Resources />

      <Footer id="footer" />
    </>
    
  );
}
