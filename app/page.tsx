"use client"
import { useAccount} from "wagmi";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Meteors } from "@/components/ui/meteors";
import {
  ConnectKitButton,
} from "connectkit";

export default function Home() {
  const { isConnected } = useAccount();
  const router = useRouter();
  useEffect(() => {
    if(isConnected) {
      router.push("/home");
    }
  }, [isConnected]);
  return (
    <main className="px-4 py-8 relative overflow-hidden h-screen flex items-center justify-center">
      <div className="z-10 flex items-center justify-center flex-col space-y-12 font-[SFPro]">
        <h1 className="text-6xl font-bold text-center text-[#ebdfff]">
          Legho
        </h1>
        <ConnectKitButton/>
      </div>
      <div className="overflow-hidden absolute top-0 left-1/2 transform -translate-x-1/2 h-[34vh] w-full">
        <Meteors number={20} />
      </div>
      <div className="overflow-hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[34vh] w-full">
        <Meteors number={20} />
      </div>
      <div className="overflow-hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[34vh] w-full">
        <Meteors number={20} />
      </div>
    </main>
  )
}
