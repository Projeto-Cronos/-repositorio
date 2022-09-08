import { Section, HeaderContent, SecondSection, Scroll, LastSection, Scroll2, Scroll3} from "./style";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ArrowDownCircle, Gear, Calculator, Pen, ArrowUpCircle } from "react-bootstrap-icons";
import Home1 from "../../assets/image/Home1.jpg";
import Home2 from "../../assets/image/Home2.jpg";

function Home() {
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
              <h2>Você tem um problema</h2>
              <br></br>
              <p className="FirstContent">
                O mercado da tecnologia é competitivo, nós sabemos. No entanto, isso não é motivo para que
                você cobre menos pelo seu serviço, tentando conseguir novos clientes. Mas, então,
                como "precificar" seu tempo de maneira justa e certeira?
              </p>
            </div>

            <div className="SecondTopic">
              <h2>Nós temos a solução</h2>
              <br></br>
              <p className="SecondContent">
                Para resolver essa questão, a CRONOS disponibiliza para os seus usuários uma ferramenta única, 
                capaz de calcular o preço médio da hora de um dev com base em informações confiáveis e atuais. 
                Além disso, na CRONOS você também tem acesso à um painel de controle para gerenciar seus projetos pessoais.
              </p>
            </div>

            <div className="Image2">
              <img src={Home2} alt="secondAboutImage" />
            </div>
          </div>
        </SecondSection>

        <LastSection>
          <div className="Container">
            <h2 className="LastSectionTitle" id="lastsection">
              Conheça os recursos que podem mudar o seu jeito de trabalhar.
            </h2>
            <p className="LastSectionP">
              Cadastre-se. Acesse. Calcule. Tudo em poucos cliques!
            </p>
          </div>

          <div className="Resources">
            <div className="Div1">
              <i className="DashIcon">
                {" "}
                <Gear size={50} />{" "}
              </i>
              <h3 className="DashTitle">Painel de controle</h3>
              <p className="DashP">
                Informe o projeto em que está trabalhando e o valor a ser cobrado pela hora. Pronto! Agora é 
                só dar um "play" para manter tudo organizado, incluíndo prazos e rendimentos por minuto.
              </p>
            </div>

                <div className="Div2">
                    <i className="DashIcon"> <Calculator size={50}/> </i>
                    <h3 className="DashTitle">Calculadora de preço/hora</h3>
                        <p className="DashP">
                          Com a calculadora de PREÇO X HORA, basta informar a principal tecnologia
                          usada no projeto, a região do país onde você vive e qual seu tempo de 
                          experiência. Em poucos segundos você terá em mãos o valor médio cobrado por outros devs como você.
                        </p>
                </div>

                <div className="Div3">
                    <i className="DashIcon"> <Pen size={50}/> </i>
                    <h3 className="DashTitle">Blog</h3>
                        <p className="DashP">
                          Tenha acesso à diversas notícias e informações sobre o universo da tecnologia
                          em um único lugar. Com a CRONOS você coordena seus projetos e ainda fica bem informado.
                        </p>
                </div>
          </div>

          <Scroll3>
                <p className="Scrolldown3">
                <a className="Smoothscroll3" href="#home">
                <i className="LearnMore3"> <ArrowUpCircle /> </i>
                </a>
                </p>
          </Scroll3>

        </LastSection>

        <Footer background-color="#fff" />
      </>
    </motion.div>
  );
}

export default Home;