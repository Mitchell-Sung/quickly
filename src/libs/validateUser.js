import { FIRST_NAME, LAST_NAME, EMAIL, PASSWORD } from 'constants';
import validateEmail from './validateEmail';
import validateName from './validateName';
import validatePwd from './validatePwd';

const validateUser = (name, value) => {
  switch (name) {
    case FIRST_NAME:
    case LAST_NAME:
      return validateName(value);
    case EMAIL:
      return validateEmail(value);
    case PASSWORD:
      return validatePwd(value);
    default:
      return;
  }
};

export default validateUser;
