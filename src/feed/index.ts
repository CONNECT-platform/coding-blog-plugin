import { Item } from 'feed/src/typings';

import { collect } from './collect';
import { save } from './save';
import { PartialConfig } from './config';


export function feed(config: PartialConfig) {
  const items: Item[] = [];

  return {
    collect: collect(config, item => items.push(item)),
    save: save(config, items),
  }
}


export { PartialConfig as PartialFeedConfig };
