import Image from "next/image";
import React from "react";

interface FooterProps {
    id?: string;
}

export default function Footer({ id }: FooterProps) {
    const phoneNumber = "+44xxxxxxxxx";
    const email = "info@purplecorner.org";
    return (
        <footer id={id} className="bg-[#310D51] text-white p-10 md:p-20 flex-1 grow-1 text-left sm:h-100 md:h-125 lg:w-auto">
            <div className="flex items-center gap-5">
                <Image alt="light background logo" src="/images/logo_light.svg" width={90} height={90} className="rounded-full" />
                <h1 className="text-5xl">PURPLE CORNER</h1>
            </div>

            <div className="flex gap-4 mt-20">
                <div className="flex-1 border py-5 px-8">
                    <h3 className="text-2xl mb-5">Address</h3>
                    <p>Address Line 1</p>
                    <p>Address Line 2</p>
                    <p>Oxford, OX1 1AA</p>
                </div>

                <div className="flex-1 border py-5 px-8">
                    <h3 className="text-2xl mb-5">Contact</h3>
                    <p>Email: <a href={`mailto:${email}`}>{ email }</a></p>
                    <p>Phone: <a href={`tel:${phoneNumber}`}>{ phoneNumber }</a></p>
                </div>

                <div className="flex-1 border py-5 px-8">
                    <h3 className="text-2xl mb-5">Follow Us</h3>
                    <div className="flex items-center gap-3">
                        <Image src="/images/instagram.svg" alt="Instagram" width={30} height={30} />
                        <span className="text-lg">@ox_purple_corner</span>
                    </div>
                    <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                        Visit Instagram
                    </button>
                </div>
            </div>

            <p className="text-center mt-8 text-gray-300 text-sm">© 2025 Purple Corner. All rights reserved.</p>
        </footer>
    )
}