"use client"

import { useRouter, usePathname } from "next/navigation";
import {
    ConnectKitButton,
  } from "connectkit";

const Header = () => {
    const pathname = usePathname();
  return (
    <>
    {pathname !== "/" && (
    <header className="flex items-center justify-between py-2 px-4">
        <div className="text-[1.75rem] font-black font-[SFPro]">
            {pathname === "/home" && "Home"}
            {pathname === "/receive" && "Receive"}
            {pathname === "/finances" && "Finances"}
        </div>
        <ConnectKitButton/>
    </header>)}
    </>
  )
}

export default Header