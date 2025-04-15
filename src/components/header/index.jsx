

// Styles
import * as Styles from "./styles";

function Header() {


  return (
    <Styles.Container>
      <Styles.Header  data-testid="header">

      <Styles.Image imageUrl={'logo.svg'}>
      <h1>Yobelle</h1>
      </Styles.Image>

      </Styles.Header>
      
    </Styles.Container>
  );
}

export default Header;
