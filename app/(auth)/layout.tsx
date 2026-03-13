import Image from "next/image";
import Link from "next/link";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='bg-[#f4f1de] relative overflow-hidden'>
			<div 
				className="absolute inset-0 opacity-[0.03] pointer-events-none"
				style={{
					backgroundImage: `url("https://www.transparenttextures.com/patterns/islamic-art.png")`,
					backgroundRepeat: 'repeat',
				}}
			/>
			<div className='flex flex-col items-center justify-center min-h-screen relative z-10'>
				<div className='p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl min-w-80 border border-[#3d405b]/10'>
					<Link href={"/"} className='flex justify-center mb-6'>
						<Image src={"/logo.svg"} width={40} height={40} alt='logo' />
					</Link>

					{children}
				</div>
			</div>
		</div>
	);
};
export default AuthLayout;
