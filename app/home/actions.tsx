import {Button} from "@nextui-org/react";
import { Plus, MoveRight, Calendar, PieChart } from 'lucide-react';

const Actions = () => {
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
            <Button isIconOnly className="bg-[#d9c3ff]">
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
    </div>
  )
}

export default Actions