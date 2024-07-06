import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="flex justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold underline text-clifford">
            HorFunNy
          </h1>
          <Button>Test</Button>
        </div>
      </main>
    </>
  );
}

export default App;
