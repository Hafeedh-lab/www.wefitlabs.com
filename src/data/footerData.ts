export interface FooterLink {
  readonly id: string;
  readonly text: string;
  readonly href: string;
}

export const footerLinks: FooterLink[] = [
  { id: 'terms', text: 'Terms of Service', href: './terms-of-service' },
  { id: 'privacy', text: 'Privacy Policy', href: './privacy-policy' },
  { id: 'brand', text: 'Brand Kit', href: "https://drive.google.com/file/d/1EekT2fFjEqWdus-NCVztmMr7KK-2ybG4/view?usp=drive_link" }
] as const;
