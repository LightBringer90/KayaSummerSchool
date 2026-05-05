/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [{ source: "/", destination: "/ro", permanent: false }];
  },
};

module.exports = nextConfig;
