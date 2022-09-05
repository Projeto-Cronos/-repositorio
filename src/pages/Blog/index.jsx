import { Main, Section } from "./style";
import { motion } from "framer-motion";
import Header from "../../components/Header";

import imgTest from "../../img/teste.jpg";

function Blog() {
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
          <Main>
            <h1>Blog</h1>
            <div className="mainCard">
              <img className="mainCardImg" src={imgTest} alt="foto" />
              <div className="mainContent">
                <span className="mainInfo">
                  Design begins after I begin to think about how to present an
                  experience most successfully, whether a button I put in can
                  solve a problem. The only point in design is not ui design, if
                  the user does not have a good experience at the end of
                </span>
                <p className="mainText">NOV 23 2020</p>
                <h2>This way is it.</h2>
              </div>
            </div>
            <ul>
              <li>
                <div className="containerImage">
                  <img className="liCardImg" src={imgTest} alt="foto" />
                  <p className="liText">NOV 23 2020</p>
                </div>
                <div className="containerInfo">
                  <h3>This way is wrong about UI Design.</h3>
                  <span>
                    A quick guide to assisting users in the. larning about your
                    podcast on the web.{" "}
                  </span>
                  <br />
                  <a href="/">READ MORE</a>
                </div>
              </li>
              <li>
                <div className="containerImage">
                  <img className="liCardImg" src={imgTest} alt="foto" />
                  <p className="liText">NOV 23 2020</p>
                </div>
                <div className="containerInfo">
                  <h3>This way is wrong about UI Design.</h3>
                  <span>
                    A quick guide to assisting users in the. larning about your
                    podcast on the web.{" "}
                  </span>
                  <br />
                  <a href="/">READ MORE</a>
                </div>
              </li>
              <li>
                <div className="containerImage">
                  <img className="liCardImg" src={imgTest} alt="foto" />
                  <p className="liText">NOV 23 2020</p>
                </div>
                <div className="containerInfo">
                  <h3>This way is wrong about UI Design.</h3>
                  <span>
                    A quick guide to assisting users in the. larning about your
                    podcast on the web.{" "}
                  </span>
                  <br />
                  <a href="/">READ MORE</a>
                </div>
              </li>
              <li>
                <div className="containerImage">
                  <img className="liCardImg" src={imgTest} alt="foto" />
                  <p className="liText">NOV 23 2020</p>
                </div>
                <div className="containerInfo">
                  <h3>This way is wrong about UI Design.</h3>
                  <span>
                    A quick guide to assisting users in the. larning about your
                    podcast on the web.{" "}
                  </span>
                  <br />
                  <a href="/">READ MORE</a>
                </div>
              </li>
            </ul>
          </Main>
        </Section>
      </>
    </motion.div>
  );
}

export default Blog;
