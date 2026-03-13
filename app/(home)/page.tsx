import { auth } from "@/auth";
import Navbar from "@/components/shared/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
	const session = await auth();
	return (
		<div className='bg-[#f4f1de] relative overflow-hidden'>
			{/* Islamic Geometric Background Pattern */}
			<div 
				className="absolute inset-0 opacity-[0.03] pointer-events-none"
				style={{
					backgroundImage: `url("https://www.transparenttextures.com/patterns/islamic-art.png")`,
					backgroundRepeat: 'repeat',
				}}
			/>
			
			<div className='min-h-screen flex flex-col items-center justify-center max-w-7xl mx-auto relative z-10'>
				<Navbar />
				<main className='flex flex-1 flex-col md:flex-row items-center justify-center px-8 mt-4'>
					<div className='flex-1 md:text-left text-center h-full'>
						<h1 className='text-4xl md:text-6xl font-bold text-[#3d405b]'>
							SnapNext for the Ummah
						</h1>
						<p className='mt-4 text-xl font-semibold text-[#3d405b]/80'>
							Connect and share with your brothers and sisters in a mindful way.
						</p>
						<div className='mt-4'>
							<p className='mt-2 text-lg font-semibold text-[#e07a5f]'>
								Join our community today.
							</p>
						</div>
						{!session ? (
							<Button
								asChild
								className='mt-4 bg-[#3d405b] hover:bg-[#2a2c3e] text-white flex items-center rounded-lg gap-2 mx-auto md:mx-0'
							>
								<Link href={"/login"} className='max-w-max'>
									<Image src='/logo.svg' width={20} height={20} alt='Logo' />
									Log in to explore
								</Link>
							</Button>
						) : (
							<Button
								asChild
								className='mt-4 bg-[#3d405b] hover:bg-[#2a2c3e] text-white flex items-center rounded-lg gap-2 mx-auto md:mx-0'
							>
								<Link href={"/chat"} className='max-w-max'>
									<Image src='/logo.svg' width={20} height={20} alt='Logo' />
									Start chatting
								</Link>
							</Button>
						)}
					</div>
					<div className='flex-1 md:w-full md:flex justify-center'>
						<div className="relative group">
							<div className="absolute -inset-1 bg-gradient-to-r from-[#e07a5f] to-[#3d405b] rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
							<Image 
								alt='Islamic Architecture' 
								width={651} 
								height={621} 
								src='https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop' 
								className="rounded-2xl shadow-2xl relative"
							/>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

// STARTER CODE FOR THIS FILE. TimeStamp to paste this code => 00:34:35
{
	/* <main className='flex flex-1 flex-col md:flex-row items-center justify-center px-8 mt-4'>
	<div className='flex-1 md:text-left text-center h-full'>
		<h1 className='text-4xl md:text-6xl font-bold'>SnapNext 4 programmers!</h1>
		<p className='mt-4 text-xl font-semibold'>
			Share your code with your friends to get feedback and improve your code.
		</p>
		<div className='mt-4'>
			<p className='mt-2 text-lg font-semibold'>What are you waiting for?</p>
		</div>
		{true ? (
			<Button
				asChild
				className='mt-4 bg-black text-white flex items-center rounded-lg gap-2 mx-auto md:mx-0'
			>
				<Link href={"/login"} className='max-w-max'>
					<Image src='/logo.svg' width={20} height={20} alt='Snapchat logo' />
					Log in to explore
				</Link>
			</Button>
		) : (
			<Button
				asChild
				className='mt-4 bg-black text-white flex items-center rounded-lg gap-2 mx-auto md:mx-0'
			>
				<Link href={"/chat"} className='max-w-max'>
					<Image src='/logo.svg' width={20} height={20} alt='Snapchat logo' />
					Start chatting
				</Link>
			</Button>
		)}
	</div>
	<div className='flex-1 md:w-full md:flex'>
		<Image alt='Avatar' width={651} height={621} src='/hero.png' />
	</div>
</main> */
}
