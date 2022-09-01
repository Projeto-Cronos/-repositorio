import Authenticator from "./routes/routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Authenticator />
      <ToastContainer toastStyle={{ backgroundColor: "#ffffff", color: "white" }}autoClose={1500}/>
    </>
  )

}

export default App;
