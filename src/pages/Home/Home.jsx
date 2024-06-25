import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Why from "./Why";
import Landing from "./Landing";
import What from "./What";
import FAQ from "./FAQ";

function Home() {
    return <>
        <Navbar />
        <Landing />
        <Why />
        <What />
        <FAQ />
        <Footer />
    </>;
}

export default Home;