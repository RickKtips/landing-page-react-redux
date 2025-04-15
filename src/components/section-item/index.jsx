// Styles
import * as Styles from "./styles";
import React, { useEffect } from 'react';
import SectionItemList from "../section-item-list/index";
import SectionItemLinks from "../section-item-links/index";
import AOS from 'aos';
import 'aos/dist/aos.css';
// Utilities

const SectionItem = ({ section }) => {
  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 0, 
      duration: 1000,
      easing: 'ease',
    });
  }, [])
  return (

    <Styles.SectionContainer className={section.bgClass} data-testid="section-item">
      <Styles.Section className={section.bgClass}>
      {section.title && (<Styles.Title data-aos="fade-up" className="title" tabIndex={section.id+'1'+0}>{section.title}</Styles.Title>)}
        {section.text && (<Styles.Texts data-aos="fade-up" className="text"  tabIndex={section.id+'2'+0}>{section.text}</Styles.Texts>)}
        {section.imageUrl && (<Styles.Image data-aos="fade-up" className="image" imageUrl={section.imageUrl}  tabIndex={section.id+'3'+0}></Styles.Image>)}
        {section.listItens && (<Styles.List data-aos="fade-up" className="listArea"><SectionItemList list={section.listItens} key={section.id} tabIndex={section.id+'4'+0} /></Styles.List>)}
        {section.showLinks && (<Styles.Links data-aos="fade-up" className="links"><SectionItemLinks theme={section.whiteLink} key={section.id}  tabIndex={section.id+'5'+0}/></Styles.Links>)}
     </Styles.Section>
    </Styles.SectionContainer>

  );
};

export default SectionItem;
