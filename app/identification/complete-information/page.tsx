'use client';

import { IdentificationFormGenerator } from '@/components';

import { textFieldsList } from './textFields';

function CompeleteInformation() {
  const handleSubmit = (
    data: Record<(typeof textFieldsList)[number]['name'], unknown>
  ) => {
    console.log('fine', data);
  };

  return (
    <IdentificationFormGenerator
      textFields={textFieldsList}
      onFormSubmit={handleSubmit}
      title={{
        innerMessage: 'complete information',
        className: 'text-white',
      }}
      buttonData={{
        type: 'submit',
        innerMessage: 'submit',
        className:
          'bg-unique-gold-800 py-3 rounded-xl text-lg tracking-wide shadow-sm shadow-black uppercase text-black field-outline',
      }}
    />
  );
}

export default CompeleteInformation;
