import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly scrollService = inject(ScrollService);

  readonly isMobileMenuOpen = signal(false);

  readonly navLinks = [
    { label: 'Hero', sectionId: 'hero' },
    { label: 'About', sectionId: 'about' },
    { label: 'Portfolio', sectionId: 'portfolio' },
    { label: 'Technologies', sectionId: 'technologies' },
    { label: 'Contact', sectionId: 'contact' },
  ] as const;

  onNavigate(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);
    this.isMobileMenuOpen.set(false);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(open => !open);
  }
}
