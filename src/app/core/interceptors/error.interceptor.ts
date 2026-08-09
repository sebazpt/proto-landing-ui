import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let message = 'An unexpected error occurred.';

      switch (error.status) {
        case 0:
          message = 'Unable to connect to the server. Please check your connection.';
          break;
        case 404:
          message = 'The requested resource was not found.';
          break;
        case 500:
          message = 'An internal server error occurred. Please try again later.';
          break;
      }

      console.error(`HTTP Error ${error.status}: ${message}`, error);
      return throwError(() => error);
    }),
  );
};
