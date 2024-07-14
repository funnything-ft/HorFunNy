import React from "react";
import { Image, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import UIButton from "../components/UIButton";
import apiInstance from "../utils/axios";
import {
  useLoaderData,
  useNavigate,
  useRouteLoaderData,
} from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const { name, image, desc, user } = useRouteLoaderData("profile-detail");
  return (
    <Container className=" lg:w-1/2 md:w-2/3 sm:w-full">
      <div className="lg:hidden flex justify-end mb-4">
        <UIButton
          className="w-32 sm:w-36"
          variant="primary"
          size="lg"
          type="button"
        >
          Edit
        </UIButton>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-5 border-b-2 pb-2 items-center sm:items-start">
        <div className="col-span-1 flex justify-center sm:pe-4">
          <Image
            src={image}
            roundedCircle
            className="object-cover w-32 h-32 sm:w-40 sm:h-40 "
          />
        </div>
        <div className="col-span-3 flex flex-col justify-center">
          <div className="px-4 text-center md:hidden">
            <h1 className="text-2xl mb-2">{user.username}</h1>
            <div className="font-bold text-xl">{name}</div>
            {desc && <p className="text-sm">{desc}</p>}
          </div>
          <div className="px-4 hidden md:block lg:hidden">
            <h1 className="text-2xl text-3xl mb-2">{user.username}</h1>
            <div className="font-bold text-xl">{name}</div>
            {desc && <p className="text-sm">{desc}</p>}
          </div>
          <div className="py-3 hidden lg:block">
            <h1 className="text-2xl text-3xl mb-2">{user.username}</h1>
            <div className="font-bold text-xl">{name}</div>
            {desc && <p className="text-sm">{desc}</p>}
          </div>
        </div>
        <div className="hidden lg:block">
          <UIButton
            className="w-32 sm:w-36"
            variant="primary"
            size="lg"
            type="button"
            onClick={() => navigate("edit")}
          >
            Edit
          </UIButton>
        </div>
      </div>
    </Container>
  );
}

export default Profile;

export function loader() {
  return apiInstance.get("profile/").then((res) => {
    return res.data;
  });
}
