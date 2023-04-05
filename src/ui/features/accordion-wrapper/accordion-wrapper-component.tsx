import React, { useState } from 'react';
import {
  AccordionContent,
  AccordionTitle,
  AccordionWrapper,
} from './styled-accordion-components';

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <AccordionWrapper>
      <AccordionTitle className={isOpen ? 'open' : ''} onClick={handleToggle}>
        <h3>{title}</h3>
        <span>&#9660;</span>
      </AccordionTitle>
      {isOpen && <AccordionContent>{children}</AccordionContent>}
    </AccordionWrapper>
  );
};

export default Accordion;
