import "./App.css";
import Homepage from "./Homepage";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section7 from "./Section7";
import Section6 from "./Section6";
import Section8 from "./Section8";
import Section9 from "./Section9";
import Footer from "./Footer";
import styled from "styled-components";

function App() {
  return (
    <Wrapper className="App">
      <Homepage />
      <section id="accueil">
        <Section1 />
      </section>
      <section id="edifice">
        <Section2 />
      </section>
      <section id="secteur">
        <Section3 />
      </section>
      <Section4 />
      <section id="plans">
        <Section5 />
      </section>
      <Section6 />
      <Section7 />
      <Section8 />
      <section id="joindre">
        <Section9 />
      </section>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  scroll-behavior: auto;
  section:nth-child(n) {
    scroll-snap-align: center;
  }
`;

export default App;
