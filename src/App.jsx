import Banner from "./components/banner/Banner";
import BestSellers from "./components/bestsellers/BestSellers";
import Brand from "./components/brand/Brand";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import TopSelections from "./components/topselections/TopSelections";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Brand />
      <TopSelections />
      <BestSellers />
      <Banner />
    </>
  );
}

export default App;
