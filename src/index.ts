import { ConfigOverride } from '@codedoc/core';

import { countCards$, countCards } from './components/article-card/count-cards';
import { Author, ArticleCard, Big, Hero, Title, Space, Watermark } from './components';
import { addGitHubConfig, addSource, addStyles, addTwitterMeta, addOGMeta } from './post';


export interface CodingBlogPluginOptions {
  assets?: string[];
}


export function codingBlog(options?: CodingBlogPluginOptions) {
  return function(): ConfigOverride {
    return {
      markdown: {
        customComponents:  {
          Author, ArticleCard, Big, Hero, Title, Space, Watermark
        }
      },
      bundle: {
        init: [countCards$]
      },
      page: {
        post: [
          addGitHubConfig(),
          addSource(),
          addStyles(),
          addTwitterMeta(),
          addOGMeta(),
        ]
      },
      misc: {
        coding_blog: {
          assets: options?.assets || []
        }
      }
    }
  }
}
