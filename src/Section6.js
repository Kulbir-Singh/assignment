import styled from "styled-components";
import Logo from "./resources/bulletpoint.svg";

export default function Section6() {
  return (
    <Wrapper>
      <Left>
        <Title>Des plans bien pensés</Title>
        <SubTitle>3 1/2 et 4 1/2 à louer</SubTitle>
        <Text>
          Confort et qualité, à prix accessible, voilà l’offre du Baronet.
          Découvrez nos 3 ½ et 4 ½ à louer à Sainte-Marie.
        </Text>
        <Text>
          Pour voir quel appartement convient le mieux à votre style de vie,
          consultez le plan ci-dessous. Sélectionnez un étage.
        </Text>
      </Left>
      <Right>
        <Title2>Des petits plus, pensés pour vous :</Title2>
        <Ul>
          <Li>
            <Img src={Logo} />
            Appartements à aire-ouverte
          </Li>
          <Li>
            <Img src={Logo} />
            Grande luminosité
          </Li>
          <Li>
            <Img src={Logo} />
            Beaucoup de rangement
          </Li>
          <Li>
            <Img src={Logo} />
            Espace bureau
          </Li>
          <Li>
            <Img src={Logo} />
            Douche en céramique et bain autoportant
          </Li>
          <Li>
            <Img src={Logo} />
            Climatisation indépendante
          </Li>
        </Ul>
      </Right>
    </Wrapper>
  );
}

const Title2 = styled.p`
  color: #009ad9;
  font-size: 31px;
  margin-bottom: 20px;
`;

const Ul = styled.ul`
  width: 75%;
  padding-left: 20px;
  margin: 0;
  columns: 2;
  li:nth-child(n) {
    margin: 20px 10px 10px 0;
    font-size: 16px;
    list-style: none;
    ::before {
      color: blue;
      margin-left: -1em;
      padding-right: 10px;
    }
    padding: 10px 0;
  }
`;

const Li = styled.li``;

const Img = styled.img`
  margin-left: -1em;
  padding-right: 0.75em;
  list-style: none;
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
  margin-top: 20%;
  margin-left: 5%;
`;

const Title = styled.p`
  color: #009ad9;
  font-size: 40px;
  margin-bottom: 0;
`;

const SubTitle = styled.p`
  font-size: 31px;
  margin-top: 0;
`;

const Left = styled.div`
  width: 40%;
  margin-top: 7.5%;
`;

const Text = styled.p`
  font-size: 18px;
`;

const Wrapper = styled.div`
  height: 75vh;
  text-align: left;
  display: flex;
  padding-left: 10%;
  background: transparent
    linear-gradient(180deg, #f1f1f2 0%, #f1f1f200 100%, #808080 100%);
`;
