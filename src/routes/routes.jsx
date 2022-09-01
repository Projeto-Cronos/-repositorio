import Register from "../pages/Register"
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login"
import Home from "../pages/Home"
import Error from "../pages/Error"
import Blog from "../pages/Blog"
import Calculator from "../pages/Calculator"
import Projects from "../pages/Projects"
import {Routes, Route} from "react-router-dom";

function RouteMain() {

    return (
    <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/calculator" element={<Calculator />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="*" element={<Error replace to="/error"/>}></Route>
    </Routes>
    )
}

export default RouteMain