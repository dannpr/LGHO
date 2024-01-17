"use client";
import { useEffect, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@nextui-org/react";
import { Input } from "@/components/ui/input"

import { useToast } from "@/components/ui/use-toast"

import { ChevronDown } from 'lucide-react';

import LoopAnimation from "@/lib/loop-animation";
import Error from "@/public/icon/error-white.json";
import Checkmark from "@/public/icon/checkmark.json";


type SendProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  address?: string | null;
};

const Send: React.FC<SendProps> = ({ open, setOpen, address }) => {
  const { toast } = useToast()
  const cryptos = [
    { value: "GHO", price: 0.9027 },
    { value: "ETH", price: 2327.24 },
  ];
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState<number>();
  const [selectedCrypto, setSelectedCrypto] = useState("GHO");

  useEffect(() => {
    if (address) {
      setReceiver(address);
    }
  }, [address]);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent className="">
        <DrawerHeader className="flex items-center justify-between px-4">
          <ChevronDown onClick={()=>setOpen(false)}/>
          <DrawerTitle className="text-[1.5rem]">Send Funds</DrawerTitle>
          <div></div>
        </DrawerHeader>
        <div className="flex items-start justify-center flex-col space-y-2 p-4">
          <div className="text-[1.5rem] font-medium">
            Send to
          </div>
          {address ? (
            <div className="text-[1.25rem] text-[#d9c3ff]">
              {receiver.substring(0, 12) + "..." + receiver.substring(receiver.length - 12)}
            </div>
          ) : (
            <Input
              placeholder="Receiver address"
              onChange={(e) => setReceiver(e.target.value)}
              className="text-[1.25rem]"
            />
          )}
          <div className="text-[1.5rem] font-medium pt-4">
            Amount
          </div>
          <div className="p-4 border w-full rounded-md flex items-start justify-center flex-col">
            <div className="text-gray-400 font-light">
              You send
            </div>
            <div className="flex items-center justify-between">
              <input
                placeholder="0"
                onChange={(e) => setAmount(parseFloat(e.target.value))}
                className="text-[1.5rem] w-full bg-transparent h-[7vh] text-[#d9c3ff] focus:border-transparent border-none"
              />
              <Select defaultValue={selectedCrypto} onValueChange={(e)=>setSelectedCrypto(e)}>
                <SelectTrigger className="h-[5vh] w-[42vw]">
                  <SelectValue/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {cryptos.map((crypto) => (
                      <SelectItem
                        key={crypto.value}
                        value={crypto.value}
                      >
                        <div className="flex items-center justify-between flex-row my-2">
                            <img
                              src={`../../icon/${crypto.value.toLowerCase()}.png`}
                              alt={crypto.value}
                              className="w-6 h-6 mr-2 rounded-full"
                            />
                          <div>
                            {crypto.value}
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            {amount ? (
              <div className="text-[0.75rem] text-gray-400 font-light">
                {Number((amount * cryptos.find((crypto) => crypto.value === selectedCrypto)!.price).toFixed(4))} $
              </div>
            ):(<></>)}
          </div>
        </div>
        <DrawerFooter className="flex items-center justify-around flex-row mb-4">
          <Button className="pl-5 text-[1.25rem] bg-[#d9c3ff] w-[70vw] font-semibold" onClick={() => {
        toast({
          title: "Transaction sent",
        })
        setOpen(false);
      }}>
            Send
            <LoopAnimation animationData={Checkmark} className="h-6 w-6" />
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Send;
