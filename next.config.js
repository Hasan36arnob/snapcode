/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
			},
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
			{
				protocol: "https",
				hostname: "www.transparenttextures.com",
			},
			{
				protocol: "https",
				hostname: "questhowth.ie",
			},
		],
	},
};

module.exports = nextConfig;
