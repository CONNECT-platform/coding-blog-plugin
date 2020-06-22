
import { configuration } from '@codedoc/core';

import { theme } from './theme';

import { codingBlog } from '../src/internal';


export const config = /*#__PURE__*/configuration({
  theme,
  dest: {
    namespace: '/coding-blog-plugin',
    html: 'dist',
    assets: process.env.GITHUB_BUILD === 'true' ? 'dist' : '.',
    bundle: process.env.GITHUB_BUILD === 'true' ? 'bundle' : 'dist/bundle',
    styles: process.env.GITHUB_BUILD === 'true' ? 'styles' : 'dist/styles',
  },
  page: {
    title: {
      base: 'Coding Blog Plugin'
    }
  },
  plugins: [codingBlog({
    feed: {
      url: 'https://connect-platform.github.io'
    }
  })],
  misc: {
    github: {
      user: 'CONNECT-platform',
      repo: 'coding-blog-plugin',
    }
  },
});
