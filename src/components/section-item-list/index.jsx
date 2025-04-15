// Styles
import * as Styles from "./styles";
import SectionItemListDot from "../section-item-list-dot/index";
import SimpleSlider from "../slider";
// Utilities

const SectionItemList = ({ list }) => {

  return (
    <Styles.SectionContainer data-testid="section-item-list">
      {list.singleList && (list.itens.map(item =>(<SectionItemListDot item={item} key={item.idItem}/>))) }
      {!list.singleList && (<SimpleSlider listItens={list.itens} secTheme={list.secTheme} key={1000} aria-label="listagem ilustrada de itens"/>)}
    </Styles.SectionContainer>
  );
};

export default SectionItemList;
