import ReactDOM from "react-dom";
import { App } from "./views/App";
import { GraphqlClient } from "./providers/index";

import "./sass/main.scss";

ReactDOM.render(
  <GraphqlClient>
    <App />
  </GraphqlClient>,
  document.getElementById("root")
);
