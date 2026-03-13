import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LogoutButton from "./logout-button";
import { auth } from "@/auth";

const Navbar = async () => {
	const session = await auth();
	return (
		<header className='w-full py-4 px-8 flex justify-between items-center relative z-20'>
			<div className="flex items-center gap-2">
				<Image src='/logo.svg' width={40} height={40} alt='Logo' className='cursor-pointer' />
				<span className="hidden md:block font-bold text-[#3d405b] text-xl">SnapUmmah</span>
			</div>
			<div className='flex space-x-1'>
				<Button className='bg-transparent hover:bg-[#3d405b]/10 text-[#3d405b] font-medium'>Explore</Button>
				<Button asChild className='bg-transparent hover:bg-[#3d405b]/10 text-[#3d405b] font-medium'>
					<Link href={"/chat"}> Messages</Link>
				</Button>
			</div>
			<div className='flex space-x-2'>
				{!session && (
					<Button asChild className='bg-[#e07a5f] hover:bg-[#c96a50] text-white rounded-full px-6 py-2 text-xs md:text-sm font-semibold transition-all'>
						<Link href={"/login"}>Login</Link>
					</Button>
				)}
				{session?.user && <LogoutButton />}
			</div>
		</header>
	);
};
export default Navbar;

// STARTER CODE FOR THIS FILE. TimeStamp to paste this code => 00:31:22
// import Image from "next/image";
// import React from "react";
// import Link from "next/link";

// const Navbar = async () => {

// 	return (
// 		<header className='w-full py-4 px-8 flex justify-between items-center'>
// 			<Image src='/logo.svg' width={40} height={40} alt='Snapchat logo' className='cursor-pointer' />
// 			<div className='flex space-x-1'>
// 				<Button className='bg-transparent hover:bg-primary/5 text-black'>Stories</Button>
// 				<Button className='bg-transparent hover:bg-primary/5 text-black'>Spotlight</Button>
// 				<Button asChild className='bg-transparent hover:bg-primary/5 text-black'>
// 					<Link href={"/chat"}> Chat</Link>
// 				</Button>
// 			</div>
// 			<div className='flex space-x-2'>
// 				<Button className='bg-black text-white rounded-full p-3 text-xs md:text-sm'>Watch tutorial</Button>
// 				<form >
// 			<Button className='bg-black text-white rounded-full p-3 text-xs md:text-sm'>
// 				<LogOut className='cursor-pointer' />
// 			</Button>
// 		</form>
// 			</div>
// 		</header>
// 	);
// };
// export default Navbar;
