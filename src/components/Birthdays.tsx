import Image from "next/image"
import Link from "next/link"


const Birthdays = () => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
            {/* TOP */}
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-500">Birthdays</span>
            </div>
            {/* USER */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image
                        src="https://images.pexels.com/photos/29803469/pexels-photo-29803469.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <span>Wayne Burton</span>
                </div>
                <div className="flex gap-3 justify-end">
                    <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md">
                        Celebrate
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Birthdays