import { ApiResponse, DemoFormData, NewsletterFormData } from '../types';

/**
 * Service layer simulating asynchronous backend API responses with input validation.
 */
export const ApiService = {
  /**
   * Submit Demo Request Form
   */
  async submitDemoRequest(data: DemoFormData): Promise<ApiResponse> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (!data.email || !data.email.includes('@')) {
      return {
        success: false,
        message: 'Validation failed',
        errors: { email: 'Please enter a valid email address.' },
      };
    }

    if (!data.fullName.trim()) {
      return {
        success: false,
        message: 'Validation failed',
        errors: { fullName: 'Full name is required.' },
      };
    }

    return {
      success: true,
      message: 'Thank you! Your demo request has been submitted successfully.',
    };
  },

  /**
   * Subscribe to Newsletter
   */
  async subscribeNewsletter(data: NewsletterFormData): Promise<ApiResponse> {
    await new Promise((resolve) => setTimeout(resolve, 600));

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        message: 'Invalid email address provided.',
      };
    }

    return {
      success: true,
      message: 'Subscribed successfully! Check your inbox for updates.',
    };
  },
};
