import React, { useState } from 'react';
import {
  StyledAccordionContent,
  StyledAccordionTitle,
  StyledAccordionWrapper,
} from './styled-accordion-components';

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <StyledAccordionWrapper>
      <StyledAccordionTitle
        className={isOpen ? 'open' : ''}
        onClick={handleToggle}
      >
        <h3>{title}</h3>
        <span>&#9660;</span>
      </StyledAccordionTitle>
      {isOpen && <StyledAccordionContent>{children}</StyledAccordionContent>}
    </StyledAccordionWrapper>
  );
};

export default Accordion;
