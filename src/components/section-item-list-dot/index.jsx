// Styles
import * as Styles from "./styles";

// Utilities

const SectionItemListDot = ({ item }) => {

  return (
    <Styles.DotContainer data-testid="section-item-list-dot">
        {item.name && (<Styles.Text data-testid="listText">{item.name}</Styles.Text>)}
        {item.img && (<Styles.Image  imageUrl={item.img}></Styles.Image>)}
        {item.text && (<Styles.Text >{item.text}</Styles.Text>)}
    </Styles.DotContainer>
  );
};

export default SectionItemListDot;
