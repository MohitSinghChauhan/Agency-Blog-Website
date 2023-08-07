/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['images.pexels.com', 'source.unsplash.com'],
	},
	experimental: {
		appDir: true,
		serverComponentsExternalPackages: ['mongoose'],
	},
};

module.exports = nextConfig;
