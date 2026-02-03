import type { NextConfig } from "next";
import path from "path";
const nextConfig: NextConfig = {
  /* config options here */
    env: {
        NEXT_PUBLIC_MOCK_API_URL: ''
    },
    sassOptions: {
        includePaths: [
            path.join(process.cwd(), "src"),          // your src directory (optional)
            path.join(process.cwd(), "node_modules"), // 👈 add this line
        ],
    },
};


export default nextConfig;
