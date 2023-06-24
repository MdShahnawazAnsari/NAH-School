import Carousel from "./components/carousel/Carousel";
import ChoseSchool from "./components/choseSchool/ChoseSchool";
import ChoseUs from "./components/choseUs/ChoseUs";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HeroBanner from "./components/heroBanner/HeroBanner";
import HeroCard from "./components/heroCard/HeroCard";
import Icons from "./components/icons/Icons";
import Principle from "./components/principle/Principle";
import Updates from "./components/updates/Updates";

const App = () => {
  return (
    <div>
      <Header />
      <HeroBanner />
      <HeroCard />
      <ChoseUs />
      <Icons />
      <ChoseSchool />
      <Carousel />
      <Principle />
      <Updates />
      <Footer />
    </div>
  );
};

export default App;
