import React from "react";
import SystemRoutes from "./routes/Index";
import GlobalStyle from "./styles/global";

const App: React.FunctionComponent = () => {
  return (
    <div>
      <GlobalStyle />
      <SystemRoutes />
    </div>
  );
};

export default App;
