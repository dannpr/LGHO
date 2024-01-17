"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import Balance from "./balance";
import Actions from "./actions";
import Trafic from "./trafic";

export default function Home() {
  return (
    <main className="h-[84vh] px-4 pt-4 pb-2 flex items-center justify-start flex-col space-y-1">
      <Balance />
      <ScrollArea className=" h-full w-full flex items-center justify-start flex-col space-y-4">
        <Actions />
        <Trafic />
      </ScrollArea>
    </main>
  );
}
