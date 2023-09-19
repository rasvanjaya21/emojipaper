/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/rasvanjaya21/emojipapers/master/Emojis/**',
            },
        ],
    },
}

module.exports = nextConfig