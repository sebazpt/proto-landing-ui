import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  template: `
    <section class="min-h-screen flex items-center justify-center pt-16">
      <div class="text-center">
        <h1 class="text-6xl font-bold text-slate-300">404</h1>
        <p class="mt-4 text-xl text-slate-600">Page not found</p>
        <a routerLink="/" class="mt-6 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
          Back to Home
        </a>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
})
export class NotFoundComponent {}
