import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { AppContext } from "./components/context";

export function useCustomState(def) {
  const [customState, set] = useState(def);
  const get = () => {
    return customState;
  };

  return { get, set };
}
export class CartItem {
  prodImageUrl;
  prodDesc;
  prodPrice;
  prodQty;
  constructor(prodImageUrl, prodDesc, prodPrice, prodQty) {
    (this.prodImageUrl = prodImageUrl),
      (this.prodDesc = prodDesc),
      (this.prodPrice = prodPrice),
      (this.prodQty = prodQty);
  }
}

function App() {
  const contextFunctions = [useCustomState([]), useCustomState(false)];
  return (
    <div className="appMain">
      <AppContext.Provider value={contextFunctions}>
        <Header />
        <Main />
      </AppContext.Provider>
    </div>
  );
}

export default App;
