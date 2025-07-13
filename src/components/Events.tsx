import Image from "next/image";

export default function Events() {
    return (
        <section className="min-h-screen px-10 py-10 flex justify-center items-center flex-col lg:flex-row gap-5">
            <div className="w-[500px] shrink-0">
                <Image
                src="/images/events.png"
                alt="Event 1"
                width={500}
                height={500}
                className="w-full h-auto object-contain"
                />
            </div>
            <div className="bg-[#310d51] text-white p-10 md:p-20 flex-1 grow-1 text-left sm:h-100 sm:w-100 md:h-125 md:w-125 lg:w-auto">
                <h2 className="text-4xl mb-6 text-[3.875rem]">Events</h2>
                <p className="text-3xl my-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            
        </section>
    );
}