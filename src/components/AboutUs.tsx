import Image from "next/image";

export default function AboutUs() {
    return (
        <section className="min-h-screen px-10 py-10">
            <h2 className="text-4xl mb-6 text-center text-[3.875rem]">About Us</h2>

            <p className="text-center text-3xl my-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="flex flex-col gap-5 text-center justify-center md:flex-row items-center">
                <div className="sm:w-4/5 md:w-1/2 flex flex-col items-center justify-center">
                    <Image src="/images/Placeholder-person.svg" alt="Person 1" width={500} height={500} />
                    <h2 className="text-[#594E32] text-4xl">Person 1</h2>
                    <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>

                <div className="sm:w-4/5 md:w-1/2 flex flex-col items-center justify-center">
                    <Image src="/images/Placeholder-person.svg" alt="Person 1" width={500} height={500} />
                    <h2 className="text-[#594E32] text-4xl">Person 2</h2>
                    <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>

                <div className="sm:w-4/5 md:w-1/2 flex flex-col items-center justify-center">
                    <Image src="/images/Placeholder-person.svg" alt="Person 1" width={500} height={500} />
                    <h2 className="text-[#594E32] text-4xl">Person 3</h2>
                    <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </div>
            
        </section>
    );
}