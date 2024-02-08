import "./App.css";
import { Navbar_login, Navbar_dashboard } from "./Navbar";
import Hero from "./Hero";
import { Cards_login, Cards_dashboard } from "./Cards";

function App() {
  return (
    <>
      {/* <Navbar_login />
      <Hero />
      <Cards_login /> */}
      <Navbar_dashboard />
      <Cards_dashboard />
    </>
  );
}

export default App;
