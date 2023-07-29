/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.pravatar.cc",
                port: "",
                pathname: "",
            },
        ],
    },
};

module.exports = nextConfig;
