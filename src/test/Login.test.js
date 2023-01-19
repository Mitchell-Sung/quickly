import { Login } from 'pages';
import { render } from '@testing-library/react';

test('Does the login page render', () => {
  render(<Login />);
});
