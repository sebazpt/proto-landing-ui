import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from '../../features/hero/hero.component';
import { AboutComponent } from '../../features/about/about.component';
import { PortfolioComponent } from '../../features/portfolio/portfolio.component';
import { TechnologiesComponent } from '../../features/technologies/technologies.component';
import { ContactComponent } from '../../features/contact/contact.component';

@Component({
  selector: 'app-home',
  template: `
    <app-hero />
    <app-about />
    <app-portfolio />
    <app-technologies />
    <app-contact />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeroComponent,
    AboutComponent,
    PortfolioComponent,
    TechnologiesComponent,
    ContactComponent,
  ],
})
export class HomeComponent {}
