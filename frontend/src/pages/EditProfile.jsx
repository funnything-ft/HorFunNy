import React, { Suspense } from "react";
import { Table, Container, Image } from "react-bootstrap";
import {
  Await,
  useNavigate,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";
import ProfileForm, { UpdateProfile } from "../components/ProfileForm";
import ProfileUploadPhotoForm, {
  UploadPhoto,
} from "../components/ProfileUploadPhotoForm";

const formActions = {
  profile: "update-profile",
  photo: "update-photo",
};
const forms = {
  profile: <ProfileForm action={formActions.profile} />,
  photo: <ProfileUploadPhotoForm action={formActions.photo} />,
};

export default function EditProfile() {
  const data = useRouteLoaderData("profile-detail");
  const { profile } = data;
  const { form } = useParams();
  const navigate = useNavigate();
  const sectionListClass = "hover:bg-slate-200 text-center font-semibold py-2";
  return (
    <Container>
      <Table bordered size="sm">
        <tbody>
          <tr>
            <td rowSpan={2} className="w-56">
              <Suspense
                fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
              >
                <Await resolve={profile}>
                  {(profile) => {
                    return (
                      <>
                        <div className="w-12 mx-auto mt-4">
                          <Image
                            src={profile.image}
                            roundedCircle
                            className="object-cover w-12 h-12"
                          />
                        </div>
                        <p className="text-center font-bold">
                          {profile.user.username}
                        </p>
                      </>
                    );
                  }}
                </Await>
              </Suspense>
              <ul className="p-0 grid grid-cols gap-2">
                <li
                  className={`${sectionListClass} ${
                    form === "profile" ? "bg-slate-200" : ""
                  }`}
                  onClick={() => navigate("/profile/edit/profile")}
                >
                  Profile
                </li>
                <li
                  className={`${sectionListClass} ${
                    form === "photo" ? "bg-slate-200" : ""
                  }`}
                  onClick={() => navigate("/profile/edit/photo")}
                >
                  Photo
                </li>
              </ul>
            </td>
            <td className="text-center">
              <h1>Public profile</h1>
              <p>Add information about yourself</p>
            </td>
          </tr>
          <tr>
            <td>{forms[form]}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const action = formData.get("action");

  if (action == formActions.profile) {
    const data = {
      name: formData.get("name"),
      desc: formData.get("desc"),
      gender: formData.get("gender"),
    };
    return UpdateProfile(data);
  } else if (action == formActions.photo) {
    const data = {
      image: formData.get("image"),
    };
    return UploadPhoto(data);
  }
}
