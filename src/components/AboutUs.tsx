import Image from "next/image";

export default function AboutUs() {
    return (
        <section className="min-h-screen px-10 py-10">
            <h2 className="text-[3rem] mb-4 sm:mb-6 text-center md:text-[3.875rem]">About Us</h2>

            <div className="text-left text-xl sm:text-2xl my-10 indent-5">
                <p>Purple Corner is a feminist society. We question how feminism has been shaped, who it has served, and who it has left behind.</p> 
                <p>We reclaim feminism as a living, evolving practice: one that listens, adapts, and stays uncomfortable with its own power. </p>
                <p>We build a space that is safe and intentional enough, though imperfect. We believe feminist space must be one where people can breathe, speak, and be held without fear. </p>
                <p>We imagine worlds beyond what we’ve been given, and we invite you to create small pockets of that world here together. We call this critical consciousness, where we aim to assess how the worlds we each live in have been shaped by oppressive knowledge spaces and systems. </p>
            </div>
            <div className="flex flex-col gap-5 text-center justify-center md:flex-row items-center">
                <div className="order-2 md:order-1 sm:w-4/5 md:w-1/2 flex flex-col items-center justify-center">
                    <Image src="/images/Placeholder-person.svg" alt="Person 1" width={500} height={500} />
                    <h2 className="text-[#594E32] text-4xl">Nanami</h2>
                    <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>

                <div className="order-1 md:order-2 sm:w-4/5 md:w-1/2 flex flex-col items-center justify-center">
                    <Image src="/images/Placeholder-person.svg" alt="Person 1" width={500} height={500} />
                    <h2 className="text-[#594E32] text-4xl">Ashley</h2>
                    <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>

                <div className="order-3 sm:w-4/5 md:w-1/2 flex flex-col items-center justify-center">
                    <Image src="/images/Placeholder-person.svg" alt="Person 1" width={500} height={500} />
                    <h2 className="text-[#594E32] text-4xl">Yuqi</h2>
                    <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </div>
            
        </section>
    );
}