import { Main, Section } from "./style";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import { useContext } from "react";
import { Context } from "../../providers/userContext";
import imgTest from "../../img/teste.jpg";

function Blog() {
  const { token, navigate, listNews } = useContext(Context);

  if (token) {
    setTimeout(() => {
      navigate("/dashboard");
    }, 100);
  } else {
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
              {listNews.map((element,index) => {
                return (
                  index === 0 && (
                    <div key={element._id} className="mainCard">
                      <img className="mainCardImg" src={element.media} alt="foto" />
                      <div className="mainContent">
                        <span className="mainInfo">{element.summary}</span>
                        <p className="mainText">{element.published_date}</p>
                        <h2>{element.title}</h2>
                      </div>
                    </div>
                  )
                );
              })}
              <ul>
                {listNews.map((element, index) => {
                  return (
                    index !== 0 && (
                      <li key={element._id}>
                        <div className="containerImage">
                          <img
                            className="liCardImg"
                            src={element.media}
                            alt="foto"
                          />
                          <p className="liText">{element.published_date}</p>
                        </div>
                        <div className="containerInfo">
                          <h3>{element.title}</h3>
                          <span>{element.summary}</span>
                          <a href={element.link}>READ MORE</a>
                        </div>
                      </li>
                    )
                  );
                })}
              </ul>
            </Main>
          </Section>
        </>
      </motion.div>
    );
  }
}

export default Blog;
