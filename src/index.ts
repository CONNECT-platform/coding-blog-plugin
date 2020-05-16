import { ConfigOverride } from '@codedoc/core';

import { Author, Big, Hero, PageHead, Space } from './components';
import { addGitHubConfig, addSource } from './post';


export function codingBlog() {
  return function(): ConfigOverride {
    return {
      markdown: {
        customComponents:  {
          Author, Big, Hero, PageHead, Space
        }
      },
      page: {
        post: [addGitHubConfig(), addSource()]
      }
    }
  }
}
