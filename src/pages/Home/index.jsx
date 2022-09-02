import { Section} from "./style"
import { motion } from "framer-motion"
import Header from "../../components/Header";

function Home() {
 
    return (
        <motion.div 
        initial={{opacity:0.75}}
        animate={{opacity:1}}
        exit={{ opacity:0 }}
        transition={{ duration: 0.5 }}
        >
        <>
        <Section>
            <Header />  
        </Section>
        </>
        </motion.div>
    )
}

export default Home
