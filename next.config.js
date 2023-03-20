// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  staticPageGenerationTimeout: 300,
  images: {
    domains: [
      'www.notion.so',
      'notion.so',
      'images.unsplash.com',
      'pbs.twimg.com',
      'abs.twimg.com',
      's3.us-west-2.amazonaws.com',
      'transitivebullsh.it'
    ],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'notion-client': '@billq/notion-client',
      'notion-utils': '@billq/notion-utils',
      'notion-type': '@billq/notion-type',
      'react-notion-x': '@billq/react-notion-x'
    }
    return config
  }
})
