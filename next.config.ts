import type { NextConfig } from "next";

// This portfolio has moved. Send every visitor to the new site.
const NEW_SITE = "https://portfolio-v3-nine-hazel.vercel.app";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old project pages use different IDs, so send them to the new work index.
      { source: "/projects/:path*", destination: `${NEW_SITE}/work`, permanent: true },
      { source: "/:path*", destination: `${NEW_SITE}/:path*`, permanent: true },
    ];
  },
};

export default nextConfig;
