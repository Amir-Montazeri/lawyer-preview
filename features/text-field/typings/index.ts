export type TextFieldTypes = 'text' | 'number' | 'password';
export type AvailableStyles = 'custom-one' | 'custom-two';

export interface TextFieldCompulsoryProps<Names> {
  name: Names;
}

export interface TextFieldOptionalProps {
  placeholder: string;
  pattern: string;
  required: boolean;
  register: object;
}

export interface TextTextFieldOptionalProps {
  type: 'text';
  defaultValue?: string;
}

export interface NumberTextFieldOptionalProps {
  type: 'number';
  defaultValue?: number;
  hideArrows?: boolean;
}

export interface PasswordTextFieldOptionalProps {
  type: 'password';
  allowedToBeShown?: boolean;
  customShowComponent?: {
    isAllowed: JSX.Element;
    isForbidden: JSX.Element;
  };
}

interface Style {
  style?: AvailableStyles;
  classname?: string;
}

export type TextFieldPropTypesExceptTypes = Partial<TextFieldOptionalProps> &
  Style;

export type TextFieldPropTypes<Names> = TextFieldPropTypesExceptTypes &
  TextFieldCompulsoryProps<Names> &
  (
    | TextTextFieldOptionalProps
    | NumberTextFieldOptionalProps
    | PasswordTextFieldOptionalProps
  );
