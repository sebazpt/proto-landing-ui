import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeaderComponent],
})
export class AboutComponent {
  readonly highlights = [
    'Angular',
    'Spring Boot',
    'TypeScript',
    'Cloud Native',
    'DevOps',
    'Clean Architecture',
  ] as const;
}
