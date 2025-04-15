// Styles
import * as Styles from "./styles";
import CustomButton from "../custom-button/index";

// Utilities

const SectionItemLinks = ( theme ) => {
  return (
    <Styles.DotContainer  data-testid="section-item-links">
        <CustomButton startIcon={!theme ? 'play.svg': 'playblack.svg'} >
          Google play 
        </CustomButton>
        <CustomButton startIcon={!theme ? 'apple.svg' : 'apple-black.svg'} >
          Apple Store
        </CustomButton>        
    </Styles.DotContainer>
  );
};

export default SectionItemLinks;
