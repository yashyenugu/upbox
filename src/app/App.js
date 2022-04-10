import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Description from "./sections/description";
import Hero from "./sections/hero";
import Pricing from "./sections/pricing";
import Social from "./sections/social";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Pricing />
      <Description />
      <Social />
      <Footer />
    </div>
  );
}

export default App;
