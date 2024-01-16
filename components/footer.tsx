"use client";

import { useRouter, usePathname } from "next/navigation";
import { GalleryVertical, QrCode, WalletCards } from "lucide-react";

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <>
      {pathname !== "/" && (
        <footer>
          <div className="h-[7vh] border-t-1 border-gray-500 flex justify-around items-center px-4">
            <div
              className="flex justify-center items-center flex-col"
              onClick={() => {
                router.push("/home");
              }}
            >
              <GalleryVertical color={pathname === "/home" ? "#d9c3ff" : "white"}/>
              <div className={`text-[0.75rem] ${pathname === "/home" ? "text-[#d9c3ff]" : "text-white"}`}>Home</div>
            </div>
            <div
              className="flex justify-center items-center flex-col"
              onClick={() => {
                router.push("/receive");
              }}
            >
              <QrCode color={pathname === "/receive" ? "#d9c3ff" : "white"}/>
              <div className={`text-[0.75rem] ${pathname === "/receive" ? "text-[#d9c3ff]" : "text-white"}`}>Receive</div>
            </div>
            <div
              className="flex justify-center items-center flex-col"
              onClick={() => {
                router.push("/finances");
              }}
            >
              <WalletCards color={pathname === "/finances" ? "#d9c3ff" : "white"}/>
              <div className={`text-[0.75rem] ${pathname === "/finances" ? "text-[#d9c3ff]" : "text-white"}`}>Finances</div>
            </div>
          </div>
          <div className="h-[2vh]"></div>
        </footer>
      )}
    </>
  );
};

export default Footer;
