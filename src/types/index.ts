// Application Type Definitions

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export interface ClientLogo {
  id: string;
  name: string;
  logoUrl: string;
  altText: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  iconName: 'members' | 'associations' | 'clubs';
}

export interface StatItem {
  id: string;
  count: number;
  formattedCount: string;
  label: string;
  iconName: 'members' | 'clubs' | 'bookings' | 'payments';
}

export interface BlogPost {
  id: string;
  title: string;
  imageUrl: string;
  readMoreUrl: string;
}

export interface TestimonialData {
  quote: string;
  author: string;
  role: string;
  organization: string;
  avatarUrl: string;
  clientLogos: ClientLogo[];
}

export interface DemoFormData {
  fullName: string;
  email: string;
  organizationName: string;
  organizationSize: string;
  message?: string;
}

export interface NewsletterFormData {
  email: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string>;
}
