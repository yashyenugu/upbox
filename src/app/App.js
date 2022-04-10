import Navbar from "./layout/Navbar";
import Hero from "./sections/hero";
import Pricing from "./sections/pricing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Pricing />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
