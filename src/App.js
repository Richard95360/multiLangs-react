import React from "react";
import Contenu from "./Components/Contenu/Contenu";
import ToogleLangs from "./Components/ToggleLangs/ToogleLangs";
import ContextProvider from "./context/LangContext";

const App = () => {
  return (
    <ContextProvider>
     <ToogleLangs/>
     <Contenu/>
    </ContextProvider>
  );
}

export default App;
