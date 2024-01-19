"use client"
import { createContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAccount } from "wagmi";
import {
    ConnectKitButton,
  } from "connectkit";

const Header = () => {
  const router = useRouter();
  const { isConnected } = useAccount();
  useEffect(() => {
    if (!isConnected) {
      router.push("/");
    }
  }, [isConnected]);
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
        {pathname !== "/finances" && (
        <ConnectKitButton/>
        )}
    </header>)}
    </>
  )
}

export default Header