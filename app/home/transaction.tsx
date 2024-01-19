import { Separator } from "@/components/ui/separator";

type Transaction = Array<[string, string, number]>;
type Props = {
    date: string;
    data?: Transaction;
  };

const Transaction: React.FC<Props> = ({ date, data }) => {
  return (
    <div>
        <div className="mb-2">{date}</div>
        <div className="border border-gray-500 rounded-md">
          {data!.map((item, index) => (
            <>
              <div
                key={index}
                className="flex justify-between items-center p-4"
              >
                <div className="flex justify-center items-center space-x-3">
                    <div className="aspect-square w-8 rounded-full overflow-hidden">
                        <img
                        className="object-fit"
                        src={`https://api.dicebear.com/7.x/identicon/svg?rowColor=cdb4db,ffc8dd,ffafcc,bde0fe,a2d2ff&seed=${item[0]}`}
                        alt="avatar"
                        />
                    </div>
                  <div className="text-[1.10rem] w-[45vw] truncate">{item[0]}</div>
                </div>
                {item[2] > 0 ? (<div className="px-1 border rounded-md bg-[#d9c3ff] text-black">{item[2]} $</div>):(<div>{item[2]} $</div>)}
                
              </div>
              {index !== data!.length - 1 && <Separator />}
            </>
          ))}
        </div>
      </div>
  )
}

export default Transaction