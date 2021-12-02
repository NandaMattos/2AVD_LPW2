import { Container, Content } from "./styles";
import logo from "../../assets/unifoa-logo.png";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="UniFOA" />
        <h1>Centro Universitário de Volta Redonda</h1>
        
      </Content>
    </Container>
  );
}
