/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [{
            hostname: "imgs.xkcd.com"
        }],
    }
};

export default nextConfig;
