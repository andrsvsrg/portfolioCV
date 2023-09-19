import "./App.css";

import HomePage from "./components/HomePage.jsx";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <>
      <ParallaxProvider>
        <HomePage />
      </ParallaxProvider>
    </>
  );
}

export default App;
