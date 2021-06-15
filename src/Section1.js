import styled from "styled-components";
import Pic from "./resources/Groupe de masques 13.png";

export default function Section1() {
  return (
    <Wrapper>
      <Text>
        <H3>La qualite de vie sans compromis !</H3>
        <H4>Appartements a louer a Sainte-Marie</H4>
        <p>
          <strong> 64 unités | Livraison de la Phase 1 juillet 2021</strong>
          <br /> Bienvenue aux condos locatifs : un nouvel immeuble locatif
          situé au cœur de Sainte-Marie, en Beauce, comportant 64 appartements à
          louer. Que vous soyez seul, un jeune couple, une famille ou
          nouvellement retraité, vous serez comblés par la vaste sélection de
          logements 3 ½ et 4 ½ situés dans un environnement des plus
          enchanteurs.
        </p>
        <p>
          Si le nom du Baronet vous semble familier, ce n’est pas un hasard. Les
          appartements empruntent leur nom à l’ancienne usine, bien connue des
          Beaucerons. Vous l’aurez deviné, le nouvel édifice siège sur la rue
          Baronet, face à la rivière Chaudière, au milieu du futur centre-ville
          vert de Sainte-Marie.
        </p>
        <p>
          Vous offrir une qualité de vie sans compromis, telle est la promesse
          du Baronet.
          <br />
          <br />
          <strong>
            3 ½ / 4 ½ / certaines unités adapté aux personnes à mobilité
            réduite.
          </strong>
        </p>
        <ButtonDiv>
          <Button1>Voir les plans</Button1>
          <Button2>Réserver mon unité</Button2>
        </ButtonDiv>
      </Text>
      <Image>
        <GreyDiv>
          <Img src={Pic} />
        </GreyDiv>
      </Image>
    </Wrapper>
  );
}

const ButtonDiv = styled.div`
  display: flex;
  justify-content: left;
`;

const Button2 = styled.button`
  width: 35%;
  height: 55px;
  border: none;
  color: white;
  background-color: #009ad9;
`;

const Button1 = styled.button`
  width: 35%;
  margin-right: 15%;
  height: 55px;
  border: none;
  color: white;
  background-color: #009ad9;
`;

const H4 = styled.div`
  font-size: 31px;
  margin: none;
  text-align: left;
`;

const H3 = styled.div`
  color: #009ad9;
  font-size: 40px;
  text-align: left;
  margin: none;
`;

const GreyDiv = styled.div`
  background-color: rgba(191, 196, 199, 0.25);
  width: 450px;
  height: 600px;
`;

const Img = styled.img`
  width: 450px;
  position: relative;
  top: 40px;
  left: -30px;
  background-color: lightgrey;
`;

const Text = styled.div`
  width: 30%;
  display: flex;
  text-align: left;
  flex-direction: column;
  padding-left: 12%;
  padding-top: 5%;
  overflow: auto;
  /* justify-content: center; */
`;

const Image = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  color: black;
  display: flex;
  height: 100vh;
  font-size: 18px;
  width: 100%;
`;
