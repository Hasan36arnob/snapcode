import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarImage } from "../ui/avatar";
import { formatDate } from "@/lib/utils";
import { ImageMessageSvg, TextMessageSent, TextMessageSvgReceived } from "../svgs/chatSvg";

type ChatProps = {
	chat: any;
};

const Chat = ({ chat }: ChatProps) => {
	const userToChat = chat.participants[0];
	const lastMessage = chat.lastMessage;
	const lastMessageType = lastMessage?.messageType;
	const formattedDate = lastMessage ? formatDate(lastMessage?.createdAt!) : formatDate(new Date());
	const amISender = lastMessage && lastMessage.sender._id !== userToChat?._id;
	const isMsgOpened = lastMessage?.opened;

	let messageStatus: string;
	let iconComponent: JSX.Element;

	if (amISender) {
		messageStatus = isMsgOpened ? "Opened" : "Sent";
		iconComponent =
			lastMessageType === "text" ? (
				<TextMessageSent className={isMsgOpened ? "text-sigSnapChat " : "text-sigSnapChat fill-current"} />
			) : (
				<ImageMessageSvg className={isMsgOpened ? "text-sigSnapImg" : "text-sigSnapImg fill-current"} />
			);
	} else {
		if (!lastMessage) {
			iconComponent = <TextMessageSvgReceived className='fill-current' />;
			messageStatus = "Say Hi!";
		} else {
			messageStatus = isMsgOpened ? "Received" : "Show Message";
			iconComponent =
				lastMessageType === "text" ? (
					<TextMessageSvgReceived
						className={!isMsgOpened ? "text-sigSnapChat fill-current" : "text-sigSnapChat"}
					/>
				) : (
					<ImageMessageSvg className={!isMsgOpened ? "text-sigSnapImg fill-current" : "text-sigSnapImg"} />
				);
		}
	}

	return (
		<Link href={`/chat/${userToChat?._id}`}>
			<li className='flex items-center p-3 bg-transparent hover:bg-[#f4f1de]/5 cursor-pointer border-b border-[#f4f1de]/5 transition-colors'>
				<Avatar className='w-12 h-12 bg-[#f4f1de]/10 border border-[#f4f1de]/20'>
					<AvatarImage
						src={
							userToChat?.avatar ||
							"https://questhowth.ie/wp-content/uploads/2018/04/user-placeholder.png"
						}
					/>
				</Avatar>

				<div className='ml-3'>
					<p className="font-semibold text-[#f4f1de]">{userToChat?.fullName}</p>
					<div className='text-[#f4f1de]/50 text-xs flex items-center gap-1.5 mt-0.5'>
						<span className="opacity-70">{iconComponent}</span>
						<span>{messageStatus}</span>
						<span className="opacity-30">•</span>
						<span>{formattedDate}</span>
					</div>
				</div>
				<div className="ml-auto opacity-40 hover:opacity-100 transition-opacity">
					<Image
						src={"/camera.svg"}
						height={20}
						width={20}
						alt='Camera Icon'
						className="filter invert"
					/>
				</div>
			</li>
		</Link>
	);
};
export default Chat;

// STARTER CODE FOR THIS FILE. TimeStamp to paste this code => 02:39:13
{
	/* <Link href={`/chat/${userToChat?._id}`}>
<li className='flex items-center p-2  bg-sigSurface hover:bg-sigBackgroundFeedHover cursor-pointer border-b border-b-sigColorBgBorder'>
  <Avatar className='w-14 h-14 bg-black'>
    <AvatarImage
      src={
        userToChat?.avatar ||
        "https://questhowth.ie/wp-content/uploads/2018/04/user-placeholder.png"
      }
    />
  </Avatar>

  <div className='ml-3'>
    <p>{userToChat?.fullName}</p>
  </div>
  <Image
    src={"/camera.svg"}
    height={0}
    width={0}
    style={{ width: "20px", height: "auto" }}
    className='ml-auto hover:scale-95 '
    alt='Camera Icon'
  />
</li>
</Link> */
}
