import type { NextConfig } from "next";

// Security headers for best practices
const securityHeaders = [
  {
    // Prevent clickjacking attacks
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    // Prevent MIME type sniffing
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    // Control referrer information
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    // Disable unnecessary browser features
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  {
    // Legacy XSS protection for older browsers
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
];

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  // Inline CSS into the HTML to eliminate render-blocking stylesheet requests
  experimental: {
    inlineCss: true,
  },
  
  // Add security headers to all routes
  async headers() {
    return [
      {
        // Apply to all routes
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },

  // 301 redirects for broken/legacy URLs
  async redirects() {
    return [
      {
        source: '/radv-audit-readiness-what-compliance-teams-should-ask-their-vendors',
        destination: '/resources/blog/radv-audit-readiness-what-compliance-teams-should-ask-their-vendors',
        permanent: true,
      },
      {
        source: '/resources/radv-audit-readiness-what-compliance-teams-should-ask-their-vendors',
        destination: '/resources/blog/radv-audit-readiness-what-compliance-teams-should-ask-their-vendors',
        permanent: true,
      },
      {
        source: '/blog/radv-audit-readiness-what-compliance-teams-should-ask-their-vendors',
        destination: '/resources/blog/radv-audit-readiness-what-compliance-teams-should-ask-their-vendors',
        permanent: true,
      },
      {
        source: '/how-healthcare-specific-language-models-are-transforming-hedis',
        destination: '/resources/blog/how-healthcare-specific-language-models-are-transforming-hedis',
        permanent: true,
      },
      {
        source: '/resources/how-healthcare-specific-language-models-are-transforming-hedis',
        destination: '/resources/blog/how-healthcare-specific-language-models-are-transforming-hedis',
        permanent: true,
      },
      {
        source: '/blog/how-healthcare-specific-language-models-are-transforming-hedis',
        destination: '/resources/blog/how-healthcare-specific-language-models-are-transforming-hedis',
        permanent: true,
      },
      {
        source: '/radv-audit-readiness-for-health-plans',
        destination: '/resources/blog/radv-audit-readiness-for-health-plans',
        permanent: true,
      },
      {
        source: '/resources/radv-audit-readiness-for-health-plans',
        destination: '/resources/blog/radv-audit-readiness-for-health-plans',
        permanent: true,
      },
      {
        source: '/blog/radv-audit-readiness-for-health-plans',
        destination: '/resources/blog/radv-audit-readiness-for-health-plans',
        permanent: true,
      },
      {
        source: '/solutions',
        destination: '/solutions/radv',
        permanent: true,
      },
      {
        source: '/radv',
        destination: '/solutions/radv',
        permanent: true,
      },
      {
        source: '/prospective-risk-adjustment',
        destination: '/solutions/prospective-risk-adjustment',
        permanent: true,
      },
      {
        source: '/retrospective-risk-adjustment',
        destination: '/solutions/retrospective-risk-adjustment',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/resources/blog',
        permanent: true,
      },
      {
        source: '/resources',
        destination: '/resources/blog',
        permanent: true,
      },
      {
        source: '/author',
        destination: '/resources/blog',
        permanent: true,
      },
      {
        source: '/hasham-ul-haq',
        destination: '/author/hasham-ul-haq',
        permanent: true,
      },
      {
        source: '/ritwik-jain',
        destination: '/author/ritwik-jain',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

