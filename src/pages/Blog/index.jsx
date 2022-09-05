import { Section, Main, Title } from "./style";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import ListCardNews from "../../components/ListCardNews";
import ModalEdit from "../../components/Modal/ModalDetailsBLog";
import Footer from "../../components/Footer";

function Blog() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <>
        <Section>
          <Header />
          <Main>
            <Title>Blog</Title>
            <ListCardNews />
            
          </Main>
          <Footer />
        </Section>
        <ModalEdit />
      </>
    </motion.div>
  );
}

export default Blog;
