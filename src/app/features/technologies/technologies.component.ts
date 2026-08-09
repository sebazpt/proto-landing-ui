import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { Technology } from '../../core/models/technology.model';
import { TechCardComponent } from './components/tech-card/tech-card.component';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TechCardComponent, SectionHeaderComponent],
})
export class TechnologiesComponent {
  readonly technologies = signal<Technology[]>([
    { name: 'Angular', icon: '🅰️', category: 'frontend' },
    { name: 'TypeScript', icon: '🔷', category: 'frontend' },
    { name: 'Tailwind CSS', icon: '🎨', category: 'frontend' },
    { name: 'RxJS', icon: '🔄', category: 'frontend' },
    { name: 'Spring Boot', icon: '🍃', category: 'backend' },
    { name: 'Java', icon: '☕', category: 'backend' },
    { name: 'Python', icon: '🐍', category: 'backend' },
    { name: 'PostgreSQL', icon: '🐘', category: 'backend' },
    { name: 'Docker', icon: '🐳', category: 'devops' },
    { name: 'Kubernetes', icon: '☸️', category: 'devops' },
    { name: 'GitHub Actions', icon: '⚙️', category: 'devops' },
    { name: 'Git', icon: '📦', category: 'tools' },
    { name: 'VS Code', icon: '💻', category: 'tools' },
    { name: 'Figma', icon: '🎯', category: 'tools' },
  ]);

  readonly categories = ['frontend', 'backend', 'devops', 'tools'] as const;

  readonly categoryLabels: Record<string, string> = {
    frontend: 'Frontend',
    backend: 'Backend',
    devops: 'DevOps',
    tools: 'Tools',
  };

  readonly groupedTechnologies = computed(() => {
    const techs = this.technologies();
    return this.categories.map(category => ({
      category,
      label: this.categoryLabels[category],
      items: techs.filter(t => t.category === category),
    }));
  });
}
