import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* App Body */}
      <div className="app-body">
        <Sidebar />
        <Feed />
        {/* Feed */}
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
