import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import {Button} from "@nextui-org/react";
import { Plus, MoveRight, Calendar, PieChart } from 'lucide-react';

import Send from "./send";

const Actions = () => {

    const searchParams = useSearchParams();
  const address = searchParams.get("address");

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (address) {setOpen(true);}
  }, []);

  return (
    <div className='h-[10vh] w-full flex items-center justify-around space-x-4 p-4'>
        <div className="flex items-center justify-center flex-col space-y-2">
            <Button isIconOnly className="bg-[#d9c3ff]">
                <Plus />
            </Button>
            <div className="text-[0.75rem]">
                Add
            </div>
        </div>
        <div className="flex items-center justify-center flex-col space-y-2">
            <Button isIconOnly className="bg-[#d9c3ff]" onClick={()=>setOpen(true)}>
                <MoveRight />
            </Button>
            <div className="text-[0.75rem]">
                Send
            </div>
        </div>
        <div className="flex items-center justify-center flex-col space-y-2">
            <Button isIconOnly variant="bordered">
                <Calendar />
            </Button>
            <div className="text-[0.75rem]">
                Plan
            </div>
        </div>
        <div className="flex items-center justify-center flex-col space-y-2">
            <Button isIconOnly variant="bordered">
                <PieChart />
            </Button>
            <div className="text-[0.75rem]">
                Manage
            </div>
        </div>
        <Send open={open} setOpen={setOpen} address={address}/>
    </div>
  )
}

export default Actions