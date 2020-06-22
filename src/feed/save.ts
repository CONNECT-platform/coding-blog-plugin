import { Feed } from 'feed';
import { Item } from 'feed/src/typings';
import { join } from 'path';
import { CodedocConfig, Build } from '@codedoc/core';
import { writeFile } from 'rxline/fs';

import { fill, PartialConfig } from './config';


export function save(config: PartialConfig, items: Item[]) {
  return async function saveFeed(build: Build<CodedocConfig>) {
    const conf = fill(config, build.config);

    const feed = new Feed({
      title: conf.title,
      copyright: '',
      id: conf.url + build.config.dest.namespace,
      link: conf.url + build.config.dest.namespace,
      favicon: build.config.dest.namespace + build.config.page.favicon,
    });

    items.forEach(item => feed.addItem(item));

    await Promise.all([
      writeFile()({
        root: build.config.dest.html,
        path: '_feed.rss',
        content: feed.rss2()
      }),
      writeFile()({
        root: build.config.dest.html,
        path: '_feed.atom',
        content: feed.atom1()
      }),
      writeFile()({
        root: build.config.dest.html,
        path: '_feed.json',
        content: feed.json1()
      }),
    ]);
  }
}
