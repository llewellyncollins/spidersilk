import React, { useState } from 'react';
import { firestore, analytics } from '../../localFirebase';
import './contactForm.scss';

interface IFormData {
    value: string;
    error: string;
}

const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

export default function ContactForm() {
    const [email, setEmail] = useState<IFormData>({
        value: '',
        error: '',
    });
    const [query, setQuery] = useState<IFormData>({
        value: '',
        error: '',
    });
    const [hasError, setHasError] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const hasAnyError = hasError || email.value === '' || query.value === '';

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsComplete(false);
        setHasError(false);

        analytics.logEvent('form_submission_attempt');
        if (!email.value) {
            analytics.logEvent('form_submission_attempt_empty_email');
            setEmail({ value: email.value, error: 'Please enter an email address.' });
            return;
        }

        if (!validateEmail(email.value)) {
            analytics.logEvent('form_submission_attempt_invalid_email', { email: email.value });
            setEmail({ value: email.value, error: 'Please enter a valid email address.' });
            return;
        }

        if (!query.value) {
            analytics.logEvent('form_submission_attempt_empty_body');
            setQuery({ value: query.value, error: 'Please enter your query so we can better help you.' });
            return;
        }

        setIsPending(true);

        analytics.logEvent('form_submission');
        firestore
            .collection('enquiries')
            .add({
                email: email.value,
                body: query.value,
            })
            .then(() => {
                analytics.logEvent('form_submission_success');
                setIsComplete(true);
            })
            .catch(() => {
                analytics.logEvent('form_submission_failed');
                setHasError(true);
            })
            .finally(() => {
                setEmail({
                    value: '',
                    error: '',
                });
                setQuery({
                    value: '',
                    error: '',
                });
                setIsPending(false);
            });
    };

    return (
        <form className='contact-form container' onSubmit={(e) => handleSubmit(e)} action='#'>
            <h1 className='contact-form__header'>Get in touch!</h1>

            {hasError && (
                <div className='contact-form__error'>
                    Something has gone wrong! We are unable to submit you enquiry at this moment. Please try again later.
                </div>
            )}

            {isComplete && (
                <div className='contact-form__success'>Thank you for submitting your enquiry. We will get back to you shortly.</div>
            )}

            <section className='contact-form__group contact-form-group'>
                <label className='contact-form-group__label' htmlFor='email'>
                    Email {email.error && <span className='contact-form-group__error'> - {email.error}</span>}
                </label>
                <input
                    value={email.value}
                    onChange={(e) => setEmail({ value: e.target.value, error: '' })}
                    id='email'
                    className='contact-form-group__input'
                    type='email'
                    placeholder=' '
                    autoComplete='email'
                    disabled={isPending}
                    required
                    autoFocus
                />
            </section>

            <section className='contact-form__group contact-form-group'>
                <label className='contact-form-group__label' htmlFor='query'>
                    How can we help? {query.error && <span className='contact-form-group__error'> - {query.error}</span>}
                </label>
                <textarea
                    value={query.value}
                    onChange={(e) => setQuery({ value: e.target.value, error: '' })}
                    id='query'
                    className='contact-form-group__input'
                    placeholder=' '
                    disabled={isPending}
                    required
                />
            </section>

            <input
                className={!hasAnyError ? 'contact-form__button' : 'contact-form__button contact-form__button--error'}
                type='submit'
                value='Submit'
                disabled={hasAnyError || isPending}
            />
        </form>
    );
}
