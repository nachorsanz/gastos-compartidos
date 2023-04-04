/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import Home from './Home';
import { render } from '@testing-library/react';

describe('Home', () => {
  it('should render', () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId('home')).toBeInTheDocument();
  });
});
