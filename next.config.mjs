/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Протокол вашего хостинга
        hostname: 'res.cloudinary.com',
        pathname: '/dhltb1kcr/**', // Ваш путь к изображениям
      },
    ],
  },
};

export default nextConfig;
