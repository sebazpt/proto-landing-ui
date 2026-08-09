import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { PortfolioApiService } from '../../core/services/portfolio-api.service';
import { PortfolioGridComponent } from './components/portfolio-grid/portfolio-grid.component';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PortfolioGridComponent, SectionHeaderComponent],
})
export class PortfolioComponent implements OnInit {
  protected readonly portfolioService = inject(PortfolioApiService);

  ngOnInit(): void {
    this.portfolioService.getAll().subscribe();
  }
}
