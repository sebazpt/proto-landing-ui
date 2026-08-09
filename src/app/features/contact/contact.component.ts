import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactApiService } from '../../core/services/contact-api.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, SectionHeaderComponent],
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  protected readonly contactService = inject(ContactApiService);

  readonly contactForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formValue = this.contactForm.getRawValue();
      this.contactService.submit(formValue).subscribe({
        next: () => this.contactForm.reset(),
        error: () => {},
      });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  hasError(field: string, error: string): boolean {
    const control = this.contactForm.get(field);
    return !!control?.hasError(error) && !!control?.touched;
  }
}
