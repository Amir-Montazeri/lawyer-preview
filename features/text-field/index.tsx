import { TextFieldPropTypes } from './typings';
import {
  TextFieldTypeText,
  TextFieldTypeNumber,
  TextFieldTypePassword,
} from './sort-by-type';

function TextField({ ...props }: TextFieldPropTypes) {
  const elementPerEachTypes = () => {
    const { type } = props;

    if (type === 'text') {
      return <TextFieldTypeText {...props} />;
    } else if (type === 'number') {
      return <TextFieldTypeNumber {...props} />;
    } else if (type === 'password') {
      return <TextFieldTypePassword {...props} />;
    } else {
      throw new Error(
        'Error in your text-field type -' + type + '- is not defined yet!'
      );
    }
  };

  return elementPerEachTypes();
}

export default TextField;
