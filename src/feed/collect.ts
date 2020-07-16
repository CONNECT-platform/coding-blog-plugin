import git from 'simple-git';
import { parse, join } from 'path';
import { Item } from 'feed/src/typings';
import { Compiled } from '@connectv/sdh';
import { CodedocConfig } from '@codedoc/core';
import { File } from 'rxline/fs';

import { PartialConfig } from './config';


export function collect(conf: PartialConfig, add: (item: Item) => void) {
  return async (html: HTMLDocument, file: File<Compiled>, config: CodedocConfig) => {
    if (file.path === '404.md' || file.path === 'index.md' || conf.exclude && conf.exclude.includes(file.path)) {
      return;
    }
    const url = `${conf.url}${config.dest.namespace}/${
      file.path.substr(0, file.path.length - parse(file.path).ext.length)
    }`;

    let title = '';
    let description = '';
    let image = '';
    let content = '';
    let candidate$: HTMLElement | null;

    if (candidate$ = html.head.querySelector('meta[property="og:title"]')) {
      title = candidate$.getAttribute('content') || '';
    } else if (candidate$ = html.head.querySelector('title')) {
      title = candidate$.textContent || '';
    }

    if (candidate$ = html.head.querySelector('meta[property="og:description"],meta[name="description"]')) {
      description = candidate$.getAttribute('content') || 'No description';
    }

    if (candidate$ = html.head.querySelector('meta[property="og:image"]')) {
      image = candidate$.getAttribute('content') || '';
    }

    if (candidate$ = html.body.querySelector('#-codedoc-container p')) {
      content = (candidate$.textContent || '') + ' ...';
    }

    const commits = await git().log({ file: join(file.root, file.path)});
    const first = commits.all[commits.all.length - 1];
    const authors: {name: string, email: string}[] = [];
    commits.all.forEach(commit => {
      if (!authors.find(author => author.email === commit.author_email))
        authors.push({
          name: commit.author_name,
          email: commit.author_email,
        });
    });

    add({
      link: url,
      id: url,
      title,
      description,
      image,
      date: commits && commits.latest ? new Date(commits?.latest?.date) : new Date(),
      published: first ? new Date(first.date) : new Date(),
      author: authors.length === 0? [{name: 'Anonymous', email: 'unknown'}]: authors,
      content,
    });
  }
}
