import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  template: `
    <div class="text-center mb-12">
      <h2 class="text-3xl sm:text-4xl font-bold text-slate-900">{{ title() }}</h2>
      @if (subtitle()) {
        <p class="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">{{ subtitle() }}</p>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeaderComponent {
  title = input.required<string>();
  subtitle = input<string>('');
}
