'use client';

import { useEffect } from 'react';

import {
  TextFieldPropTypesExceptTypes,
  TextTextFieldOptionalProps,
} from '../../typings';
import { styles } from '../../styles';

type TextFieldTypeTextPropTypes = TextFieldPropTypesExceptTypes &
  TextTextFieldOptionalProps;

function TextFieldTypeText({
  style,
  classname,
  register,
  ...props
}: TextFieldTypeTextPropTypes) {
  // const splitedClassnames = classname?.split(' '),
  //   splitedStyles = style && styles(style, props.type)?.split(' ');

  const preparedStyles = style && styles(style, props.type) + classname;

  useEffect(() => {
    if (
      (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') &&
      style
    ) {
      console.warn(
        "Make sure you have installed TailwindCss's required packages accurately while you are using `style` attribute!\nFor more information check my github page."
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <input className={preparedStyles} {...register} {...props} />;
}

export default TextFieldTypeText;
