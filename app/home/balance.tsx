"use client";
import { ProviderContext } from "@/components/provider";
import { useContext, useEffect, useState } from "react";
import { Wallet2, Bolt  } from 'lucide-react';

const Balance = () => {
    const { balance} = useContext(ProviderContext);
  return (
        <div className="p-4 aspect-[16/6] bg-[#595678] w-full border rounded-md flex items-between justify-between mb-[0.5rem]">
                <div className="flex items-start justify-between flex-col">
                <div className="flex items-start justify-start flex-col">
                    <div className='flex items-center justify-center space-x-2'>
                    <div>
                        Your Balance 
                    </div>
                    <div className='flex items-center justify-center'>
                        <Bolt size={15}/>
                    </div>
                    </div>
                    <div className="text-[0.75rem] text-gray-400">
                    Personal
                    </div>
                </div>
                
                </div>
                <div className="flex items-start justify-between flex-col">
                    <div className='h-full flex items-start justify-end w-full'>
                        <Wallet2 />
                    </div>
                    <div className='text-[1.75rem]'>
                        {balance} $
                    </div>
                </div>
            </div>
  )
}

export default Balance