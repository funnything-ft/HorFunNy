import React from "react";
import UIButton from "../components/UIButton";
import UIInput from "../components/UIInput";
import apiInstance from "../utils/axios";

function Home() {
  function handleClick() {
    apiInstance.post("refresh/session/").then((res) => {
      console.log(res.data.session_expiry);
    });
  }
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold underline text-clifford">HorFunNy</h1>
      <UIButton
        variant="outline-primary"
        size="lg"
        className="my-5"
        onClick={handleClick}
      >
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
