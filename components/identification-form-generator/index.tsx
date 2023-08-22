'use client';

import { useForm, SubmitHandler } from 'react-hook-form';

import { TextField } from '@/features';
import { TextFieldPropTypes } from '@/features/text-field/typings';

interface IdentificationFormGeneratorPropsTypes<K> {
  textFields: RequiredItemArray<TextFieldPropTypes<K>>;
  buttonData: {
    type: ButtonType;
    innerMessage: string;
    className?: string;
  };
  title: {
    innerMessage: string;
    className?: string;
  };
  onFormSubmit?: (data: TextFieldPropTypes<K>['name']) => void;
  errors?: Errors[];
}

function IdentificationFormGenerator({
  textFields,
  buttonData,
  title,
  onFormSubmit,
  errors,
}: IdentificationFormGeneratorPropsTypes) {
  const names = textFields.map((textField) => textField.name);

  const { register, handleSubmit } = useForm<typeof names>();

  const renderedTextFields = textFields.map((textField, i) => (
    <TextField key={i} {...textField} register={register(textField.name)} />
  ));

  const onSubmit: SubmitHandler<typeof names> = (e) => {
    if (onFormSubmit) {
      onFormSubmit(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-between min-h-[90dvh] sm:min-h-[550px] w-full"
    >
      <div className="w-full">
        <h1
          className={`text-center pb-3 text-3xl capitalize ${title.className}`}
        >
          {title.innerMessage}
        </h1>
        {renderedTextFields}
      </div>
      <div className="flex flex-col">
        {errors && errors?.length > 0 && (
          <ul className="list-disc flex my-2">
            {errors?.map((err) => (
              <li key={err.title} className="ml-5 error-bullet">
                <span className="error-text">
                  {err.title}: {err.message}
                </span>
              </li>
            ))}
          </ul>
        )}
        <button className={buttonData.className} type={buttonData.type}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default IdentificationFormGenerator;
