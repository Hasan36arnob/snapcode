import ChatCamera from "@/components/chat/chat-camera";
import Image from "next/image";

export default async function ChatRootPage() {
	return (
		<main className='flex-grow bg-[#f4f1de] items-center flex px-2 relative overflow-hidden'>
			<div 
				className="absolute inset-0 opacity-[0.02] pointer-events-none"
				style={{
					backgroundImage: `url("https://www.transparenttextures.com/patterns/islamic-art.png")`,
					backgroundRepeat: 'repeat',
				}}
			/>
			<div
				className='bg-[#3d405b]/5 backdrop-blur-sm border border-[#3d405b]/10
				rounded-3xl w-full h-[96%] flex items-center justify-center px-6 relative z-10 shadow-inner'
			>
				<ChatCamera />
				<div className='hidden lg:block opacity-80'>
					<Image 
						src='https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=2070&auto=format&fit=crop' 
						width={500} 
						height={600} 
						alt='Islamic Calligraphy' 
						className="rounded-2xl shadow-2xl"
					/>
				</div>
			</div>
		</main>
	);
}

// STARTER CODE FOR THIS FILE. TimeStamp to paste this code => 01:40:30
// import ChatCamera from "@/components/chat/chat-camera";
// import Image from "next/image";

// export default function ChatRootPage() {
// 	return (
// 		<main className='flex-grow bg-sigMain items-center flex px-2'>
// 			<div
// 				className='bg-chat bg-right-bottom
// 				rounded-3xl w-full h-[96%] flex items-center justify-center px-6'
// 			>
// 				<ChatCamera />
// 				<div className='hidden lg:block'>
// 					<Image src={"/snapemoji.png"} width={500} height={600} alt='Snap avatar' />
// 				</div>
// 			</div>
// 		</main>
// 	);
// }
