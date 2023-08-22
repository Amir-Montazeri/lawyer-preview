/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEffect, useState } from 'react';

import {
  TextFieldPropTypesExceptTypes,
  PasswordTextFieldOptionalProps,
} from '../../typings';
import { styles } from '../../styles';

type TextFieldTypePasswordPropTypes = TextFieldPropTypesExceptTypes &
  PasswordTextFieldOptionalProps;

function TextFieldTypeNumber({
  type,
  style,
  classname,
  register,
  allowedToBeShown,
  customShowComponent,
  ...props
}: TextFieldTypePasswordPropTypes) {
  const [showable, setShowable] = useState(false);
  let renderedType = showable ? 'text' : 'password';

  useEffect(() => {
    if (
      (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') &&
      style
    ) {
      console.warn(
        "Make sure you have installed TailwindCss's required packages accurately while you are using `style` attribute!\nFor more information check my github page."
      );
    }
  }, []);

  const toggleShowable = () => {
    setShowable((prevState) => !prevState);
  };

  return (
    <div className="relative w-full">
      {allowedToBeShown && (
        <div
          className="absolute top-2/4 translate-y-[-70%] right-[7px] text-green-600 z-[2] cursor-pointer"
          onClick={toggleShowable}
        >
          {(showable
            ? customShowComponent?.isAllowed
            : customShowComponent?.isForbidden) || (
            <span className="bg-red-700">tog</span>
          )}
        </div>
      )}

      <input
        className={style && styles(style, type) + ' ' + (classname || '')}
        {...register}
        {...props}
        type={renderedType}
      />
    </div>
  );
}

export default TextFieldTypeNumber;
