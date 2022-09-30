import { createRoot } from "react-dom/client";
import Footer from "./components/page/Footer";
import Header from "./components/page/Header";
import Main from "./components/page/Main";
import "./style.css";

const App = () => {
    return (
        <>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </>
    );
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);