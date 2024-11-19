/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // Für Cloud Run nötig
  reactStrictMode: true, // Optional, für bessere Entwicklungserfahrung
};

export default nextConfig;
