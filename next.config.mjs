/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: false,
  images: { unoptimized: true },
  // The Vercel project still has the EmailJS values under their old Create React App names.
  // Prefer the NEXT_PUBLIC_ names; fall back to the old ones so the form works either way.
  env: {
    NEXT_PUBLIC_EMAILJS_SERVICE_ID:
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? process.env.REACT_APP_EMAILJS_SERVICE_ID ?? '',
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID:
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? process.env.REACT_APP_EMAILJS_TEMPLATE_ID ?? '',
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY:
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? process.env.REACT_APP_EMAILJS_PUBLIC_KEY ?? '',
  },
};

export default nextConfig;
