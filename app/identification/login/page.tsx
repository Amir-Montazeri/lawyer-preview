'use client';

import type { Metadata } from 'next';
import Link from 'next/link';

import { IdentificationFormGenerator } from '@/components';
import { textFieldsList } from './textFields';
import { useNotificationStore } from '@/features';

export const metadata: Metadata = {
  title: 'Identification | LogIn',
  description: 'Davood Montazeri Identification',
};

function IdentificationLogin() {
  const { getSpecificID, addNotification } = useNotificationStore();

  const handleSubmit = (
    data: Record<(typeof textFieldsList)[number]['name'], unknown>
  ) => {
    let ID = getSpecificID(),
      timeout = Math.floor(Math.random() * (20000 - 1000 + 1)) + 1000;
    addNotification({
      title: `new notification! ${ID}`,
      push: {
        pushEvenClientIsVisible: false,
      },
      message: `lorem mnii asm msammi masmia masmm casmm asmm sm masm, time out: ${timeout}`,
      image: '',
      id: ID,
      timeout: timeout,
    });
  };

  return (
    <>
      <IdentificationFormGenerator
        textFields={textFieldsList}
        onFormSubmit={handleSubmit}
        title={{ innerMessage: 'Log in', className: 'text-white' }}
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
            href="/identification/refresh-password"
            className="field-outline text-unique-gold-900"
          >
            forget password?
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
