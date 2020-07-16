import { ConfigOverride } from '@codedoc/core';

import { countCards$ } from './components/article-card/count-cards';
import { Author, ArticleCard, Big, Hero, Title, Space, Watermark, Tag } from './components';
import { addGitHubConfig, addSource, addStyles, addTwitterMeta, addOGMeta } from './post';
import { PartialFeedConfig, feed } from './feed';
import { addTagMeta } from './components/tag/post';


export interface CodingBlogPluginOptions {
  assets?: string[];
  feed?: PartialFeedConfig,
}


export function codingBlog(options?: CodingBlogPluginOptions) {
  return function(): ConfigOverride {
    const _feed = options?.feed ? feed(options.feed) : undefined;
    return {
      markdown: {
        customComponents:  {
          Author, ArticleCard, Big, Hero, Title, Space, Watermark
        },
        customInlineComponents: {
          Tag
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
          addTagMeta(),
          ..._feed ? [_feed.collect] : []
        ]
      },
      afterBuild: _feed ? [_feed.save] : undefined,
      misc: {
        coding_blog: {
          assets: options?.assets || []
        }
      }
    }
  }
}
