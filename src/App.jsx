import "./App.css";

import HomePage from "./components/HomePage.jsx";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <div>
      <ParallaxProvider>
        <HomePage />
      </ParallaxProvider>
    </div>
  );
}

export default App;
