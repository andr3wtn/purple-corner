import Image from "next/image";

export default function AboutUs() {
    return (
        <section className="min-h-screen px-10 py-20">
            <h2 className="text-4xl mb-6 text-center text-[3.875rem]">About Us</h2>

            <div className="flex flex-col text-center justify-center md:flex-row">
                <div className="w-1/2">
                    <Image src="/images/Placeholder-person.svg" alt="Person 1" width={500} height={500} />
                    <h2 className="text-[#594E32] text-4xl">Person 1</h2>
                    <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>

                <div className="w-1/2">
                    <Image src="/images/Placeholder-person.svg" alt="Person 1" width={500} height={500} />
                    <h2 className="text-[#594E32] text-4xl">Person 2</h2>
                    <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>

                <div className="w-1/2">
                    <Image src="/images/Placeholder-person.svg" alt="Person 1" width={500} height={500} />
                    <h2 className="text-[#594E32] text-4xl">Person 3</h2>
                    <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </div>
            
        </section>
    );
}