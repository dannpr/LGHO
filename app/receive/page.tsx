"use client"
import {QRCodeSVG} from 'qrcode.react';
import { useAccount } from "wagmi";

  export default function Home() {
    const { address } = useAccount();
    return (
      <main className="h-[84vh] flex items-center justify-center">
        <QRCodeSVG value={`https://legho.vercel.app/home?address=${address}`} size={250}/>
      </main>
    )
  }