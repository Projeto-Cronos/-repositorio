import 'react-toastify/dist/ReactToastify.css';
import loadingAnimated from "../assets/animation/VAPGxWYypp.json"
import { createContext,  useState } from "react";

export const Context = createContext();

const ProviderUser = ({children}) => {

    //Lottie
    const [animateState] = useState({
        isStopped: false,
        isPaused: false,
    })

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: loadingAnimated,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Context.Provider value={{ animateState, defaultOptions }}>
            {children}
        </Context.Provider>
    )
}

export default ProviderUser