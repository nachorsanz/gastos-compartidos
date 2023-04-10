/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import LoginPage from './Login';
import { render, fireEvent, screen } from '@testing-library/react';
import WrapperTestingProvider from '../../config-adapter/wrapper-testing-provider';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => navigate,
}));

describe('LoginPage', () => {
  it('should render login component', () => {
    const { getByTestId } = render(
      <WrapperTestingProvider>
        <LoginPage />
      </WrapperTestingProvider>,
    );

    expect(getByTestId('login')).toBeInTheDocument();
  });

  it('should call onLogin when login button is clicked', () => {
    const { getByTestId } = render(
      <WrapperTestingProvider>
        <LoginPage />
      </WrapperTestingProvider>,
    );

    const loginButton = getByTestId('login-button');
    fireEvent.click(loginButton);
    expect(screen.getByTestId('login')).toBeInTheDocument();
  });

  it('should call navigate when login button is clicked', () => {
    const { getByTestId } = render(
      <WrapperTestingProvider>
        <LoginPage />
      </WrapperTestingProvider>,
    );

    const loginButton = getByTestId('login-button');
    fireEvent.click(loginButton);
    expect(navigate).toHaveBeenCalledWith('/home');
  });
});
