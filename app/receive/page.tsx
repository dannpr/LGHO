"use client"
import {QRCodeSVG} from 'qrcode.react';

  export default function Home() {
    return (
      <main className="h-[84vh] flex items-center justify-center">
        <QRCodeSVG value="https://tag-network.vercel.app/shimadakunn.eth" size={250}/>
      </main>
    )
  }