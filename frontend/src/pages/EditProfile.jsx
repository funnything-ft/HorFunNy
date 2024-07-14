import React from "react";
import { Table, Container, Image } from "react-bootstrap";
import { useRouteLoaderData } from "react-router-dom";
import ProfileForm from "../components/ProfileForm";

export default function EditProfile() {
  const { image, user } = useRouteLoaderData("profile-detail");
  const sectionListClass = "hover:bg-slate-200 text-center font-semibold py-2";
  return (
    <Container>
      <Table bordered size="sm">
        <tbody>
          <tr>
            <td rowSpan={2}>
              <div className="w-14 mx-auto mt-4">
                <Image src={image} roundedCircle className="object-cover" />
              </div>
              <p className="text-center font-bold">{user.username}</p>
              <ul className="p-0 grid grid-cols gap-2">
                <li className={sectionListClass}>Profile</li>
                <li className={sectionListClass}>Photo</li>
              </ul>
            </td>
            <td className="text-center">
              <h1>Public profile</h1>
              <p>Add information about yourself</p>
            </td>
          </tr>
          <tr>
            <td>
              <ProfileForm />
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
