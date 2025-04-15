

// Styles
import * as Styles from "./styles";
import SectionItemLinks from "../section-item-links/index";
import MenuSite from "../menu";
import MidiasSite from "../midias";
function Footer() {


  return (
    <Styles.Container>
      <Styles.Footer data-testid="footer">

      <Styles.Image className="image" imageUrl={'yobelle-logo-alt.svg'}>
      <h1>Yobelle</h1>
      </Styles.Image>
      <Styles.Midias className="midias">
        <MidiasSite />
      </Styles.Midias>

      <Styles.Menu className="menu">
        <MenuSite />
      </Styles.Menu>

      <Styles.Text className="text">
        <p>A Yobelle é o maior e melhor aplicativo de delivery de beleza e bem estar do Norte e Nordeste. Através do nosso aplicativo de beleza e bem-estar é possível ficar mais bela e sentir-se bem sem sair de casa. Com a Yobelle, você é atendido pelos melhores profissionais com menor custo da região.</p>
      <SectionItemLinks />
      </Styles.Text>
      </Styles.Footer>
      
    </Styles.Container>
  );
}

export default Footer;
