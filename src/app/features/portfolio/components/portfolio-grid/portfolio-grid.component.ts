import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PortfolioItem } from '../../../../core/models/portfolio.model';
import { PortfolioCardComponent } from '../portfolio-card/portfolio-card.component';

@Component({
  selector: 'app-portfolio-grid',
  template: `
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      @for (item of items(); track item.id) {
        <app-portfolio-card [item]="item" />
      } @empty {
        <p class="col-span-full text-center text-slate-500 py-8">
          No portfolio items available yet.
        </p>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PortfolioCardComponent],
})
export class PortfolioGridComponent {
  items = input.required<PortfolioItem[]>();
}
