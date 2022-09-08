import { ContainerSection } from "./style";
import { useContext } from "react";
import Lottie from "react-lottie";
import { Context } from "../../providers/userContext";

function Error() {
  const { animateState, defaultOptions } = useContext(Context);

  return (
    <ContainerSection>
      <div className="img">
        <Lottie
          options={defaultOptions}
          isStopped={animateState.isStopped}
          isPaused={animateState.isPaused}
        />
      </div>
    </ContainerSection>
  );
}

export default Error;
