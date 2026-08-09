export interface ContactForm {
  readonly name: string;
  readonly email: string;
  readonly message: string;
}

export interface ContactResponse {
  readonly success: boolean;
  readonly message: string;
}
