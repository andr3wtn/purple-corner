import Image from "next/image";

export default function Footer() {
    const phoneNumber = "+44xxxxxxxxx";
    const email = "info@purplecorner.org";
    return (
        <footer className="bg-[#310D51] text-white p-10 md:p-20 flex-1 grow-1 text-left sm:h-100 sm:w-100 md:h-125 md:w-125 lg:w-auto">
            <div className="flex items-center gap-5">
                <Image alt="light background logo" src="/images/logo_light.svg" width={90} height={90} className="rounded-full" />
                <h1 className="text-5xl">PURPLE CORNER</h1>
            </div>

            <div className="flex gap-4 mt-20">
                <div className="flex-1 border py-5 px-8">
                    <h3 className="text-2xl mb-5">Contact Us</h3>
                    <p>Address Line 1</p>
                    <p>Address Line 2</p>
                    <p>Oxford, OX1 1AA</p>
                    <p>Email: <a href={`mailto:${email}`}>{ email }</a></p>
                    <p>Phone: <a href={phoneNumber}>{ phoneNumber }</a></p>
                </div>

                <div className="flex-1 border py-5 px-8">
                    <h3 className="text-2xl mb-5">Follow Us</h3>
                    <div className="flex gap-5">

                        <a href="https://www.instagram.com/ox_purple_corner">
                            <Image src="/images/instagram.svg" alt="Instagram" width={30} height={30} />
                        </a>

                    </div>
                </div>
            </div>
        </footer>
    )
}