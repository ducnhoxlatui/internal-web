import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		mdxRs: true,
	},
	images: {
		domains: ['photos.google.com', 'lh3.googleusercontent.com'],
	  },
};

export default withContentlayer(nextConfig);
