/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import Home from './Home';
import { render } from '@testing-library/react';
import WrapperTestingProvider from '../config-adapter/wrapper-testing-provider';

describe('Home', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <WrapperTestingProvider>
        <Home />
      </WrapperTestingProvider>,
    );
    expect(getByTestId('home')).toBeInTheDocument();
  });
});
