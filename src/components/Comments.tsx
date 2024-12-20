import Image from "next/image"

const Comments = () => {
    return (
        <div>
            {/* WRITE */}
            <div className="flex items-center gap-4">
                <Image
                    src="https://images.pexels.com/photos/28434542/pexels-photo-28434542.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt=""
                    className="w-8 h-8 rounded-full"
                    width={32}
                    height={32}
                />
                <div className="flex flex-1 items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
                    <input
                        type="text"
                        placeholder="Write a comment..."
                        className="bg-transparent outline-none"
                    />
                    <Image
                        src="/emoji.png"
                        alt=""
                        className="cursor-pointer"
                        width={16}
                        height={16}
                    />
                </div>
            </div>

            {/* COMMENTS */}
            <div className="">
                {/* COMMENT */}
                <div className=" flex gap-4 justify-between mt-6">
                    {/* AVATER */}
                    <Image
                        src="https://images.pexels.com/photos/28434542/pexels-photo-28434542.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                        className="w-10 h-10 rounded-full"
                        width={40}
                        height={40}
                    />
                    {/* DESC */}
                    <div className="flex flex-col gap-2 flex-1">
                        <span className="font-medium">Bernice Spencer</span>
                        <p>
                            This is a roundom reply sentence. This is a roundom reply sentence. This is a roundom reply sentence. This is a roundom reply sentence. This is a roundom reply sentence. This is a roundom reply sentence. This is a roundom reply sentence.
                        </p>
                        <div className="flex items-center gap-8 mt-2 text-xs text-gray-500">
                            <div className="flex items-center gap-4">
                                <Image
                                    src="/like.png"
                                    alt=""
                                    className="cursor-pointer w-4 h-4"
                                    width={12}
                                    height={12}
                                />
                                <span className="text-gray-300">|</span>
                                <span className="text-gray-500">123 Likes</span>
                            </div>
                            <div className="">
                                Reply
                            </div>
                        </div>
                    </div>
                    {/* ICON */}
                    <Image
                        src="/more.png"
                        alt=""
                        className="cursor-pointer w-4 h-4"
                        width={16}
                        height={16}
                    />
                </div>
            </div>
        </div>
    )
}

export default Comments