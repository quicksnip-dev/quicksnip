export type ExtensionType = {
  icon: string;
  name: string;
  description: string;
  guide_url: string;
  source_url: string;
  downloads: number;
};

export type SnippetType = {
  id: string;
  category: string;
  title: string;
  description: string;
  languages: string[];
  contributors: string[];
  tags: string[];
};
