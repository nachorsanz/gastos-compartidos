/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Login from './login-component';

const onLogin = jest.fn();

describe('Login', () => {
  it('should render', () => {
    const { getByTestId } = render(<Login onLogin={onLogin} />);
    expect(getByTestId('login-component')).toBeInTheDocument();
  });

  it('should call onLogin when login button is clicked', () => {
    const { getByTestId } = render(<Login onLogin={onLogin} />);
    const loginButton = getByTestId('login-button');
    fireEvent.click(loginButton);
    expect(onLogin).toHaveBeenCalled();
  });
});
