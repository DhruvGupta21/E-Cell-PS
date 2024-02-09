import "./App.css";
import { Navbar_login, Navbar_dashboard, Navbar_flash, Navbar_bags } from "./Navbar";
import Hero from "./Hero";
import { Cards_login, Cards_dashboard } from "./Cards";
import Shop from "./Shop";
import Map from "./Map";

function App() {
  return (
    <>
      {/* <Navbar_login />
      <Hero /> 
      <Cards_login /> 
 */}

      {/* <Navbar_dashboard />
      <Cards_dashboard />   */}

      

       {/* <Navbar_bags /> 
       <Shop /> */}


      <Navbar_flash />
      <Map />

    </>
  );
}

export default App;
