import Link from "next/link";
import React from "react";

interface ListItemProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export default function ListItem({ children, className = "", href = "" }: ListItemProps) {
  return (
    <li className={`sm:rounded-full flex sm:justify-center items-center md:w-30 lg:w-35 md:text-xl lg:text-2xl font-normal ${className}`}>
      <Link className="py-1" href={`${href}`}>{children}</Link>
    </li>
  );
} 