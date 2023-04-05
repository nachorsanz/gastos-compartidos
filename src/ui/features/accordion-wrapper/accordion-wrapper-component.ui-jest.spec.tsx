/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Accordion from './accordion-wrapper-component';
describe('Accordion', () => {
  it('should render the title and content', () => {
    const title = 'Accordion Title';
    const content = 'Accordion Content';

    const { getByText, queryByText } = render(
      <Accordion title={title}>
        <p>{content}</p>
      </Accordion>,
    );

    expect(getByText(title)).toBeInTheDocument();
    expect(queryByText(content)).not.toBeInTheDocument();
  });

  it('should show/hide content when title is clicked', () => {
    const title = 'Accordion Title';
    const content = 'Accordion Content';

    const { getByText, queryByText } = render(
      <Accordion title={title}>
        <p>{content}</p>
      </Accordion>,
    );

    const titleElement = getByText(title);
    fireEvent.click(titleElement);

    expect(getByText(content)).toBeInTheDocument();

    fireEvent.click(titleElement);

    expect(queryByText(content)).not.toBeInTheDocument();
  });
});
