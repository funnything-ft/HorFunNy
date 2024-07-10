import React from "react";
import { useRouteError } from "react-router-dom";
import Header from "../components/Header";

function Error() {
  const error = useRouteError();

  let title = "An error occurred!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-center">{title}</h1>
        <p className="text-center">{message}</p>
      </div>
    </>
  );
}

export default Error;
