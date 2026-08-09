import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PortfolioItem } from '../../../../core/models/portfolio.model';
import { TruncatePipe } from '../../../../shared/pipes/truncate.pipe';

@Component({
  selector: 'app-portfolio-card',
  template: `
    <article class="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
      <div class="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
        <svg class="w-16 h-16 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <div class="p-5">
        <h3 class="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
          {{ item().title }}
        </h3>
        <p class="mt-2 text-sm text-slate-600">{{ item().description | truncate:120 }}</p>
        <div class="mt-3 flex flex-wrap gap-2">
          @for (tag of item().tags; track tag) {
            <span class="px-2 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded">
              {{ tag }}
            </span>
          }
        </div>
        <div class="mt-4 flex gap-3">
          @if (item().projectUrl) {
            <a
              [href]="item().projectUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
              Live Demo &rarr;
            </a>
          }
          @if (item().repositoryUrl) {
            <a
              [href]="item().repositoryUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors">
              Source Code
            </a>
          }
        </div>
      </div>
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TruncatePipe],
})
export class PortfolioCardComponent {
  item = input.required<PortfolioItem>();
}
