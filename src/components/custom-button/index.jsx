import React from "react";

// Styles
import * as Styles from "./styles";

const CustomButton = ({ children, startIcon, theme}) => {
  return (
    <Styles.CustomButtonContainer {...theme} data-testid="button">
      {startIcon && <Styles.ImageIcon className="image" imageUrl={startIcon}></Styles.ImageIcon>}
      {children}{theme}
    </Styles.CustomButtonContainer>
  );
};

export default CustomButton;
