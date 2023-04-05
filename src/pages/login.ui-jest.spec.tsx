/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import Login from './Login';
import { render } from '@testing-library/react';
import WrapperTestingProvider from '../config-adapter/wrapper-testing-provider';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Login', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <WrapperTestingProvider>
        <Login />
      </WrapperTestingProvider>,
    );
    expect(getByTestId('login')).toBeInTheDocument();
  });
});
