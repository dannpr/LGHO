import {Button} from "@nextui-org/react";
import { LockKeyhole , Settings , PieChart, ArrowRightLeft  } from 'lucide-react';

const Actions = () => {
  return (
    <div className='h-[10vh] w-full flex items-center justify-around space-x-4 p-4'>
        <div className="flex items-center justify-center flex-col space-y-2">
            <Button isIconOnly className="bg-[#d9c3ff]">
                <ArrowRightLeft/>
            </Button>
            <div className="text-[0.75rem]">
                Swap
            </div>
        </div>
        <div className="flex items-center justify-center flex-col space-y-2">
            <Button isIconOnly variant="bordered">
                <LockKeyhole />
            </Button>
            <div className="text-[0.75rem]">
                Lock
            </div>
        </div>
        <div className="flex items-center justify-center flex-col space-y-2">
            <Button isIconOnly variant="bordered">
                <Settings />
            </Button>
            <div className="text-[0.75rem]">
                Settings
            </div>
        </div>
    </div>
  )
}

export default Actions