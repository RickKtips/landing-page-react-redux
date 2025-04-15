import React, { useState, useEffect, useRef } from 'react';

// Components
import SectionItem from "../section-item/index";
import { useSelector } from "react-redux";
import { listSingleSection } from "../../redux/sections/slice"; 
import { useDispatch } from "react-redux";
import { selectSectionCount } from "../../redux/sections/sections.selectors";
// Styles
import * as Styles from "./styles";

const Sections = () => {

const totalSections = useSelector(selectSectionCount);

const [lastView, setLastView] = useState(1);

const dispatch = useDispatch();
const loaderRef = useRef(null);
const [isLoading, setIsLoading] = useState(false);

const atualSection = useSelector((rootReducer) => rootReducer.sectionReducer.atualSection);

// eslint-disable-next-line
const getSection = () => {
  dispatch(listSingleSection(lastView),setLastView(lastView+1));
}

useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setIsLoading(true);
      getSection();
      setIsLoading(false);
    }
  });

  if (loaderRef.current) {
    observer.observe(loaderRef.current);
  }
  return () => {
    if (loaderRef.current) {
      // eslint-disable-next-line
      observer.unobserve(loaderRef.current);
    }
  };
  // eslint-disable-next-line
}, [getSection, setIsLoading]);


return (
  <Styles.Container data-testid="section">
    {atualSection ? atualSection.map((section) => (<SectionItem section={section} key={section.id} tabIndex={section.id}/>)): null}
    { lastView <= totalSections && <div ref={loaderRef}>{isLoading && <p>CARREGANDO</p>}</div>}
  </Styles.Container>
);
};

export default Sections;    
