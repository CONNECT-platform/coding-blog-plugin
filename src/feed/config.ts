import { CodedocConfig } from "@codedoc/core";


export interface FeedConfig {
  url: string;
  title: string;
}


export interface PartialConfig extends Partial<FeedConfig> {
  url: string;
}


export function fill(given: PartialConfig, codedocConf: CodedocConfig): FeedConfig {
  return {
    ...given,
    title: given.title || codedocConf.page.title.base,
  };
}
