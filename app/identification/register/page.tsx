'use client';

import type { Metadata } from 'next';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { IdentificationFormGenerator } from '@/components';
import { textFieldsList } from './textFields';
import { setStorage } from '@/lib';

export const metadata: Metadata = {
  title: 'Identification | Register',
  description: 'Davood Montazeri Identification',
};

function IdentificationRegister() {
  const [errors, setErrors] = useState<Errors[]>();
  const router = useRouter();

  const handleSubmit = (
    data: Record<(typeof textFieldsList)[number]['name'], string>
  ): void => {
    const { username, password, confirmPassword } = data;
    setErrors([]);
    if (password !== confirmPassword) {
      setErrors([
        {
          title: 'password',
          message:
            "the password should be exactly the same as 'confirmed password'.",
          code: 10,
        },
      ]);
      return undefined;
    }
    setStorage('confirmation-email', data.username);
    router.push('/identification/confirm-email');
  };

  return (
    <>
      <IdentificationFormGenerator
        textFields={textFieldsList}
        title={{ innerMessage: 'create account', className: 'text-white' }}
        onFormSubmit={handleSubmit}
        buttonData={{
          type: 'submit',
          innerMessage: 'submit',
          className:
            'bg-unique-gold-800 py-3 rounded-xl text-lg tracking-wide shadow-sm shadow-black uppercase text-black field-outline',
        }}
        errors={errors}
      />

      <div className="w-full flex justify-center mt-1 lowercase text-white">
        <p className="text-sm">
          <Link
            href="/identification/login"
            className="field-outline text-unique-gold-900"
          >
            already have an account?
          </Link>
        </p>
      </div>
    </>
  );
}

export default IdentificationRegister;
