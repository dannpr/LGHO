"use client"
import {QRCodeSVG} from 'qrcode.react';

  export default function Home() {
    return (
      <main className="h-[84vh] flex items-center justify-center">
        <QRCodeSVG value="http://192.168.1.18:3000/home?address=0x63972913FC6FA0dd24250E0F0cEe8724b47a8e14" size={250}/>
      </main>
    )
  }