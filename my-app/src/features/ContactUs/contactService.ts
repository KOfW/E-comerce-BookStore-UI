import type { ContactFormData } from '../../types/contact';

export const sendContactForm = async (data: ContactFormData) => {
  console.log('Sending contact:', data);
  return new Promise((resolve) => setTimeout(resolve, 1000));
};