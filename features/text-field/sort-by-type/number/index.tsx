'use client';

import React, { useEffect } from 'react';

import {
  TextFieldPropTypesExceptTypes,
  NumberTextFieldOptionalProps,
} from '../../typings';
import { styles } from '../../styles';

type TextFieldTypeTextPropTypes = TextFieldPropTypesExceptTypes &
  NumberTextFieldOptionalProps;

function TextFieldTypeNumber({
  style,
  classname,
  hideArrows,
  register,
  ...props
}: TextFieldTypeTextPropTypes) {
  console.log('hideArrows', hideArrows);

  const renderedStyles =
    classname || '' + (hideArrows ? ' appearance-textfield ' : '');

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
  props.defaultValue;

  return (
    <input
      className={
        (renderedStyles || '') + (style ? styles(style, props.type) : '')
      }
      {...register}
      {...props}
    />
  );
}

export default TextFieldTypeNumber;
