'use client';

import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { SITE } from '@/lib/site';

type Values = { name: string; email: string; subject: string; message: string; website: string };
type Status = 'idle' | 'sending' | 'sent' | 'error';

const field =
  'w-full rounded-xl border border-border bg-surface px-4 py-3 text-text placeholder:text-text-secondary/70 focus:border-primary';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Values>();

  const onSubmit = async (v: Values) => {
    if (v.website) return; // honeypot: real people leave this empty
    const service = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const template = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const key = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (!service || !template || !key) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    try {
      await emailjs.send(
        service,
        template,
        { from_name: v.name, from_email: v.email, subject: v.subject, message: v.message },
        { publicKey: key },
      );
      setStatus('sent');
      reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-bold">
            Name
          </label>
          <input id="name" autoComplete="name" className={field} {...register('name', { required: 'Please enter your name' })} />
          {errors.name && <p role="alert" className="mt-1 text-sm text-expense">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-bold">
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={field}
            {...register('email', {
              required: 'Please enter your email',
              pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email address' },
            })}
          />
          {errors.email && <p role="alert" className="mt-1 text-sm text-expense">{errors.email.message}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="mb-1 block text-sm font-bold">
          Subject
        </label>
        <input id="subject" className={field} {...register('subject', { required: 'Please add a subject' })} />
        {errors.subject && <p role="alert" className="mt-1 text-sm text-expense">{errors.subject.message}</p>}
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-bold">
          Message
        </label>
        <textarea
          id="message"
          rows={6}
          className={field}
          {...register('message', {
            required: 'Please write a message',
            minLength: { value: 10, message: 'A little more detail, please' },
          })}
        />
        {errors.message && <p role="alert" className="mt-1 text-sm text-expense">{errors.message.message}</p>}
      </div>

      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input tabIndex={-1} autoComplete="off" {...register('website')} />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="rounded-full bg-primary px-7 py-3 font-bold text-on-primary hover:opacity-90 disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending...' : 'Send message'}
      </button>

      <div aria-live="polite">
        {status === 'sent' && <p className="font-bold text-income">Thanks, your message was sent.</p>}
        {status === 'error' && (
          <p className="font-bold text-expense">
            Sorry, that did not send. Please email {SITE.email} instead.
          </p>
        )}
      </div>
    </form>
  );
}
