/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [{
            hostname: "imgs.xkcd.com"
        }],
        unoptimized: true,
    },
    output: "export",
    basePath: "/inno-fwd-2024",
};

export default nextConfig;
