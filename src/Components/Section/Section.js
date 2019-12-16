import React from 'react';
import './Section.css';

const Section = ({ children, headerLevel = 1, headerText }) => {
  const H = `h${headerLevel}`;
  return (
    <article className="description">
      <H className="description-title">{headerText}</H>
      {children}
    </article>
  );
};

export default Section;
