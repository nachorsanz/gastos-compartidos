/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import Login from './Login';
import { render } from '@testing-library/react';

describe('Login', () => {
  it('should render', () => {
    const { getByTestId } = render(<Login />);
    expect(getByTestId('login')).toBeInTheDocument();
  });
});
