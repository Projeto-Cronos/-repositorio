import Authenticator from "./routes/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { themes } from "./style/theme";
import { useContext } from "react";
import { Context } from "./providers/userContext";
import { ThemeProvider } from "styled-components";

function App() {
  const { currentTheme} = useContext(Context);

  return (
    <>
    <ThemeProvider theme={themes[currentTheme]}>
      <Authenticator />
      <ToastContainer
        toastStyle={{ backgroundColor:"white" , color: "black" }}
        autoClose={1500}
      />
      </ThemeProvider>
    </>
  );
}

export default App;
