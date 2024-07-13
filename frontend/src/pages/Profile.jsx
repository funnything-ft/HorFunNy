import React from "react";
import { Image, Container } from "react-bootstrap";
import DefaultProfileImage from "../assets/default-profile.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import UIButton from "../components/UIButton";

function Profile() {
  return (
    <Container className="lg:w-1/2 lg:w-1/3 lg:w-1/4">
      <div className="lg:hidden flex mb-4">
        <UIButton
          className="w-32 ml-auto"
          variant="primary"
          size="lg"
          type="button"
        >
          Edit
        </UIButton>
      </div>
      <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-20 space-x-0">
        <div className="w-40 h-40 lg:w-64 lg:h-64 flex-shrink-0 mx-auto">
          <Image
            src={DefaultProfileImage}
            roundedCircle
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-center lg:hidden">Name</h1>
          <h1 className="hidden lg:block">Name</h1>
          <p className="text-center lg:hidden">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis amet recusandae laborum temporibus consequatur neque
            consequuntur porro quia iure commodi!
          </p>
          <p className="hidden lg:block">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis amet recusandae laborum temporibus consequatur neque
            consequuntur porro quia iure commodi!
          </p>
        </div>
        <div className="hidden lg:block flex flex-col">
          <UIButton className="w-32" variant="primary" size="lg" type="button">
            Edit
          </UIButton>
        </div>
      </div>
    </Container>
  );
}

export default Profile;
