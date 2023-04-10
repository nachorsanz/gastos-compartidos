/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Home from './Home';
import WrapperTestingProvider from '../../config-adapter/wrapper-testing-provider';

describe('Home', () => {
  it('should render home component', () => {
    const { getByTestId } = render(
      <WrapperTestingProvider>
        <Home />
      </WrapperTestingProvider>,
    );
    expect(getByTestId('home')).toBeInTheDocument();
  });
});
