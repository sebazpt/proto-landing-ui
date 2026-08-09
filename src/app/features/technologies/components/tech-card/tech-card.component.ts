import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Technology } from '../../../../core/models/technology.model';

@Component({
  selector: 'app-tech-card',
  template: `
    <div class="flex flex-col items-center p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all">
      <span class="text-3xl" role="img" [attr.aria-label]="tech().name">{{ tech().icon }}</span>
      <span class="mt-2 text-sm font-medium text-slate-700">{{ tech().name }}</span>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechCardComponent {
  tech = input.required<Technology>();
}
