import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "dronexa.ie",
          },
        ],
        destination: "https://www.dronexa.ie/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
