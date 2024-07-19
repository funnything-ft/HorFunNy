import React from "react";
import UIButton from "../components/UIButton";
import UIInput from "../components/UIInput";

function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold underline text-clifford">HorFunNy</h1>
      <UIButton variant="outline-primary" size="lg" className="my-5">
        Test
      </UIButton>
      <div className="w-1/3">
        <UIInput
          id="username"
          label="Username"
          type="text"
          placeholder="Username"
        />
      </div>
    </div>
  );
}

export default Home;
