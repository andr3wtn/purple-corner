import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FooterProps {
    id?: string;
}

export default function Footer({ id }: FooterProps) {
    const phoneNumber = "+44xxxxxxxxx";
    const email = "info@purplecorner.org";
    return (
        <footer id={id} className="bg-[#310D51] text-white p-5 md:px-20 md:py-10 flex-1 grow-1 text-left md:h-auto lg:w-auto">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-5">
                    <Image alt="light background logo" src="/images/logo_light.svg" width={90} height={90} className="rounded-full" />
                    <h1 className="text-5xl">PURPLE CORNER</h1>
                </div>
                <div className="text-center text-gray-200 text-sm">
                    <a href="/admin/login" className="hover:underline">
                    Admin Login
                    </a>
                </div>
            </div>

            <div className="flex gap-4 mt-7 lg:mt-10 flex-col md:flex-row">
                <div className="flex-1 grow-1 border py-5 px-8">
                    <h3 className="text-2xl mb-5">Address</h3>
                    <p>Address Line 1</p>
                    <p>Address Line 2</p>
                    <p>Oxford, OX1 1AA</p>
                </div>

                <div className="flex-1 grow-1 border py-5 px-8">
                    <h3 className="text-2xl mb-5">Contact</h3>
                    <p>Email: <a href={`mailto:${email}`}>{ email }</a></p>
                    <p>Phone: <a href={`tel:${phoneNumber}`}>{ phoneNumber }</a></p>
                </div>

                <div className="flex-1 grow-1 border py-5 px-8">
                    <h3 className="text-2xl mb-5">Follow Us</h3>
                    <a className="inline-flex items-center gap-1 md:gap-3 flex-col lg:flex-row items-start" href="https://www.instagram.com/ox_purple_corner" target="_blank">
                        <Image src="/images/instagram.svg" alt="Instagram" width={30} height={30} className=""/>
                        <span className="text-lg">@ox_purple_corner</span>
                    </a>
                </div>
            </div>

            <p className="text-center mt-8 text-gray-300 text-sm">© 2025 Purple Corner. All rights reserved. 
                <button
                    className="underline hover:text-gray-100"
                >
                 Site information
                </button>
            </p>
        </footer>
    )
}