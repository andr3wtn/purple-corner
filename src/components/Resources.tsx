import Image from "next/image";
import Link from "next/link";


export default function Resources() {
    return (
        <section className="min-h-screen px-10 py-10 flex justify-center items-center flex-col md:flex-row gap-5">
            <div className="p-5 sm:p-7 lg:p-10 flex-1 grow-1 text-left sm:h-100 sm:w-100 md:h-125 md:w-125 lg:w-auto flex flex-col items-center">
                <h2 className="text-4xl mb-6 text-[3.875rem]">Resources</h2>
                <ul className="text-3xl my-5 md:my-10 list-disc">
                    <li>Your Feminist list of Readings</li>
                    <li>Notes from Past Events</li>
                    <li>Feminist Practice: useful tools, sites, initiatives </li>
                </ul>

                <Link href="/resources" 
                    className="bg-[#310d51] text-white text-2xl rounded-lg py-3 px-6 hover:bg-[#270A40] hover:scale-105"
                >
                    Learn More
                </Link>
            </div>

            <div className="w-[300px] sm:w-[400px] lg:w-[500px] shrink-0">
                <Image
                src="/images/events.png"
                alt="Resource 1"
                width={500}
                height={500}
                className="w-full h-auto object-contain"
                />
            </div>
        </section>
    );
}