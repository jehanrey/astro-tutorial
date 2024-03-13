export type FrontMatter = {
  title: string;
  pubDate: string;
  author: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
  tags: Array<string>;
};
