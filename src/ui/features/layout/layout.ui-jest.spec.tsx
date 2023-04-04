/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import Layout from './layout-component';
import { render } from '@testing-library/react';

describe('Home', () => {
  it('should render', () => {
    const { getByTestId } = render(<Layout />);
    expect(getByTestId('layout')).toBeInTheDocument();
  });
});
