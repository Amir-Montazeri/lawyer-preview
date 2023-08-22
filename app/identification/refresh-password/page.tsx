'use client';

import type { Metadata } from 'next';
import Link from 'next/link';

import { IdentificationFormGenerator } from '@/components';
import { textFieldsList } from './textFields';
import { useUserStore } from '@/store';

export const metadata: Metadata = {
  title: 'Identification | refresh password',
  description: 'Davood Montazeri Identification',
};

function IdentificationLogin() {
  const { getUser, addUserInformation } = useUserStore();

  const handleSubmit = (
    data: Record<(typeof textFieldsList)[number]['name'], string>
  ) => {
    addUserInformation('email', data.username);
    console.log(data);
  };

  return (
    <>
      <IdentificationFormGenerator
        textFields={textFieldsList}
        title={{
          innerMessage: `refresh password ${getUser.email || 'nothing'}`,
          className: 'text-white',
        }}
        onFormSubmit={handleSubmit}
        buttonData={{
          type: 'submit',
          innerMessage: 'submit',
          className:
            'bg-unique-gold-800 py-3 rounded-xl text-lg tracking-wide shadow-sm shadow-black uppercase text-black field-outline',
        }}
      />

      <div className="w-full flex justify-between mt-1 lowercase text-white">
        <p className="text-sm">
          <Link
            href="/identification/login"
            className="field-outline text-unique-gold-900"
          >
            back to login?
          </Link>
        </p>
        <p className="text-sm">
          <Link
            href="/identification/register"
            className="field-outline text-unique-gold-900"
          >
            create Account?
          </Link>
        </p>
      </div>
    </>
  );
}

export default IdentificationLogin;
