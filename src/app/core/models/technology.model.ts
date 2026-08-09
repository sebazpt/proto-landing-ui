export interface Technology {
  readonly name: string;
  readonly icon: string;
  readonly category: 'frontend' | 'backend' | 'devops' | 'tools';
}
