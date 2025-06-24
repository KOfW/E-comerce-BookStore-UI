import { useState } from 'react';
import type { ContactFormData } from '../../types/contact';
import { sendContactForm } from './contactService';
import Button from '../../components/Button/Button';

const ContactForm = () => {
  const [form, setForm] = useState<ContactFormData>({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendContactForm(form);
    alert('Message sent!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Your name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <textarea name="message" placeholder="Message" onChange={handleChange} />
      <Button text="Send" />
    </form>
  );
};
export default ContactForm;