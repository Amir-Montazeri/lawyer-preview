'use client';

import type { Metadata } from 'next';
import { useLayoutEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { IdentificationFormGenerator } from '@/components';
import { textFieldsList } from './textFields';
import { getStorage } from '@/lib';

export const metadata: Metadata = {
  title: 'Identification | Register',
  description: 'Davood Montazeri Identification',
};

function IdentificationRegister() {
  const [errors, setErrors] = useState<Errors[]>(),
    router = useRouter();

  useLayoutEffect(() => {
    const email = getStorage('confirmation-email');
    if (!email) router.push('/identification/register');
  }, []);

  const handleSubmit = (
    data: Record<(typeof textFieldsList)[number]['name'], unknown>
  ): void => {
    setErrors([
      {
        title: 'code',
        message: 'incorrect code!',
        code: 500,
      },
    ]);
  };

  return (
    <>
      <IdentificationFormGenerator
        textFields={textFieldsList}
        title={{
          innerMessage: 'confirm account',
          className: 'text-unique-gold-900',
        }}
        onFormSubmit={handleSubmit}
        buttonData={{
          type: 'submit',
          innerMessage: 'submit',
          className:
            'bg-unique-gold-800 py-3 rounded-xl text-lg tracking-wide shadow-sm shadow-black uppercase text-black field-outline',
        }}
        errors={errors}
      />

      <div className="w-full flex justify-center mt-1 lowercase">
        <p className="text-sm">
          <Link
            href="/identification/register"
            className="field-outline text-unique-gold-900"
          >
            get back?
          </Link>
        </p>
      </div>
    </>
  );
}

export default IdentificationRegister;
