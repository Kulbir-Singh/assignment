import styled from "styled-components";

export default function Section5() {
  return (
    <Wrapper>
      <Left>
        <Title>Un secteur de choix</Title>
        <SubTitle>Au centre-ville de Sainte-Marie</SubTitle>
        <Text>
          Situé à l’angle de la rue Notre-Dame Sud et Baronet, l’édifice offre à
          ses résidents un emplacement de choix. Le Baronet est au centre de la
          belle ville de Sainte-Marie, près des services et commerces, au grand
          bonheur de ses locataires. Vous y êtes dans un environnement paisible
          empreint de quiétude et tranquillité. D’un côté, les résidents ont
          droit à une vue magnifique sur la rivière Chaudière. De l’autre,
          l’édifice est bordé par une piste cyclable et par des arbres matures
        </Text>
        <Text>
          S’établir au Baronet, c’est vivre au cœur de Sainte-Marie, dans un
          environnement des plus enchanteurs, tout en étant à proximité de
          l’action citadine. Le meilleur des deux mondes!
        </Text>
        <Button>Voir les plans</Button>
      </Left>
      <Right>
        <Ol>
          <Li>
            <span>Un lieu où il fait bon vivre</span>
          </Li>
          <Li>
            <span>
              Au futur centre-ville vert de Sainte-Marie aménagé en continuité
              avec le merveilleux Parc Taschereau
            </span>
          </Li>
          <Li>
            <span>Bordé par la piste cyclable et par des arbres matures</span>
          </Li>
          <Li>
            <span>À quelques minutes de nombreux commerces et services</span>
          </Li>
          <Li>
            <span>À proximité de parcs et écoles primaires</span>
          </Li>
        </Ol>
      </Right>
    </Wrapper>
  );
}

const Ol = styled.ol`
  width: 50%;
  list-style: none;
  counter-reset: li;

  li::before {
    content: counter(li);
    color: white;
    font-size: 18px;
    padding: 0 5px;
    display: inline-block;
    background-color: #009ad9;
    border-radius: 30px;
    margin-left: -1em;
  }
`;

const Li = styled.li`
  font-size: 18px;
  counter-increment: li;
  margin: 10% 0;
  span:nth-child(n) {
    position: relative;
    left: 20px;
  }
`;

const Button = styled.button`
  background-color: #009ad9;
  width: 300px;
  margin-top: 30px;
  height: 60px;
  border: none;
  font-size: 16px;
  color: white;
`;

const Right = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  color: #009ad9;
  font-size: 40px;
`;

const SubTitle = styled.p`
  font-size: 31px;
`;

const Left = styled.div`
  width: 40%;
`;

const Text = styled.p`
  font-size: 18px;
`;

const Wrapper = styled.div`
  height: 75vh;
  text-align: left;
  display: flex;
  padding-left: 10%;
`;
