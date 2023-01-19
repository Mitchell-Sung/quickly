import { FIRST_NAME, LAST_NAME, EMAIL, PASSWORD, COMPANY } from 'constants';
import makeRandomCompany from 'libs/makeRandomCompany';

export const initUser = {
  [FIRST_NAME]: '',
  [LAST_NAME]: '',
  [EMAIL]: '',
  [PASSWORD]: '',
  [COMPANY]: { name: makeRandomCompany() },
};

export const initValid = {
  [FIRST_NAME]: { err: false, msg: '', canSubmit: false },
  [LAST_NAME]: { err: false, msg: '', canSubmit: false },
  [EMAIL]: { err: false, msg: '', canSubmit: false },
  [PASSWORD]: { err: false, msg: '', canSubmit: false },
};

export const signupData = [
  {
    id: 1,
    name: FIRST_NAME,
    type: 'text',
    label: 'First name',
  },
  {
    id: 2,
    name: LAST_NAME,
    type: 'text',
    label: 'Last name',
  },
  {
    id: 3,
    name: EMAIL,
    type: 'email',
    label: 'Email',
  },
  {
    id: 4,
    name: PASSWORD,
    type: 'password',
    label: 'Password',
  },
];
