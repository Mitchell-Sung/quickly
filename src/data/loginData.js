import { EMAIL, PASSWORD } from 'constants';

export const initLogin = {
  [EMAIL]: '',
  [PASSWORD]: '',
};

export const initValid = {
  [EMAIL]: { err: false, msg: '', canSubmit: false },
  [PASSWORD]: { err: false, msg: '', canSubmit: false },
};

export const loginData = [
  {
    id: 1,
    name: EMAIL,
    type: 'email',
    label: 'Email',
  },
  {
    id: 2,
    name: PASSWORD,
    type: 'password',
    label: 'Password',
  },
];
