import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap, finalize, throwError } from 'rxjs';
import { ContactForm, ContactResponse } from '../models/contact.model';
import { environment } from '../config/environment';

@Injectable({ providedIn: 'root' })
export class ContactApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/contact`;

  readonly isSubmitting = signal(false);
  readonly submitSuccess = signal(false);
  readonly error = signal<string | null>(null);

  submit(form: ContactForm): Observable<ContactResponse> {
    this.isSubmitting.set(true);
    this.submitSuccess.set(false);
    this.error.set(null);

    return this.http.post<ContactResponse>(this.baseUrl, form).pipe(
      tap(response => {
        if (response.success) {
          this.submitSuccess.set(true);
        } else {
          this.error.set(response.message);
        }
      }),
      catchError(err => {
        this.error.set('Failed to send message. Please try again later.');
        console.error('ContactApiService.submit error:', err);
        return throwError(() => err);
      }),
      finalize(() => this.isSubmitting.set(false)),
    );
  }

  reset(): void {
    this.isSubmitting.set(false);
    this.submitSuccess.set(false);
    this.error.set(null);
  }
}
