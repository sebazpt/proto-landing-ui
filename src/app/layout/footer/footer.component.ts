import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ScrollService } from '../../core/services/scroll.service';
import { SocialLinksComponent } from '../../shared/components/social-links/social-links.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SocialLinksComponent],
})
export class FooterComponent {
  private readonly scrollService = inject(ScrollService);

  readonly currentYear = new Date().getFullYear();

  onBackToTop(): void {
    this.scrollService.scrollToTop();
  }
}
