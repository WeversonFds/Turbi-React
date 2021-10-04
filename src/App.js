import React from "react";
import ROUTES, { RenderRoutes } from "./routes";
import Navbar from "components/commom/navbar"
function App() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", alignItems: "stretch" }}>
      <Navbar title={[{'title':'Lista de contatos'}]} />
      <div className={"content"}>
        <RenderRoutes routes={ROUTES} />
      </div>
    </div>
  );
}

export default App;
