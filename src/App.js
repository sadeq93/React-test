import "./App.css";
import React from "react";
import PagesRoute from "./Routes/PagesRoute";
import { ModuleProvider } from "./util/Context";

function App() {
  return (
    <div className="app-container">
      <ModuleProvider>
        <PagesRoute />
      </ModuleProvider>
    </div>
  );
}

export default App;
