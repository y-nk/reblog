/* eslint-disable import/no-anonymous-default-export */

import { nextPayload } from 'unified-loader'

import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

export default {
  // pageExtensions: ["ts", "tsx", "md", "mdx"], no! otherwise mdx imports won't follow.
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['vscode-oniguruma'],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: [{
        loader: 'unified-loader',
        options: {
          createPayload: nextPayload(),
          remarkPlugins: [remarkFrontmatter],
        }
      }],
    }, {
      test: /\.mdx$/,
      use: [{
        loader: '@mdx-js/loader',
        options: {
          remarkPlugins: [
            remarkFrontmatter,
            [remarkMdxFrontmatter, { name: 'metadata' }],
          ],
        },
      }]
    })

    return config
  }
}
