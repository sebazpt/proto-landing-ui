export interface PortfolioItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly imageUrl: string;
  readonly tags: readonly string[];
  readonly projectUrl?: string;
  readonly repositoryUrl?: string;
}
