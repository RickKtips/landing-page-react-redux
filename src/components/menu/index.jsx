

// Styles
import * as Styles from "./styles";

function MenuSite() {


  return (
    <Styles.Container data-testid="menu">
      <Styles.Menu>
        <li><Styles.MenuItem>Como Funciona</Styles.MenuItem></li>
        <li><Styles.MenuItem>Serviços</Styles.MenuItem></li>
        <li><Styles.MenuItem>Profissionais</Styles.MenuItem></li>
        <li><Styles.MenuItem>Salões</Styles.MenuItem></li>
        <li><Styles.MenuItem>Empresas</Styles.MenuItem></li>
      </Styles.Menu>
      
    </Styles.Container>
  );
}

export default MenuSite;
