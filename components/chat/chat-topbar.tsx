import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import ChatUserInfo from "./chat-user-info";
import DeleteMessagesButton from "./delete-messages-button";
import { Button } from "../ui/button";
import { getUserProfile } from "@/lib/data";

const ChatTopbar = async ({ params }: { params: { id: string } }) => {
	const userData = await getUserProfile(params.id);
	return (
		<div className='mt-4 flex justify-between items-center w-full bg-[#f4f1de]/30 p-2 rounded-xl backdrop-blur-sm border border-[#3d405b]/5'>
			<div className='flex gap-2 items-center'>
				<Button
					asChild
					className='bg-[#3d405b]/10 hover:bg-[#3d405b]/20 text-[#3d405b] w-10 h-10 rounded-full p-0 flex items-center justify-center transition-colors'
				>
					<Link href={"/chat"}>
						<ChevronLeft className='w-6 h-6' />
					</Link>
				</Button>
				<ChatUserInfo userData={userData} />
			</div>
			{/* right */}
			<DeleteMessagesButton />
		</div>
	);
};
export default ChatTopbar;

// STARTER CODE FOR THIS FILE. TimeStamp to paste this code => 02:58:35
// import Link from "next/link";
// import { ChevronLeft } from "lucide-react";
// import ChatUserInfo from "./chat-user-info";
// import DeleteMessagesButton from "./delete-messages-button";
// import { Button } from "../ui/button";

// const ChatTopbar = async () => {
// 	return (
// 		<div className='mt-4 flex justify-between items-center w-full'>
// 			<div className='flex gap-2'>
// 				<Button
// 					asChild
// 					className='bg-sigButtonSecondary hover:bg-sigButtonSecondaryHover w-11 h-11 rounded-full '
// 				>
// 					<Link href={"/chat"}>
// 						<ChevronLeft className='min-w-7' />
// 					</Link>
// 				</Button>
// 				<ChatUserInfo />
// 			</div>
// 			{/* right */}
// 			<DeleteMessagesButton />
// 		</div>
// 	);
// };
// export default ChatTopbar;
