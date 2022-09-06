import {
  Section,
  HeaderContent,
  SecondSection,
  Scroll,
  LastSection,
} from "./style";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ArrowDownCircle, Gear, Calculator, Pen } from "react-bootstrap-icons";
import Home1 from "../../assets/image/Home1.jpg";
import Home2 from "../../assets/image/Home2.jpg";
import { useContext } from "react";
import { Context } from "../../providers/userContext";

function Home() {

  const {  token, navigate} = useContext(Context);

  if(token) {
    setTimeout(() => {navigate("/dashboard")}, 100)
}else {
  return (
    <motion.div
      initial={{ opacity: 0.75 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <>
        <Section>
          <Header />

          <HeaderContent>
            <h1 className="HeaderTitle" id="home">
              <p>Valorize</p>
              <p>as</p>
              <p>suas</p>
              <p>skills.</p>
            </h1>
            <h2 className="HeaderSubtitle">Seu tempo, suas regras.</h2>

            <Scroll>
              <p className="Scrolldown">
                <a className="Smoothscroll" href="#about">
                  Saiba Mais
                  <i className="LearnMore">
                    {" "}
                    <ArrowDownCircle />{" "}
                  </i>
                </a>
              </p>
            </Scroll>
          </HeaderContent>
        </Section>

        <SecondSection>
          <div>
            <h2 className="SecondSectionTitle" id="about">
              Uma ferramenta única, feita de Dev para Dev.
            </h2>
            <p className="SecondSectionP">
              Descubra como a <p className="CronosP">&nbsp;CRONOS&nbsp;</p> pode
              lhe ajudar:
            </p>
          </div>

          <div className="Content">
            <div className="Image1">
              <img src={Home1} alt="aboutImage" />
            </div>

            <div className="FirstTopic">
              <h2>Descubra seu poder</h2>
              <br></br>
              <p className="FirstContent">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centurie elease of Letraset .
              </p>
            </div>

            <div className="SecondTopic">
              <h2>Descubra seu poder</h2>
              <br></br>
              <p className="SecondContent">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>

            <div className="Image2">
              <img src={Home2} alt="secondAboutImage" />
            </div>
          </div>
        </SecondSection>

        <LastSection>
          <div className="Container">
            <h2 className="LastSectionTitle" id="resources">
              Compartilhe Os Recursos Que Ajudam Seus Clientes.
            </h2>
            <p className="LastSectionP">
              Descubra como a alala alalala alalal slsls slslsls slsl.
            </p>
          </div>

          <div className="Resources">
            <div className="Div1">
              <i className="DashIcon">
                {" "}
                <Gear size={50} />{" "}
              </i>
              <h3 className="DashTitle">Qualquer coisa</h3>
              <p className="DashP">
                qualquer tipo de texto aqui apenas para ocupar algum espaço.
                qualquer tipo de texto aqui apenas para ocupar algum espaço.
                qialqyer coisa ajdksns ajsidheidh swkeheid.
              </p>
            </div>

            <div className="Div2">
              <i className="DashIcon">
                {" "}
                <Calculator size={50} />{" "}
              </i>
              <h3 className="DashTitle">Qualquer coisa 2</h3>
              <p className="DashP">
                qualquer tipo de texto aqui apenas para ocupar algum espaço.
                qualquer tipo de texto aqui apenas para ocupar algum espaço.
                wsiehdid jdibeide diwes jeiedhd eskienje.
              </p>
            </div>

            <div className="Div3">
              <i className="DashIcon">
                {" "}
                <Pen size={50} />{" "}
              </i>
              <h3 className="DashTitle">Qualquer coisa 3</h3>
              <p className="DashP">
                qualquer tipo de texto aqui apenas para ocupar algum espaço.
                qualquer tipo de texto aqui apenas para ocupar algum espaço.
                djfide djedioewd iwide jdwid djhwihjerr.
              </p>
            </div>
          </div>
        </LastSection>

        <Footer />
      </>
    </motion.div>
  );
}
}

export default Home;
