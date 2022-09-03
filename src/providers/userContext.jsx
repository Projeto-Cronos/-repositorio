import 'react-toastify/dist/ReactToastify.css';
import loadingAnimated from "../assets/animation/VAPGxWYypp.json"
import { createContext,  useState } from "react";
import { useNavigate } from 'react-router-dom';

export const Context = createContext();

const ProviderUser = ({children}) => {

    const [valuePerMinute, setValuePerMinute] = useState(0)

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

    const navigate = useNavigate()

    return (
        <Context.Provider value={{ animateState, defaultOptions, navigate, valuePerMinute, setValuePerMinute}}>
            {children}
        </Context.Provider>
    )
}

export default ProviderUser