import styled from "styled-components";
import Logo from "./resources/bulletpoint.svg";

export default function Section2() {
  const icon = {
    backgroundImage: `url(${Logo})`,
  };
  return (
    <Wrapper>
      <RightSection>
        <p>Des services et commodités à votre portée : </p>
        Espaces de vie pratiques et réfléchis, inclusions et commodités
        recherchées, le tout construit avec des matériaux de qualité : c’est ce
        que vous offre le Baronet.<Button>Découvrir le secteur</Button>
      </RightSection>
      <LeftSection>
        <Ul>
          <li>
            <Img src={Logo} />
            Stationnement intérieur et extérieur disponibles
          </li>
          <li>
            <Img src={Logo} />
            Lockers intérieurs disponibles
          </li>
          <li>
            <Img src={Logo} />
            Piscine extérieure chauffée, disponible en Phase 2
          </li>
          <li>
            <Img src={Logo} />
            Ascenseur
          </li>
          <li>
            <Img src={Logo} />
            Gym et salle communautaire
          </li>
          <li>
            <Img src={Logo} />
            Climatisation indépendante{" "}
          </li>
          <li>
            <Img src={Logo} />
            Insonorisation supérieure
          </li>
          <li>
            <Img src={Logo} />
            Sans oublier, la vue imprenable sur la rivière Chaudière
          </li>
        </Ul>
      </LeftSection>
    </Wrapper>
  );
}

const Img = styled.img`
  margin-left: -1em;
  padding-right: 0.75em;
`;

const Ul = styled.ul`
  columns: 2;
  padding: 50px 5% 0 5%;
  width: 80%;
  li:nth-child(n) {
    background: url("/src/resources/bulletpoint.svg");
    background-repeat: no-repeat;
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

const Button = styled.button`
  background: #022943;
  width: 55%;
  height: 70px;
  color: white;
  font-size: 16px;
  border: none;
  content: "logo";
`;

const LeftSection = styled.div`
  width: 50%;
  height: 65%;
  background: white;
  position: relative;
  top: 20%;
  left: 8%;
`;

const RightSection = styled.div`
  width: 40%;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 8% 0;
  justify-content: space-evenly;
  margin-left: 12%;
  p:nth-child(n) {
    margin: 0;
  }
`;

const Wrapper = styled.div`
  height: 70vh;
  width: 95%;
  background: #009ad9;
  display: flex;
  text-align: left;
  font-size: 23px;
  overflow: hidden;
`;
