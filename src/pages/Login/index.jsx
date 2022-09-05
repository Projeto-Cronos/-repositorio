import {
  Section,
  Div,
} from "./style";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { useContext } from "react";
import { Context } from "../../providers/userContext";
import Header from "../../components/Header";
import Lottie from "react-lottie";
import FormLogin from "../../components/FormLogin";

function Login() {

  const { animateState, defaultOptionsOne } = useContext(Context);

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
          <Div>
            <FormLogin />
            <div className="img">
              <Lottie
                options={defaultOptionsOne}
                isStopped={animateState.isStopped}
                isPaused={animateState.isPaused}
              />
            </div>
          </Div>
        </Section>
      </>
    </motion.div>
  );
}

export default Login;
