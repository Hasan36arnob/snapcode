import { SearchIcon } from "lucide-react";
import LogoutButton from "../shared/logout-button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import Image from "next/image";
import { auth } from "@/auth";
import Chats from "./chats";
import { Suspense } from "react";
import { ChatsSkeleton } from "../skeletons/chats-skeletons";

const ChatSideBar = async () => {
	const session = await auth();
	return (
		<aside className='flex-[1_1_0%] flex flex-col bg-[#3d405b] text-[#f4f1de]'>
			<div className='sticky top-0 bg-[#3d405b] z-50'>
				<div className='flex items-center justify-between p-4 border-b border-[#f4f1de]/10'>
					<div className='relative'>
						<Avatar className='cursor-pointer hover:bg-[#f4f1de]/10'>
							<AvatarImage src={session?.user?.image!} />
						</Avatar>
					</div>
					<Button className='bg-[#e07a5f] hover:bg-[#c96a50] text-white rounded-full h-8 w-8 relative p-2 transition-colors'>
						<Image src={"/chat.svg"} fill alt='Chat icon' />
					</Button>
					<LogoutButton />
				</div>
				<div className='p-4 '>
					<div className='text-[#f4f1de]/60 p-1 flex gap-2 rounded-full bg-[#f4f1de]/5 border border-[#f4f1de]/10 focus-within:border-[#e07a5f]/50 transition-colors'>
						<SearchIcon className='text-[#f4f1de]/40 w-5 ml-2' />
						<input
							className='bg-transparent border-none text-[#f4f1de] placeholder-[#f4f1de]/40 focus:outline-none w-full'
							placeholder='Search friends'
							type='text'
						/>
					</div>
				</div>
			</div>
			<div className="flex-1 overflow-y-auto">
				<Suspense fallback={<ChatsSkeleton />}>
					<Chats />
				</Suspense>
			</div>
		</aside>
	);
};
export default ChatSideBar;

// STARTER CODE FOR THIS FILE. TimeStamp to paste this code => 01:49:12
// import { SearchIcon } from "lucide-react";
// import LogoutButton from "../shared/logout-button";
// import { Avatar, AvatarImage } from "../ui/avatar";
// import { Button } from "../ui/button";
// import Image from "next/image";
// import { auth } from "@/auth";

// const ChatSideBar = async () => {
// 	const session = await auth();
// 	return (
// 		<aside className='flex-[1_1_0%] flex flex-col bg-black text-white'>
// 			<div className='sticky top-0 bg-black z-50'>
// 				<div className='flex items-center justify-between p-4 border-b border-gray-800 '>
// 					<div className='relative'>
// 						<Avatar className='cursor-pointer hover:bg-sigBackgroundSecondaryHover'>
// 							<AvatarImage src={session?.user?.image!} />
// 						</Avatar>
// 					</div>
// 					<Button className='bg-sigButton hover:bg-sigButtonHover text-white rounded-full h-8 w-8 relative p-2'>
// 						<Image src={"/chat.svg"} fill alt='Chat icon' />
// 					</Button>
// 					<LogoutButton />
// 				</div>
// 				<div className='p-4 '>
// 					<div className=' text-gray-400 p-1  flex gap-2 rounded-full bg-sigSurface border border-sigColorBgBorder'>
// 						<SearchIcon className='text-gray-400 w-5' />
// 						<input
// 							className='bg-transparent border-none text-white placeholder-gray-400 focus:outline-none'
// 							placeholder='Search'
// 							type='text'
// 						/>
// 					</div>
// 				</div>
// 			</div>
// 		</aside>
// 	);
// };
// export default ChatSideBar;
