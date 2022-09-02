import { Main, Section } from "./style";
import { motion } from "framer-motion";
import Header from "../../components/Header";

import imgTest from "../../img/imgTeste.png";

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
              <p className="mainText">NOV 23 2020</p>
              <h2>This way is it.</h2>
            </div>
            <ul>
                <li>
                    <img className="liCardImg" src={imgTest} alt="foto" />
                    <div className="containerInfo" >
                        <h3>This way is wrong about UI Design.</h3>
                        <span>A quick guide to assisting users in the. larning about your podcast on the web. </span>
                        <br />
                        <a href="/">READ MORE</a>
                    </div>
                </li>
                <li>
                    <img className="liCardImg" src={imgTest} alt="foto" />
                    <div className="containerInfo" >
                        <h3>This way is wrong about UI Design.</h3>
                        <span>A quick guide to assisting users in the. larning about your podcast on the web. </span>
                        <br />
                        <a href="/">READ MORE</a>
                    </div>
                </li>
                <li>
                    <img className="liCardImg" src={imgTest} alt="foto" />
                    <div className="containerInfo" >
                        <h3>This way is wrong about UI Design.</h3>
                        <span>A quick guide to assisting users in the. larning about your podcast on the web. </span>
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
