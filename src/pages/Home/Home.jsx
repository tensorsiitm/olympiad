import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Why from "./Why";
import Landing from "./Landing";
import What from "./What";
import FAQ from "./FAQ";
import Model from './Model'
function Home() {
    return <>
        <Navbar />
        <Landing />
        <Model/>
        <Why />
        <What />
        <FAQ />
        <Footer />
    </>;
}

export default Home;