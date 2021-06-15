import styled from "styled-components";

export default function Section2() {
  return (
    <Wrapper>
      <RightSection>
        <Title>
          <p>
            {" "}
            <span>Réservez votre unité</span>
          </p>
          <p>
            {" "}
            <span>dès maintenant</span>
          </p>
        </Title>
        <Subtitle1>
          Un édifice moderne
          <br /> et accessible
        </Subtitle1>
        <Subtitle2>64 logements à louer en Beauce</Subtitle2>
      </RightSection>
      <LeftSection>
        <Text1>
          L’édifice du Baronet vous offre 64 logements modernes de qualité
          supérieure, répartis sur quatre étages. Ses résidents y trouvent
          assurément confort et satisfaction, puisqu’il offre six modèles de
          logements 3 ½ ou 4 ½. De plus, certaines unités sont adaptées aux
          personnes à mobilité réduite, un atout rare dans la région.
        </Text1>
        <Text2>
          <p>Phase 1 disponible dès l’été 2021</p>{" "}
          <p>
            Les appartements seront livrés en 2 phases :<br /> la première phase
            de 64 logements à l’été 2021 et la seconde de 32 logements à l’été
            2023. Réservez votre unité dès maintenant!
          </p>
        </Text2>
      </LeftSection>
    </Wrapper>
  );
}

const Text2 = styled.div`
  text-align: left;
  margin-top: 50px;
  background-color: #f1f1f2;
  padding: 20px;
  p:nth-child(n) {
    font-size: 18px;
  }
  p:nth-child(1) {
    font-weight: bold;
  }
`;

const Text1 = styled.p`
  font-size: 18px;
  text-align: left;
  padding-top: 45%;
`;

const Subtitle2 = styled.p`
  font-size: 31px;
  margin: 0;
  text-align: left;
`;

const Subtitle1 = styled.p`
  color: #009ad9;
  font-size: 40px;
  padding-top: 25%;
  text-align: left;
  margin: 0;
`;

const LeftSection = styled.div`
  width: 50%;
`;

const RightSection = styled.div`
  width: 50%;
`;

const Title = styled.div`
  font-size: 54px;
  color: white;
  text-align: left;
  p:nth-child(n) {
    margin: 0;
    padding: 0;
    margin-bottom: 10px;
  }
  span:nth-child(n) {
    background-color: #022943;
  }
`;

const Wrapper = styled.div`
  padding: 5%;
  padding-bottom: 1%;
  padding-left: 12%;
  height: 100vh;
  display: flex;
  background: transparent
    linear-gradient(180deg, #f1f1f2 0%, #f1f1f200 100%, #808080 100%);
`;
