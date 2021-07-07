import { StrictMode } from "react";
import ReactDOM from "react-dom";

// import App from "./component/App";
import ItemPage from "./component/itemPage/ItemPage";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* <App /> */}
    <ItemPage />
  </StrictMode>,
  rootElement
);
