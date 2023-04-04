/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Login from './login-component';

const onLogin = jest.fn();

describe('Login', () => {
  it('should render', () => {
    const { getByTestId } = render(<Login onLogin={onLogin} />);
    expect(getByTestId('login-component')).toBeInTheDocument();
  });
});
