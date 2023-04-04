/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import UserPanel from './user-panel';
import { render } from '@testing-library/react';

describe('Home', () => {
  it('should render', () => {
    const { getByTestId } = render(<UserPanel />);
    expect(getByTestId('user-panel')).toBeInTheDocument();
  });
});
