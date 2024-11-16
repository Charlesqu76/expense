/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheMaxMemorySize: 0,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/expense",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
